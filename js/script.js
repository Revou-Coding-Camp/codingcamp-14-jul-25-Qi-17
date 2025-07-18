// Pop up to welcome the user
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

function validateForm() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');

    if (nameInput.value === '' || emailInput.value === '') {
        alert('Please enter your name and email.');
    } else {
        document.getElementById('message-output').innerHTML =
            `Hi ${nameInput.value}, you are now in the queue to buy your ticket. We will contact you shortly via your email.`;

        // Reset form
        nameInput.value = '';
        emailInput.value = '';
    }
}

