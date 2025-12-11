import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Using fallback data.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface Project {
  id: string;
  title: string;
  slug: string;
  description?: string;
  long_description?: string;
  image_url?: string;
  demo_url?: string;
  github_url?: string;
  technologies: string[];
  category?: string;
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  views_count: number;
  likes_count: number;
  order_index: number;
  created_at: string;
  updated_at: string;
  published_at?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  avatar_url?: string;
  content: string;
  rating?: number;
  featured: boolean;
  status: 'draft' | 'published';
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  company?: string;
  status?: string;
  created_at?: string;
}
