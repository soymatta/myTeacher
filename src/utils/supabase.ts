import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mrgcvnxcfrnerwbrackv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yZ2N2bnhjZnJuZXJ3YnJhY2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzMDA2MzEsImV4cCI6MjA3MDg3NjYzMX0.WjtrpH7ae09EXqNfA58rNWqGw-CyLbBXYJF7JuTCcP8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
