import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ListFilter as Filter, X, ChevronDown } from 'lucide-react';
import { supabase, type Product, type Category } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

const sortOptions = [
  { label: 'Newest', value: 'created_at:desc' },
  { label: 'Price: Low to High', value: 'price_min:asc' },
  { label: 'Price: High to Low', value: 'price_min:desc' },
  { label: 'Name: A–Z', value: 'name:asc' },
];

export default function Shop() {
  const { category } = useParams<{ category?: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('created_at:desc');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<'all' | 'under5k' | '5k-20k' | 'over20k'>('all');

  const currentCategory = categories.find(c => c.slug === category);

  useEffect(() => {
    supabase.from('product_categories').select('*').order('sort_order')
      .then(({ data }) => setCategories((data as Category[]) ?? []));
  }, []);

  useEffect(() => {
    loadProducts();
  }, [category, sort]);

  async function loadProducts() {
    setLoading(true);
    const [field, direction] = sort.split(':');
    let query = supabase
      .from('products')
      .select('*, product_categories(name, slug)')
      .order(field as 'name' | 'price_min' | 'created_at', { ascending: direction === 'asc' });

    if (category) {
      const catData = await supabase.from('product_categories').select('id').eq('slug', category).maybeSingle();
      if (catData.data) {
        query = query.eq('category_id', catData.data.id);
      }
    }

    const { data } = await query;
    setProducts((data as Product[]) ?? []);
    setLoading(false);
  }

  const brands = [...new Set(products.map(p => p.brand).filter(Boolean))].sort();

  const filtered = products.filter(p => {
    if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
    if (priceFilter === 'under5k' && p.price_min && p.price_min >= 5000) return false;
    if (priceFilter === '5k-20k' && p.price_min && (p.price_min < 5000 || p.price_min > 20000)) return false;
    if (priceFilter === 'over20k' && p.price_min && p.price_min <= 20000) return false;
    return true;
  });

  function toggleBrand(brand: string) {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  }

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Header */}
      <div style={{ background: 'var(--color-primary-50)', padding: '48px 0' }}>
        <div className="container">
          <nav style={{ fontSize: '0.7rem', color: 'var(--color-primary-500)', marginBottom: '16px' }}>
            <Link to="/" style={{ transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary-900)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-primary-500)')}>Home</Link>
            {' / '}
            <Link to="/shop" style={{ transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary-900)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-primary-500)')}>Shop</Link>
            {currentCategory && <>{' / '}{currentCategory.name}</>}
          </nav>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>
            {currentCategory ? currentCategory.name : 'All Products'}
          </h1>
          <p style={{ color: 'var(--color-primary-500)', marginTop: '8px', fontSize: '0.85rem' }}>
            {loading ? '...' : `${filtered.length} products`}
          </p>
        </div>
      </div>

      {/* Category tabs */}
      <div style={{ borderBottom: '1px solid var(--color-primary-200)', overflowX: 'auto' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0', paddingTop: '0' }}>
            <Link to="/shop" style={{
              fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '16px 20px', color: !category ? 'var(--color-primary-900)' : 'var(--color-primary-500)',
              borderBottom: !category ? '2px solid var(--color-primary-900)' : '2px solid transparent',
              whiteSpace: 'nowrap', transition: 'color 0.2s',
            }}>All</Link>
            {categories.map(cat => (
              <Link key={cat.slug} to={`/shop/${cat.slug}`} style={{
                fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '16px 20px', color: category === cat.slug ? 'var(--color-primary-900)' : 'var(--color-primary-500)',
                borderBottom: category === cat.slug ? '2px solid var(--color-primary-900)' : '2px solid transparent',
                whiteSpace: 'nowrap', transition: 'color 0.2s',
              }}>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 24px' }}>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
          {/* Sidebar filters - desktop */}
          <aside style={{ width: '220px', flexShrink: 0, display: 'none' }} className="filter-sidebar">
            <FilterPanel
              brands={brands} selectedBrands={selectedBrands} toggleBrand={toggleBrand}
              priceFilter={priceFilter} setPriceFilter={setPriceFilter}
            />
          </aside>

          <div style={{ flex: 1 }}>
            {/* Toolbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
              <button onClick={() => setFilterOpen(f => !f)} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                border: '1px solid var(--color-primary-300)', padding: '10px 16px', background: '#fff',
                cursor: 'pointer', transition: 'all 0.2s',
              }}>
                <Filter size={14} /> Filter {(selectedBrands.length > 0 || priceFilter !== 'all') && `(${selectedBrands.length + (priceFilter !== 'all' ? 1 : 0)})`}
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-primary-500)', fontWeight: 500 }}>Sort:</span>
                <div style={{ position: 'relative' }}>
                  <select value={sort} onChange={e => setSort(e.target.value)} style={{
                    appearance: 'none', border: '1px solid var(--color-primary-300)', padding: '10px 32px 10px 12px',
                    fontSize: '0.75rem', background: '#fff', cursor: 'pointer', color: 'var(--color-primary-900)',
                  }}>
                    {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--color-primary-500)' }} />
                </div>
              </div>
            </div>

            {/* Active filters */}
            {(selectedBrands.length > 0 || priceFilter !== 'all') && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                {selectedBrands.map(b => (
                  <button key={b} onClick={() => toggleBrand(b)} style={{
                    display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px',
                    background: 'var(--color-primary-900)', color: '#fff',
                    fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: 'none', cursor: 'pointer',
                  }}>
                    {b} <X size={10} />
                  </button>
                ))}
                {priceFilter !== 'all' && (
                  <button onClick={() => setPriceFilter('all')} style={{
                    display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px',
                    background: 'var(--color-primary-900)', color: '#fff',
                    fontSize: '0.65rem', fontWeight: 600, cursor: 'pointer', border: 'none',
                  }}>
                    {priceFilter === 'under5k' ? 'Under £5k' : priceFilter === '5k-20k' ? '£5k–£20k' : 'Over £20k'} <X size={10} />
                  </button>
                )}
              </div>
            )}

            {/* Filter panel (mobile toggle) */}
            {filterOpen && (
              <div style={{
                border: '1px solid var(--color-primary-200)', padding: '24px',
                marginBottom: '32px', background: 'var(--color-primary-50)',
                animation: 'fadeInUp 0.2s ease',
              }}>
                <FilterPanel
                  brands={brands} selectedBrands={selectedBrands} toggleBrand={toggleBrand}
                  priceFilter={priceFilter} setPriceFilter={setPriceFilter}
                />
              </div>
            )}

            {/* Products grid */}
            {loading ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '32px' }}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} style={{ animation: 'pulse 1.5s infinite' }}>
                    <div style={{ aspectRatio: '3/4', background: 'var(--color-primary-200)', marginBottom: '12px' }} />
                    <div style={{ height: '12px', background: 'var(--color-primary-200)', marginBottom: '8px', width: '60%' }} />
                    <div style={{ height: '16px', background: 'var(--color-primary-200)', marginBottom: '8px', width: '80%' }} />
                    <div style={{ height: '12px', background: 'var(--color-primary-200)', width: '40%' }} />
                    <style>{`@keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.5} }`}</style>
                  </div>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-primary-400)', marginBottom: '16px' }}>No products found</p>
                <button onClick={() => { setSelectedBrands([]); setPriceFilter('all'); }} className="btn btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '32px' }}>
                {filtered.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(min-width:1024px){.filter-sidebar{display:block!important}}`}</style>
    </div>
  );
}

function FilterPanel({ brands, selectedBrands, toggleBrand, priceFilter, setPriceFilter }: {
  brands: string[];
  selectedBrands: string[];
  toggleBrand: (b: string) => void;
  priceFilter: string;
  setPriceFilter: (v: 'all' | 'under5k' | '5k-20k' | 'over20k') => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h4 style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px', color: 'var(--color-primary-700)' }}>
          Price Range
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { label: 'All Prices', value: 'all' },
            { label: 'Under £5,000', value: 'under5k' },
            { label: '£5,000 – £20,000', value: '5k-20k' },
            { label: 'Over £20,000', value: 'over20k' },
          ].map(opt => (
            <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.8rem', color: 'var(--color-primary-700)' }}>
              <input type="radio" name="price" checked={priceFilter === opt.value}
                onChange={() => setPriceFilter(opt.value as 'all' | 'under5k' | '5k-20k' | 'over20k')}
                style={{ accentColor: 'var(--color-primary-900)' }} />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {brands.length > 0 && (
        <div>
          <h4 style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px', color: 'var(--color-primary-700)' }}>
            Brand
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '240px', overflowY: 'auto' }}>
            {brands.map(brand => (
              <label key={brand} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.8rem', color: 'var(--color-primary-700)' }}>
                <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)}
                  style={{ accentColor: 'var(--color-primary-900)' }} />
                {brand}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
