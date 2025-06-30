const BASE_URL = 'http://localhost/cinema-server/controllers/get_seats.php';

axios.get(BASE_URL)
    .then((response) => {
        const seats = response.data.seats;
        const tbody = document.querySelector('#seats-table tbody');

        seats.forEach(seat => {
            const row = document.createElement('tr');

            row.innerHTML = 
                    `<td>${seat.id}</td>
                    <td>${seat.auditorium_id}</td>
                    <td>${seat.seat_number}</td>
                    <td>${seat.is_selected}</td>`;
                tbody.appendChild(row);
            });
        })
    .catch(error => {
        console.log("Error loading seats:");
    });
