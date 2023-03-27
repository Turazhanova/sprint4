const login_form = document.getElementById("login_form");
const login_button = document.getElementById("login_button");
const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

login_button.addEventListener('click', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = getUserByEmail(existingUsers, email);
  
    if (user && user.password === password) {
        window.location.href = `main.html?email=${email}`;
    } else {
      alert('Incorrect email or password');
    }
    login_form.reset();
});


function getUserByEmail(users, email) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return users[i];
    }
  }
  return null;
}