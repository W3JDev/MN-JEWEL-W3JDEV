-- ============================================
-- MN JEWEL PORTFOLIO CMS DATABASE SCHEMA
-- ============================================
-- Run this in your Supabase SQL Editor
-- https://supabase.com/dashboard/project/_/sql

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TABLES
-- ============================================

-- 1. Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    long_description TEXT,
    image_url TEXT,
    demo_url TEXT,
    github_url TEXT,
    technologies JSONB DEFAULT '[]'::jsonb,
    category VARCHAR(100),
    featured BOOLEAN DEFAULT false,
    status VARCHAR(50) DEFAULT 'published',
    views_count INTEGER DEFAULT 0,
    likes_count INTEGER DEFAULT 0,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    published_at TIMESTAMP WITH TIME ZONE
);

-- 2. Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255),
    company VARCHAR(255),
    avatar_url TEXT,
    content TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    featured BOOLEAN DEFAULT false,
    status VARCHAR(50) DEFAULT 'published',
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Newsletter Subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    status VARCHAR(50) DEFAULT 'active',
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured) WHERE featured = true;

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Public can read published content
CREATE POLICY "Public read published projects" ON projects FOR SELECT USING (status = 'published');
CREATE POLICY "Public read published testimonials" ON testimonials FOR SELECT USING (status = 'published');

-- Anyone can submit contact forms
CREATE POLICY "Public insert contact" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert newsletter" ON newsletter_subscribers FOR INSERT WITH CHECK (true);

-- Admin (authenticated users) full access
CREATE POLICY "Auth full access projects" ON projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth full access testimonials" ON testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth full access contact" ON contact_submissions FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth full access newsletter" ON newsletter_subscribers FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- SAMPLE DATA
-- ============================================

INSERT INTO projects (title, slug, description, technologies, category, featured, status, published_at) 
VALUES (
    'MN Jewel Portfolio',
    'mn-jewel-portfolio',
    'Personal portfolio website with 3D animations and glassmorphism design',
    '["React", "TypeScript", "Three.js", "Vite", "Tailwind CSS"]'::jsonb,
    'Web Development',
    true,
    'published',
    NOW()
) ON CONFLICT (slug) DO NOTHING;

-- Success!
SELECT 'Portfolio CMS Database Created Successfully! 🎉' as message,
       'Tables: projects, testimonials, contact_submissions, newsletter_subscribers' as tables,
       'Go to DATABASE_SETUP.md for integration instructions' as next_step;
