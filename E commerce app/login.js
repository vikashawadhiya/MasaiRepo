document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const userData = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        // Example: Send form data to server for authentication (you need to implement this)
        console.log('User data:', userData);
        // You can send this data to your server for authentication and handle the response accordingly
    });
});
