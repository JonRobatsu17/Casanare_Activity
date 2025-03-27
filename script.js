document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const dob = document.getElementById('dob').value;
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const course = document.getElementById('course').value;
  
    if (!firstName || !lastName || !email || !dob || !username || !password || !gender || !course) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Registration successful!');
    document.getElementById('registrationForm').reset();
  });
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  } 
v  