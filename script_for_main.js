const searchParams = new URLSearchParams(window.location.search);
const userEmail = searchParams.get('email');
const users = JSON.parse(localStorage.getItem('users')) || [];
const user = users.find(u => u.email === userEmail);

document.getElementById('fullname1').textContent = user.fullname;
document.getElementById('fullname2').textContent = user.fullname;
document.getElementById('email').textContent = user.email;
document.getElementById('country').textContent = user.country;
document.getElementById('birthday').textContent = user.birthday;
