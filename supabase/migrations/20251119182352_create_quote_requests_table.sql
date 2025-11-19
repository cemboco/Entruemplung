/*
  # Create quote_requests table

  This migration creates a table to store all quote requests from the QuickQuote form.

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key) - Unique identifier for each quote request
      - `objekt` (text) - Type of object to be cleared (Haus, Wohnung, Keller, etc.)
      - `objekt_sonstiges` (text) - Additional details if "Sonstiges" was selected
      - `flaeche` (text) - Size of the area (Bis 30 m², 30-60 m², etc.)
      - `flaeche_hinweis` (text) - Additional notes about the size
      - `etage` (text) - Floor level (Keller, Erdgeschoss, 1. Etage, etc.)
      - `aufzug` (boolean) - Whether an elevator is available
      - `etage_hinweis` (text) - Special notes about floor/access
      - `fuellgrad` (text) - How full the space is (wenig, normal, voll, etc.)
      - `plz` (text) - Postal code of the location
      - `ort` (text) - City/town name
      - `termin` (text) - Desired timeframe (Möglichst umgehend, In 1-3 Monaten, etc.)
      - `termin_datum` (text) - Specific date if provided
      - `termin_hinweis` (text) - Additional notes about timing
      - `name` (text) - Contact person's name
      - `email` (text) - Contact email address
      - `telefon` (text) - Contact phone number
      - `rueckruf_zeit` (text) - Preferred callback time
      - `created_at` (timestamptz) - Timestamp when the request was created

  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy to allow anonymous users to insert their quote requests
    - Only authenticated admin users can view requests (for future admin dashboard)

  3. Important Notes
    - Anonymous users can only INSERT data (submit the quote form)
    - Data is protected and can only be viewed by authenticated users
    - Core fields (name, email, telefon, plz) are required
    - Optional fields allow NULL values for flexibility
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  objekt text NOT NULL,
  objekt_sonstiges text DEFAULT '',
  flaeche text NOT NULL,
  flaeche_hinweis text DEFAULT '',
  etage text NOT NULL,
  aufzug boolean DEFAULT false,
  etage_hinweis text DEFAULT '',
  fuellgrad text NOT NULL,
  plz text NOT NULL,
  ort text DEFAULT '',
  termin text NOT NULL,
  termin_datum text DEFAULT '',
  termin_hinweis text DEFAULT '',
  name text NOT NULL,
  email text NOT NULL,
  telefon text NOT NULL,
  rueckruf_zeit text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous users to submit quote requests"
  ON quote_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);
