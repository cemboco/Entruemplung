/*
  # Blog Posts Table für SEO-Optimierung

  1. Neue Tabelle
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text) - Titel des Blog-Artikels
      - `slug` (text, unique) - URL-freundlicher Slug für SEO
      - `excerpt` (text) - Kurze Zusammenfassung für Vorschau
      - `content` (text) - Vollständiger Artikel-Inhalt
      - `featured_image` (text) - URL zum Hauptbild
      - `author` (text) - Autor des Artikels
      - `category` (text) - Kategorie (z.B. "Entrümpelung", "Haushaltsauflösung")
      - `tags` (text[]) - Tags für bessere Kategorisierung
      - `meta_description` (text) - SEO Meta-Beschreibung
      - `meta_keywords` (text) - SEO Keywords
      - `published` (boolean) - Veröffentlichungsstatus
      - `published_at` (timestamptz) - Veröffentlichungsdatum
      - `views` (integer) - Anzahl der Aufrufe
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Sicherheit
    - Enable RLS auf `blog_posts` Tabelle
    - Öffentlicher Lesezugriff für veröffentlichte Artikel
    - Nur authentifizierte Benutzer können Artikel erstellen/bearbeiten

  3. Indizes
    - Index auf `slug` für schnelle URL-Lookups
    - Index auf `published` und `published_at` für sortierte Abfragen
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

CREATE POLICY "Public can read published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
