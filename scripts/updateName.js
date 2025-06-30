const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const updateNameButton = document.getElementById('editName');
updateNameButton.addEventListener('click', function(e) {
    e.preventDefault();
    const newName = document.getElementById('newNameInput').value;

    axios.post("http://localhost/cinema-server/controllers/update_name.php", {
        column_name: "name",
        new_value: newName,
        id: currentUser.id
    })
    .then(response => {
        if (response.data.success) {
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