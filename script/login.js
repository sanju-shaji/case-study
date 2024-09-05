function sub() {
    // Get user input
    const username = document.getElementById('name').value;
    const password = document.getElementById('pass').value;

    // Valid credentials
    const validUsername = 'admin';
    const validPassword = '12345';

    // Check credentials
    if (username == validUsername && password == validPassword) {
        // Redirect to another page on successful logiton
        window.location.href = 'todo.html'; // Change 'success.html' to your target page
        return true; // Prevent form submission
    } else {
        // Show error message
        document.getElementById('message').textContent = 'Invalid username or password.';
        return false; // Prevent form submission
    }
}