// Get the current year
var currentYear = new Date().getFullYear();

// Set the current year in the footer
document.getElementById('currentYear').innerText = currentYear;

// Your existing JavaScript code
function checkAge() {
    var age = document.getElementById("ageInput").value;
    var ageCard = document.getElementById("ageCard");
    var ageCardTitle = document.getElementById("ageCardTitle");
    var ageCardText = document.getElementById("ageCardText");

    if (age >= 18) {
        ageCardTitle.innerHTML = "You are an Adult";
        ageCardText.innerHTML = "Congratulations! You have reached the age of majority.";
    } else {
        ageCardTitle.innerHTML = "You are a Child";
        ageCardText.innerHTML = "Enjoy your childhood! Make the most of these carefree days.";
    }

    ageCard.style.display = "block";
}

// Add event listener to the age input for the "input" event
document.getElementById("ageInput").addEventListener("input", function() {
    // Call the checkAge function whenever there is an input change
    checkAge();
});
