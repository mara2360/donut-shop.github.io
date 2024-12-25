document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('viewbtn').addEventListener('click', function () {
        fetch('http://localhost:8888/backend/api.php?action=read')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(donuts => {
                const list = document.getElementById('donuts-list');
                list.innerHTML = ''; 

                if (donuts.length === 0) {
                    list.innerHTML = '<p>No donuts available.</p>';
                } else {
                    donuts.forEach(donut => {
                        const item = document.createElement('div');
                        item.className = 'donut-item';
                        item.innerHTML = `
                            <h3>${donut.name}</h3>
                            <p><em>${donut.description}</em></p>
                            <p><strong>$${parseFloat(donut.price).toFixed(2)}</strong></p>
                        `;
                        list.appendChild(item);
                    });
                }
            })
            .catch(err => {
                console.error('Error fetching donuts:', err);
                const list = document.getElementById('donuts-list');
                list.innerHTML = '<p>Failed to load donuts. Please try again later.</p>';
            });
    });

    
    document.getElementById('add-button').addEventListener('click', function () {
        const name = document.getElementById('add-name').value;
        const description = document.getElementById('add-description').value;
        const price = document.getElementById('add-price').value;

        if (!name || !description || !price) {
            alert('Please fill in all fields.');
            return;
        }

        const newDonut = { name, description, price };

        fetch('http://localhost:8888/backend/api.php?action=create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newDonut),
        })
            .then(response => response.json())
            .then(data => {
                alert('Donut added successfully!');
                document.getElementById('add-form').reset(); 
            })
            .catch(err => console.error('Error adding donut:', err));
    });

    
    document.getElementById('update-button').addEventListener('click', function () {
        const id = document.getElementById('update-id').value;
        const name = document.getElementById('update-name').value;
        const description = document.getElementById('update-description').value;
        const price = document.getElementById('update-price').value;

        if (!id || !name || !description || !price) {
            alert('Please fill in all fields.');
            return;
        }

        const updatedDonut = { id, name, description, price };

        fetch('http://localhost:8888/backend/api.php?action=update', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedDonut),
        })
            .then(response => response.json())
            .then(data => {
                alert('Donut updated successfully!');
                document.getElementById('update-form').reset();
            })
            .catch(err => console.error('Error updating donut:', err));
    });

    
    document.getElementById('delete-button').addEventListener('click', function () {
        const id = document.getElementById('delete-id').value;

        if (!id) {
            alert('Please enter the ID of the donut to delete.');
            return;
        }

        fetch(`http://localhost:8888/backend/api.php?action=delete&id=${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                alert('Donut deleted successfully!');
                document.getElementById('delete-form').reset(); 
            })
            .catch(err => console.error('Error deleting donut:', err));
    });
});
