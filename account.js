let button1 = document.getElementById('button-userinfo');
let button2 = document.getElementById('button-useraddress');
let button3 = document.getElementById('button-userpayment');

// Get the panels
let panel1 = document.getElementById('personal-link-pannel');
let panel2 = document.getElementById('user-address');
let panel3 = document.getElementById('payment-user');

// Function to hide all panels
function hideAllPanels() {
    panel1.classList.add('hidden');
    panel2.classList.add('hidden');
    panel3.classList.add('hidden');
}

// Function to show the selected panel
let showPanel = (panel) => {
    hideAllPanels(); // Hide all other panels
    panel.classList.remove('hidden'); // Show the selected panel
};

// Add event listeners to the buttons
button1.addEventListener('click', function () {
    showPanel(panel1); // Show panel 1
});

button2.addEventListener('click', function () {
    showPanel(panel2); // Show panel 2
});

button3.addEventListener('click', function () {
    showPanel(panel3); // Show panel 3
});
