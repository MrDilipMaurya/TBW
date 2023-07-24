import { createClient } from '@supabase/supabase-js';
const storage = typeof window !== 'undefined' ? window.localStorage : null;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY


const supabase = createClient(supabaseUrl, supabaseKey, {
    localStorage: storage, // Use localStorage for session persistence
});

export default supabase;
