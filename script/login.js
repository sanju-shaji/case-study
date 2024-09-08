function handleLogin() {
    var username = document.getElementById('name').value;
    var password = document.getElementById('pass').value;
    
    if (username === 'admin' && password === '12345') {
        window.location.href = 'todo.html'; 
    } else {
        document.getElementById('message').innerText = 'Invalid username or password';
    }
}

document.getElementById('log').addEventListener('click', handleLogin);
