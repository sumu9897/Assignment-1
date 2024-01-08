// Get the current year
var currentYear = new Date().getFullYear();

// Set the current year in the footer
document.getElementById('currentYear').innerText = currentYear;

// Your existing JavaScript code

// script.js

function checkAge() {
    var ageInput = document.getElementById("ageInput").value;
    var errorMessage = document.getElementById("error-message");

    // Check if age is not provided
    if (ageInput === "") {
        errorMessage.textContent = "Please enter your age.";
        return;
    }

    // Convert ageInput to a number
    var age = parseInt(ageInput);

    // Check if the entered age is valid
    if (isNaN(age) || age < 0) {
        errorMessage.textContent = "Please enter a valid age.";
        return;
    }

    // Clear any previous error messages
    errorMessage.textContent = "";

    // Perform the age check and display the appropriate section
    if (age < 18) {
        showChildSection();
    } else {
        showAdultSection();
    }
}

function showChildSection() {
    document.getElementById("childSection").style.display = "block";
    document.getElementById("adultSection").style.display = "none";
}

function showAdultSection() {
    document.getElementById("childSection").style.display = "none";
    document.getElementById("adultSection").style.display = "block";
}


// Add event listener to the age input for the "input" event
document.getElementById("ageInput").addEventListener("input", function() {
    // Call the checkAge function whenever there is an input change
    checkAge();
});
