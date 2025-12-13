/*
  # Cleanup Blog Posts RLS Policies
  
  1. Security Changes
    - Remove duplicate RLS policies
    - Keep only one clear policy for public read access
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Anyone can read published blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Public can read published blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can insert blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON blog_posts;

-- Create a single, clear policy for public access
CREATE POLICY "Enable read access for published posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);
