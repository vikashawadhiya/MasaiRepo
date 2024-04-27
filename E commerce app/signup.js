document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(signupForm);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        // Example: Send form data to server (you need to implement this)
        console.log('User data:', userData);
        // You can send this data to your server for further processing like storing in the JSON file
    });
});
