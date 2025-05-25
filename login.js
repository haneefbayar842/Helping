
// Supabase config
const SUPABASE_URL = 'https://yevkpqzirifkuvrcntxc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlldmtwcXppcmlma3V2cmNudHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNTk0MTcsImV4cCI6MjA2MzczNTQxN30.BRIJoMQqHeiOeU6fuCauHw-ybel8odMEuCZJEWIvAms';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert('Login failed: ' + error.message);
  } else {
    alert('Login successful!');
    // Redirect or show dashboard
  }
});

<script src="login.js"></script>


// login.js
async function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Login Failed: " + error.message);
  } else {
    alert("Login successful!");
    // You can redirect or show dashboard
  }
}

