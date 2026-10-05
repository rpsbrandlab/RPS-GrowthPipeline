// RPS Growth Pipeline: connection settings.
// Fill these in from Supabase: Project Settings → API (or "Connect" → App Frameworks).
// The anon / publishable key is designed to be public. Your data is protected by
// login plus the row-level security rules created by supabase/schema.sql.
window.RPS_CONFIG = {
  SUPABASE_URL: "https://elwubrzfvducdyvuzzbt.supabase.co",          // e.g. "https://abcdefghijklm.supabase.co"
  SUPABASE_ANON_KEY: "sb_publishable_PAGwlWdhatPskpWxQ0Ak_Q_y_SUxbnm",   // the long "anon public" key
  AI_ENABLED: false                            // set to true only after deploying the optional "ai" function
};
