/*
  # Add Services Column to Contact Inquiries

  1. Changes
    - Add `services` column to `contact_inquiries` table
    - This column stores an array of selected services as text[]
    - Services include: Property Management, House/Land Purchase, Surveying, etc.

  2. Column Details
    - `services` (text[], nullable) - Array of service names the client is interested in
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_inquiries' AND column_name = 'services'
  ) THEN
    ALTER TABLE contact_inquiries ADD COLUMN services text[] DEFAULT '{}';
  END IF;
END $$;