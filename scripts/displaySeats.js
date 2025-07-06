const SEATS_URL = 'http://localhost/cinema-server/seats';

axios.get(SEATS_URL)
    .then((response) => {
        const seats = response.data.payload;
        const tbody = document.querySelector('#seats-table tbody');

        seats.forEach(seat => {
            const row = document.createElement('tr');

            row.innerHTML = 
                    `<td>${seat[0]}</td>
                    <td>${seat[1]}</td>
                    <td>${seat[2]}</td>
                    <td>${seat[3]}</td>`;
                tbody.appendChild(row);
            });
        })
    .catch(error => {
        console.log("Error loading seats:", error);
    });
