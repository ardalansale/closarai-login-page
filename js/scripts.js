document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }
    
    console.log('Email:', email);
    console.log('Password:', password);
    
    document.getElementById('login-form').reset();
});