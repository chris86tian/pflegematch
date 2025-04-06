import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

// Add a check to ensure the key doesn't look like the placeholder
if (supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY') {
  throw new Error('Supabase Anon Key is still set to the placeholder value. Please update your .env file.');
}

// Create the Supabase client with fetch options to handle CORS
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  global: {
    fetch: (...args) => {
      // @ts-ignore
      return fetch(...args);
    },
    headers: {
      'X-Client-Info': 'pflegematch-web'
    }
  }
});
