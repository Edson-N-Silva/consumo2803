
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const userList = document.getElementById('user-list');

        users.forEach(user => {
            const li = document.createElement('li');
            li.classList.add('user-item');
            li.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Endereço: ${user.address.street}, ${user.address.city}</p>
            `;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao carregar os usuários:', error);
    }
}

window.onload = fetchUsers;