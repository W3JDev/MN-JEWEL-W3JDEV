# 🎨 Portfolio CMS Setup Guide

Your portfolio is now **CMS-ready** with Supabase! Follow these steps to activate the database backend and start managing content dynamically.

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign in
2. Click **"New Project"**
3. Fill in:
   - **Name**: `w3jdev-portfolio`
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to you (e.g., `Singapore (Southeast Asia)`)
4. Wait 2 minutes for project to initialize

### Step 2: Run Database Schema

1. In your Supabase project, go to **SQL Editor** (left sidebar)
2. Open the file `supabase-schema.sql` from this repo
3. **Copy all the SQL code**
4. Paste it into the Supabase SQL Editor
5. Click **"Run"** (bottom right)
6. You should see: ✅ **"Portfolio CMS Database Created Successfully! 🎉"**

### Step 3: Get Your API Keys

1. In Supabase, go to **Project Settings** → **API**
2. Copy these two values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (long string starting with `eyJ...`)

### Step 4: Configure Your Portfolio

1. Create a file named `.env` in your project root (same folder as `package.json`)
2. Copy `.env.example` content and replace with your actual values:

\`\`\`env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

### Step 5: Install Supabase Client

\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

### Step 6: Create Integration Files

Create `src/lib/` folder and add these two files:

#### `src/lib/supabaseClient.ts`
\`\`\`typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Project {
  id: string;
  title: string;
  slug: string;
  description?: string;
  image_url?: string;
  demo_url?: string;
  github_url?: string;
  technologies: string[];
  category?: string;
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
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
  created_at: string;
}
\`\`\`

#### `src/lib/api.ts`
\`\`\`typescript
import { supabase } from './supabaseClient';

export const projectsApi = {
  async getAll() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('status', 'published')
      .order('order_index');
    if (error) throw error;
    return data;
  },

  async getFeatured() {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('status', 'published')
      .eq('featured', true)
      .limit(6);
    return data || [];
  }
};

export const testimonialsApi = {
  async getAll() {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .eq('status', 'published')
      .order('order_index');
    return data || [];
  }
};

export const contactApi = {
  async submit(formData: { name: string; email: string; subject?: string; message: string }) {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([formData])
      .select()
      .single();
    if (error) throw error;
    return data;
  }
};
\`\`\`

### Step 7: Test It!

\`\`\`bash
npm run dev
\`\`\`

Open your browser console and test:
\`\`\`javascript
import { projectsApi } from './src/lib/api';
const projects = await projectsApi.getAll();
console.log('Projects from database:', projects);
\`\`\`

---

## 📊 Database Tables

Your portfolio CMS includes:

| Table | Purpose | Features |
|-------|---------|----------|
| **projects** | Portfolio projects | Published/draft status, featured flag, view counter |
| **testimonials** | Client testimonials | Rating system, featured selection |
| **contact_submissions** | Contact form data | Automatic timestamp, status tracking |
| **newsletter_subscribers** | Email list | Subscription management |

---

## 🔐 Security Features

✅ **Row Level Security (RLS)** enabled on all tables
✅ Public can read **published** content only
✅ Public can submit contact forms
✅ Only **authenticated users** can edit content

---

## 🎯 Next Steps: Add Content

### Option 1: Supabase Dashboard (Easiest)

1. Go to your Supabase project → **Table Editor**
2. Select `projects` table
3. Click **"Insert row"**
4. Fill in project details
5. Set `status` to `"published"`
6. Save!

### Option 2: SQL Insert

\`\`\`sql
INSERT INTO projects (title, slug, description, technologies, category, featured, status, published_at)
VALUES (
  'My Awesome Project',
  'my-awesome-project',
  'A cool project I built',
  '["React", "TypeScript", "Tailwind"]'::jsonb,
  'Web Development',
  true,
  'published',
  NOW()
);
\`\`\`

---

## 🛠️ Integration with Components

Update your existing components to fetch from database:

\`\`\`typescript
// In Projects component
import { useEffect, useState } from 'react';
import { projectsApi } from './lib/api';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    projectsApi.getFeatured().then(setProjects);
  }, []);

  return (
    <div>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
\`\`\`

---

## 📝 Environment Variables

Never commit `.env` to GitHub! It's already in `.gitignore`.

For **Vercel deployment**, add environment variables in:
**Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**

Add:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

---

## 🆘 Troubleshooting

### "Failed to fetch"
- Check if `.env` file exists and has correct values
- Make sure you installed `@supabase/supabase-js`

### "Row level security policy violation"
- In Supabase, go to **Authentication** → **Policies**
- Make sure public read policies exist for `projects` and `testimonials` tables

### "Table does not exist"
- Re-run the `supabase-schema.sql` in Supabase SQL Editor

---

## 🎉 You're Done!

Your portfolio now has a **professional CMS backend**!

Benefits:
✅ No more hardcoded data
✅ Easy content updates via Supabase dashboard
✅ Automatic contact form storage
✅ Newsletter subscription tracking
✅ Scalable and production-ready

**Next**: Start adding your real projects and testimonials in Supabase! 🚀

---

📧 Questions? Check [DATABASE_SETUP.md](./DATABASE_SETUP.md) or open an issue!
