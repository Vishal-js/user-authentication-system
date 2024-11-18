let ramnumholder; // Declare a global variable to store the generated OTP

document.getElementById('resetfrom').addEventListener('submit', function (event) {
    event.preventDefault();

    let emailid = document.getElementById('user-id').value;
    let optid = document.getElementById('user-otp').value;

    let currectid = "mishravishal91198@gmail.com";

    if (emailid === currectid) {
        if (!ramnumholder) { // Only generate OTP if it hasn't been generated yet
            let maxnum = 9999;
            let minnum = 1111;
            ramnumholder = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
            alert(ramnumholder + " - Please Note Down OTP");
        } else {
            // Check if the entered OTP matches the generated OTP
            if (parseInt(optid) === ramnumholder) {
                window.location.href = "./account.html";
            } else {
                alert("You have entered the wrong OTP");
            }
        }
    } else {
        alert("Please check your email ID");
    }
});
