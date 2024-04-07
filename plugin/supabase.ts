import { createClient } from "@supabase/supabase-js";

const supaUrl = process.env.SUPABASE_URL || "";
const supaKey = process.env.SUPABASE_KEY || "";

export const supabase = createClient(supaUrl, supaKey);
