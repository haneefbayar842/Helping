
// Supabase connection config
const { createClient } = supabase;

const supabaseUrl = 'https://yevkpqzirifkuvrcntxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // (നിന്റെ anon key)
const supabaseClient = createClient(supabaseUrl, supabaseKey);

