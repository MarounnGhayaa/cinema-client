const MOVIES_URL = 'http://localhost/cinema-server/movies';

axios.get(MOVIES_URL)
    .then((response) => {
        const movies = response.data.payload;
        const container = document.getElementById('movies-container');

        movies.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('movie-card');

            card.innerHTML = `<img src="${movie[6]}" alt="${movie[1]}">
                <div class="card-content">
                    <h3>${movie[1]}</h3>
                    <p><strong>Description:</strong> ${movie[2]}</p>
                    <p><strong>Cast:</strong> ${movie[3]}</p>
                    <p><strong>Rating:</strong> ${movie[4]}</p>
                    <p><strong>Genre:</strong> ${movie[5]}</p>
                </div>`;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.log("Error loading movies", error);
    });
