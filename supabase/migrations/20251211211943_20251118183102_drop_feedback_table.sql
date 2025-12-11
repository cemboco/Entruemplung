/*
  # Remove feedback table

  1. Changes
    - Drop the feedback table and all its data
  
  2. Security
    - Remove all associated RLS policies
*/

DROP TABLE IF EXISTS feedback CASCADE;