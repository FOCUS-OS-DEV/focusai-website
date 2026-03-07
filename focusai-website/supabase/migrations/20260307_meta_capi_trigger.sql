-- Enable pg_net extension for HTTP requests from database triggers
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Trigger function: calls meta-capi Edge Function on every form_submissions INSERT
CREATE OR REPLACE FUNCTION public.trigger_meta_capi()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $func$
BEGIN
  PERFORM net.http_post(
    url := 'https://ueewnvfydrlhyxmbgsus.supabase.co/functions/v1/meta-capi',
    body := jsonb_build_object(
      'type', TG_OP,
      'table', TG_TABLE_NAME,
      'schema', TG_TABLE_SCHEMA,
      'record', row_to_json(NEW)::jsonb
    ),
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlZXdudmZ5ZHJsaHl4bWJnc3VzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg0Mjg4NywiZXhwIjoyMDg2NDE4ODg3fQ.EMMqIKWRO--cKXDdTp5PXvPYQCN-TmXfbThmb1EgRPI'
    )
  );
  RETURN NEW;
END;
$func$;

-- Drop existing trigger if any
DROP TRIGGER IF EXISTS on_form_submission_meta_capi ON public.form_submissions;

-- Create trigger on INSERT
CREATE TRIGGER on_form_submission_meta_capi
  AFTER INSERT ON public.form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.trigger_meta_capi();
