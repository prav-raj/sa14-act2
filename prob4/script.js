document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to server
    let isValid = true;

    // Validate Username
    const username = document.getElementById('username');
    const usernameError = username.nextElementSibling;
    if (username.value.length < 6) {
        usernameError.textContent = "Username must be at least 6 characters long.";
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailError = email.nextElementSibling;
    if (!email.value.includes('@')) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate Password
    const password = document.getElementById('password');
    const passwordError = password.nextElementSibling;
    if (password.value.length < 8 || !/[A-Z]/.test(password.value) || !/[0-9]/.test(password.value)) {
        passwordError.textContent = "Password must be at least 8 characters long and include at least one uppercase letter and one number.";
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        // Form is valid
        alert('Registration successful!');
        // Here you would typically submit the form or clear it
        // e.g., registrationForm.reset(); to clear the form for new input
    }
});

