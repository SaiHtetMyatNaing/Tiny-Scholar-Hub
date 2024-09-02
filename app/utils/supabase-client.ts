import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export const createAuthenticatedClient = async (supabaseToken: string) => {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: { headers: { Authorization: `Bearer ${supabaseToken}` } },
    }
  );
};
