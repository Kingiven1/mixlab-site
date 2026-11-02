import { createClient } from '@supabase/supabase-js';

// Same Supabase project as globallynk-site. Only used for the updates list.
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && key ? createClient(url, key) : null;
