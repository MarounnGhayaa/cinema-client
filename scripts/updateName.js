const UPDATE_URL = 'http://localhost/cinema-server/update_user';

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const updateNameButton = document.getElementById('editName');

updateNameButton.addEventListener('click', function(e) {
    e.preventDefault();
    const newName = document.getElementById('newNameInput').value;

    if(newName === "") {
        alert("ENTER A NAME !");
        return;
    }

    axios.post(UPDATE_URL, {
        column_name: "name",
        new_value: newName,
        id: currentUser.id
    })
    .then(response => {
        const updates = response.data.payload;
        if (updates) {
            alert("Name updated successfully!");

            document.getElementById('user-name').innerText = newName;
            currentUser.name = newName;

            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } else {
            alert("Update failed: " + response.data.message);
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while updating.");
    });
});