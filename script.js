const register_form = document.getElementById("register_form");
const register_button = document.getElementById("register_button")
const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

register_button.addEventListener('click', function(event) {
  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const country = document.getElementById('country').value;
  const birthday = document.getElementById('birthday').value;
  const user = {fullname, email, password, birthday, country};
  existingUsers.push(user);
  localStorage.setItem('users', JSON.stringify(existingUsers));
  register_form.reset();
  window.location.href='login.html';
  return false;
});
