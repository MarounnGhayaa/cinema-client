const USERS_URL = 'http://localhost/cinema-server/users';
const DELETE_URL = 'http://localhost/cinema-server/delete_user';

const tbody = document.querySelector('#users-table tbody');

tbody.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const userId = e.target.getAttribute('data-id');
        
        axios.post(DELETE_URL, {
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

axios.get(USERS_URL)
    .then((response) => {
        const users = response.data.payload;
        const tbody = document.querySelector('#users-table tbody');

        users.forEach(user => {
            const row = document.createElement('tr');

            row.innerHTML = 
                    `<td>${user[0]}</td>
                    <td>${user[1]}</td>
                    <td>${user[6]}</td>
                    <td>${user[2]}</td>
                    <td>${user[4]}</td>
                    <td><button class="delete-btn" data-id="${user[0]}">Delete</button></td>`;

                tbody.appendChild(row);
            });
        })
    .catch(error => {
        console.log("Error loading users", error);
    });
