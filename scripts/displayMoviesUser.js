axios.get('http://localhost/cinema-server/controllers/get_movies.php')
    .then((response) => {
        const movies = response.data.movies;
        const container = document.getElementById('movies-container');

        movies.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('movie-card');

            card.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <div class="card-content">
                    <h3>${movie.title}</h3>
                    <p><strong>Description:</strong> ${movie.description}</p>
                    <p><strong>Cast:</strong> ${movie.cast}</p>
                    <p><strong>Rating:</strong> ${movie.rating}</p>
                    <p><strong>Genre:</strong> ${movie.genre}</p>
                </div>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.log("Error loading movies", error);
    });
