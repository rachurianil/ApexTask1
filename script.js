document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const passwordInput = document.querySelector('#password');

    // Add an 'input' event listener to check password as user types
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length > 0 && passwordInput.value.length < 8) {
            passwordInput.classList.add('invalid');
        } else {
            passwordInput.classList.remove('invalid');
        }
    });

    form.addEventListener('submit', (event) => {
        const password = passwordInput.value;

        if (password.length < 8) {
            event.preventDefault(); 
            alert('Password must be at least 8 characters long.');
            passwordInput.classList.add('invalid'); // Ensure it's marked as invalid on submit
        }
    });
});