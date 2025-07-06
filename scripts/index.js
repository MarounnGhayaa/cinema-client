const LOGIN_URL = 'http://localhost/cinema-server/login';
const REGISTER_URL = 'http://localhost/cinema-server/register';

const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');
const loginField = document.getElementById('loginForm');
const registerField = document.getElementById('registerForm');

showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginField.classList.add('hidden');
    registerField.classList.remove('hidden');
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerField.classList.add('hidden');
    loginField.classList.remove('hidden');
});

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('log-email').value;
    const password = document.getElementById('log-pass').value;

    axios.post(LOGIN_URL, {
        email: email,
        password: password
    })
    .then(response => {
        console.log(response.data);
        if (response.data.success) {
            const user = response.data.user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert("Login successful. Welcome " + user.name);
            if (user.role === 'admin') {
                window.location.href = '../pages/adminPage.html';
            } else {
                window.location.href = '../pages/userPage.html';
            }
        } else {
            alert("Login failed: " + response.data.message);
        }
    })
    .catch(error => {
        console.error("API error:", error);
    });
});

const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPass').value;
    const phone_number = document.getElementById('regPhone').value;
    const age = document.getElementById('regAge').value;
    const favorite_genre = document.getElementById('regFavGenre').value;

    axios.post(REGISTER_URL, {
        name: name,
        email: email,
        password: password,
        phone_number: phone_number,
        age: age,
        favorite_genre: favorite_genre
    })
    .then(response => {
        console.log(response.data);
        if (response.data.success) {
            const user = response.data.user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert("Registration successful. Welcome " + user.name);
            window.location.href = '../pages/userPage.html';
        } else {
            alert("Registration failed: " + response.data.message);
        }
    })
    .catch(error => {
        console.error("API error:", error);
    });
});