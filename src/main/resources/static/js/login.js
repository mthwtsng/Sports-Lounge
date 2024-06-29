new Vue({
    el: '#app',
    data: {
        username: '', // Assuming you have a username field
        password: ''
    },
    methods: {
        login() {
            const payload = {
                username: this.username,
                password: this.password
            };
            
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // Read the response as text
            })
            .then(data => {
                if (data === "Successfully Logged in") {
                    alert('Login successful');
                    window.location.href = '/index'; // Redirect to the index page
                } else {
                    alert('Login failed: ' + data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        }
    }
});
