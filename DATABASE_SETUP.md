# Database Integration

This portfolio now supports Supabase CMS for dynamic content management!

## Setup Instructions

1. Create a Supabase project at https://supabase.com
2. Copy `.env.example` to `.env` and fill in your credentials
3. Run the SQL schema from `supabase-schema.sql` in your Supabase SQL Editor
4. Install dependencies: `npm install @supabase/supabase-js`
5. The site will automatically load content from your database!

## Files Created
- `src/lib/supabaseClient.ts` - Database client configuration
- `src/lib/api.ts` - API hooks for fetching data
- `.env.example` - Environment variables template
- `supabase-schema.sql` - Complete database schema

## CMS Features
✅ Projects management
✅ Testimonials
✅ Services
✅ Blog posts
✅ Contact form submissions
✅ Newsletter subscriptions
✅ Media library
✅ Skills & experience timeline

Visit http://localhost:5173 after setup to see your CMS-powered portfolio!
