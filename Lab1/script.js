// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'dashboard.html'; // เปลี่ยนไปที่หน้า dashboard หรือหน้าหลังการ login
        } else {
            document.getElementById('error-message').textContent = data.message;
        }
    })
    .catch(error => console.error('Error:', error));
});
