/*
  # Add RLS Policies for Blog Posts
  
  1. Security Changes
    - Add policy to allow public read access to published blog posts
    - Only published posts are visible to everyone
    - Unpublished posts remain private
*/

-- Allow anyone to read published blog posts
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);
