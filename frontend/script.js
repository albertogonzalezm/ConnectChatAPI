const loginForm = document.getElementById('login-form');
const messageList = document.getElementById('message-list');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  
  // Hacer una solicitud POST a tu API para iniciar sesión
  axios.post('/login', { username, password })
    .then((response) => {
      // Almacenar el token de sesión en el almacenamiento local
      const token = response.data.token;
      localStorage.setItem('token', token);
      // Ocultar el formulario de inicio de sesión
      loginForm.style.display = 'none';
      // Obtener los mensajes del servidor y mostrarlos
      fetchMessages();
    })
    .catch((error) => {
      console.error(error);
    });
});

function fetchMessages() {
  // Obtener el token de sesión del almacenamiento local
  const token = localStorage.getItem('token');
  // Hacer una solicitud GET a tu API para obtener los mensajes
  axios.get('/messages', {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then((response) => {
      // Mostrar los mensajes en la lista
      const messages = response.data;
      messageList.innerHTML = '';
      messages.forEach((message) => {
        const li = document.createElement('li');
        li.textContent = message.content;
        messageList.appendChild(li);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
