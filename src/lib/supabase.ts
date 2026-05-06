import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  name: string;
  slug: string;
  brand: string;
  designer: string;
  description: string;
  price_min: number | null;
  price_max: number | null;
  currency: string;
  price_on_request: boolean;
  category_id: string;
  images: string[];
  tags: string[];
  in_stock: boolean;
  lead_time: string;
  materials: string;
  dimensions: string;
  is_new_in: boolean;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
  product_categories?: {
    name: string;
    slug: string;
  };
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  parent_id: string | null;
  description: string;
  sort_order: number;
};

export type CartItem = {
  id: string;
  session_id: string;
  product_id: string;
  quantity: number;
  product?: Product;
};

export type Order = {
  id: string;
  order_ref: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  shipping_address: string;
  subtotal: number;
  total: number;
  currency: string;
  payment_gateway: string;
  payment_reference: string;
  payment_status: string;
  order_status: string;
  notes: string;
  created_at: string;
};
