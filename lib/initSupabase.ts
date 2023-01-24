import { createClient } from '@supabase/supabase-js'

const SUPABASE_URI:any = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY:any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(
    SUPABASE_URI,
    SUPABASE_KEY
)