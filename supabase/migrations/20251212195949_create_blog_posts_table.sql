/*
  # Create blog_posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text) - Article title
      - `slug` (text, unique) - URL-friendly identifier
      - `excerpt` (text) - Short summary
      - `content` (text) - Full article content
      - `featured_image` (text) - Image URL
      - `author` (text) - Author name
      - `category` (text) - Article category
      - `tags` (text[]) - Article tags
      - `meta_description` (text) - SEO meta description
      - `meta_keywords` (text) - SEO keywords
      - `published` (boolean) - Publication status
      - `published_at` (timestamptz) - Publication date
      - `views` (integer) - View counter
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access to published posts
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image text DEFAULT '',
  author text DEFAULT 'ServicePlus Stuttgart',
  category text DEFAULT 'Entrümpelung',
  tags text[] DEFAULT ARRAY[]::text[],
  meta_description text DEFAULT '',
  meta_keywords text DEFAULT '',
  published boolean DEFAULT false,
  published_at timestamptz DEFAULT now(),
  views integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);