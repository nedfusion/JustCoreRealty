/*
  # Add Status Column to Contact Inquiries

  1. Changes
    - Add `status` column to `contact_inquiries` table with default value 'new'
    - Create index on status column for faster filtering

  2. Notes
    - Status helps track inquiry progress (new, contacted, resolved)
    - Default value ensures existing records get 'new' status
*/

-- Add status column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_inquiries' AND column_name = 'status'
  ) THEN
    ALTER TABLE contact_inquiries ADD COLUMN status text NOT NULL DEFAULT 'new';
  END IF;
END $$;

-- Create index on status for filtering
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes 
    WHERE indexname = 'contact_inquiries_status_idx'
  ) THEN
    CREATE INDEX contact_inquiries_status_idx ON contact_inquiries(status);
  END IF;
END $$;
