document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    let username = document.getElementById('username').value;
    let password = document.getElementById('Password').value;

    // Check if username or password is empty
    if (username === '' || password === '') {
        alert("Please enter both username and password");
        return;
    }

    // Correct username and password values
    let correctusername = "example@gmail.com";
    let correctpassword = "example@20";

    // Check if username and password are incorrect
    if (username !== correctusername || password !== correctpassword) {
        alert("Entered wrong username or password");
        return;
    }

    // Redirect if credentials are correct
     window.location.href = "./account.html"; ;  // Ensure the correct path or URL is used
});
