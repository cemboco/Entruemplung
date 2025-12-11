/*
  # Create contact_submissions table

  This migration creates a table to store all contact form submissions from the website.

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person contacting
      - `email` (text) - Email address for contact
      - `phone` (text) - Phone number for contact
      - `message` (text) - The message content from the contact form
      - `created_at` (timestamptz) - Timestamp when the submission was created

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy to allow anonymous users to insert their contact submissions
    - Only authenticated admin users can view submissions (for future admin dashboard)

  3. Important Notes
    - Anonymous users can only INSERT data (submit the form)
    - Data is protected and can only be viewed by authenticated users
    - All fields are required to ensure complete contact information
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous users to submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);