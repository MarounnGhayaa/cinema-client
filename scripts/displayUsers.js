const tbody = document.querySelector('#users-table tbody');

tbody.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const userId = e.target.getAttribute('data-id');
        
        axios.post('http://localhost/cinema-server/controllers/delete_user.php', {
            id: userId
        })
        .then(() => {
            e.target.closest('tr').remove();
        })
        .catch(error => {
            console.log("Error deleting user", error);
        });
    }
});

axios.get('http://localhost/cinema-server/controllers/get_users.php')
    .then((response) => {
        const users = response.data.users;
        const tbody = document.querySelector('#users-table tbody');

        users.forEach(user => {
            const row = document.createElement('tr');

            row.innerHTML = 
                    `<td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                    <td>${user.favorite_genre}</td>
                    <td><button class="delete-btn" data-id="${user.id}">Delete</button></td>`;

                tbody.appendChild(row);
            });
        })
    .catch(error => {
        console.log("Error loading users", error);
    });
