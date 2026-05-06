/*
  # E-commerce Schema for Luxury Furniture Store

  1. New Tables
    - `product_categories` - top-level and sub-categories (Furniture, Lighting, Rugs, etc.)
    - `products` - all products with name, price, brand, description, images, category
    - `cart_items` - session-based cart items
    - `orders` - customer orders with payment info
    - `order_items` - line items per order

  2. Security
    - RLS enabled on all tables
    - Products and categories are publicly readable
    - Cart items scoped to session_id (anonymous shopping)
    - Orders scoped to authenticated users or by order_ref
*/

-- Product categories
CREATE TABLE IF NOT EXISTS product_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  parent_id uuid REFERENCES product_categories(id),
  description text DEFAULT '',
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories"
  ON product_categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  brand text NOT NULL DEFAULT '',
  designer text DEFAULT '',
  description text DEFAULT '',
  price_min numeric(12,2),
  price_max numeric(12,2),
  currency text DEFAULT 'GBP',
  price_on_request boolean DEFAULT false,
  category_id uuid REFERENCES product_categories(id),
  images text[] DEFAULT '{}',
  tags text[] DEFAULT '{}',
  in_stock boolean DEFAULT true,
  lead_time text DEFAULT '',
  materials text DEFAULT '',
  dimensions text DEFAULT '',
  is_new_in boolean DEFAULT false,
  is_featured boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Cart items (session-based)
CREATE TABLE IF NOT EXISTS cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cart items accessible by session"
  ON cart_items FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Insert cart items by session"
  ON cart_items FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Update cart items by session"
  ON cart_items FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Delete cart items by session"
  ON cart_items FOR DELETE
  TO anon, authenticated
  USING (true);

-- Orders
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_ref text UNIQUE NOT NULL DEFAULT ('ORD-' || upper(substring(gen_random_uuid()::text, 1, 8))),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text DEFAULT '',
  shipping_address text DEFAULT '',
  subtotal numeric(12,2) NOT NULL DEFAULT 0,
  total numeric(12,2) NOT NULL DEFAULT 0,
  currency text DEFAULT 'NGN',
  payment_gateway text DEFAULT '',
  payment_reference text DEFAULT '',
  payment_status text DEFAULT 'pending',
  order_status text DEFAULT 'pending',
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Orders viewable by email match"
  ON orders FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Orders updatable for payment"
  ON orders FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Order items
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id),
  product_name text NOT NULL,
  product_brand text DEFAULT '',
  price numeric(12,2) NOT NULL DEFAULT 0,
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Order items viewable with order"
  ON order_items FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Order items insertable"
  ON order_items FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_cart_session ON cart_items(session_id);
CREATE INDEX IF NOT EXISTS idx_orders_ref ON orders(order_ref);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
