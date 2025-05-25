
// Supabase connection config
const { createClient } = supabase;

const supabaseUrl = 'https://yevkpqzirifkuvrcntxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // (നിന്റെ anon key)
const supabaseClient = createClient(supabaseUrl, supabaseKey);


// supabase.js
const { createClient } = supabase

const supabaseUrl = 'https://yevkpqzirifkuvrcntxc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlldmtwcXppcmlma3V2cmNudHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNTk0MTcsImV4cCI6MjA2MzczNTQxN30.BRIJoMQqHeiOeU6fuCauHw-ybel8odMEuCZJEWIvAms'
const supabaseClient = createClient(supabaseUrl, supabaseKey)
// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://yevkpqzirifkuvrcntxc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (നിന്റെ anon key)'
export const supabaseClient = createClient(supabaseUrl, supabaseKey)
