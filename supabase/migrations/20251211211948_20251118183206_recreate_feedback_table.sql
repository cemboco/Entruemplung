/*
  # Recreate feedback table

  1. New Tables
    - `feedback`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `status` (text) - Status of feedback: 'new', 'reviewed', or 'resolved'
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on `feedback` table
    - Add policy for public insert access
    - Add policy for authenticated users to read all feedback
*/

CREATE TABLE IF NOT EXISTS feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'resolved')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit feedback"
  ON feedback
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read feedback"
  ON feedback
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update feedback status"
  ON feedback
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);