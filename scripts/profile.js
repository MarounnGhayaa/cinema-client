const storedUser = JSON.parse(localStorage.getItem('currentUser'));
if (storedUser) {
    document.getElementById('user-name').textContent = storedUser.name;
    document.getElementById('user-email').textContent = storedUser.email;
    document.getElementById('user-phone').textContent = storedUser.phone_number;
    document.getElementById('user-favorite-genre').textContent = storedUser.favorite_genre;
    document.getElementById('user-age').textContent = storedUser.age;
}