new Vue({
    el: '#app',
    data: {
        username: '',
        email: '',
        password: '',
        error: ''  // Add error property here
    },
    methods: {
        signup() {
            const payload = {
                username: this.username,
                email: this.email,
                password: this.password
            };
            
            console.log("Sending payload:", payload); // Log payload for debugging
            
            fetch('/signup', { // Adjust URL as needed
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
                return response.text(); // Read the response as plain text
            })
            .then(data => {
                if (data === "User created successfully") { // Adjust according to the expected response text
                    alert('Signup successful');
                    this.error = '';
                    window.location.href = '/index'; // Clear any previous error
                } else {
                    this.error = 'Signup failed: ' + data; // Display error message from backend
                }
            })
            .catch(error => {
                console.error('Error:', error); // Log the actual error to console
                this.error = 'An error occurred. Please try again.';
            });
        }
    }
});
