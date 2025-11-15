/*
  # Create Feedback Table

  ## Description
  This migration creates a feedback table to store user feedback submissions from the website's feedback widget.

  ## New Tables
    - `feedback`
      - `id` (uuid, primary key) - Unique identifier for each feedback entry
      - `name` (text, required) - Name of the person submitting feedback
      - `email` (text, required) - Email address for follow-up
      - `message` (text, required) - The feedback message content
      - `created_at` (timestamptz) - Timestamp when feedback was submitted
      - `status` (text) - Status of feedback (new, reviewed, resolved)

  ## Security
    - Enable RLS on `feedback` table
    - Add policy for inserting feedback (public access for submissions)
    - Add policy for viewing feedback (authenticated admin users only)

  ## Notes
    1. Public users can insert feedback without authentication to reduce friction
    2. Only authenticated users can view feedback (for admin dashboard)
    3. Status field helps track feedback processing workflow
*/

-- Create feedback table
CREATE TABLE IF NOT EXISTS feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'resolved')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert feedback (public submissions)
CREATE POLICY "Anyone can submit feedback"
  ON feedback
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can view feedback (admin access)
CREATE POLICY "Authenticated users can view all feedback"
  ON feedback
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only authenticated users can update feedback status
CREATE POLICY "Authenticated users can update feedback"
  ON feedback
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS feedback_created_at_idx ON feedback(created_at DESC);
CREATE INDEX IF NOT EXISTS feedback_status_idx ON feedback(status);