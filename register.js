
// Supabase config
const SUPABASE_URL = 'https://yevkpqzirifkuvrcntxc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlldmtwcXppcmlma3V2cmNudHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNTk0MTcsImV4cCI6MjA2MzczNTQxN30.BRIJoMQqHeiOeU6fuCauHw-ybel8odMEuCZJEWIvAms';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        mobile
      }
    }
  });

  if (error) {
    alert('Registration failed: ' + error.message);
  } else {
    alert('Registration successful. Check your email for confirmation!');
  }
});

// register.js
async function registerUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { user, error } = await supabaseClient.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Registration successful! Check your email.");
  }
}
