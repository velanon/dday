document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const correctPasswordHash = '58ce4a87aa3e0396f8b8c0c52b4fad1e1503c91e92676fa930a6464b3b382ec6'; 
    const password = document.getElementById('password').value;
    const hashedPassword = CryptoJS.SHA256(password).toString();

    console.log('Entered Password:', password);
    console.log('Hashed Password:', hashedPassword);
    console.log('Correct Password Hash:', correctPasswordHash);

    if (hashedPassword === correctPasswordHash) {
        console.log('Password is correct. Redirecting to menu.html...');
        window.location.href = 'menu.html'; // Redirect to the menu page if the password is correct
    } else {
        alert('Incorrect password. Please try again.');
    }
});
