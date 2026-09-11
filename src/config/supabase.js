// Supabase configuration placeholder
// Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in production

export const supabaseConfig = {
  url: import.meta.env.VITE_SUPABASE_URL || '',
  key: import.meta.env.VITE_SUPABASE_ANON_KEY || ''
};
