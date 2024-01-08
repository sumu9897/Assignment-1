// Get the current year
var currentYear = new Date().getFullYear();

// Set the current year in the footer
document.getElementById('currentYear').innerText = currentYear;

// Your existing JavaScript code
function checkAge() {
    var age = document.getElementById('ageInput').value;

    if (age >= 18) {
        document.getElementById('adultSection').style.display = 'block';
        document.getElementById('childSection').style.display = 'none';
    } else {
        document.getElementById('childSection').style.display = 'block';
        document.getElementById('adultSection').style.display = 'none';
    }
}

// Add event listener to the age input for the "input" event
document.getElementById("ageInput").addEventListener("input", function() {
    // Call the checkAge function whenever there is an input change
    checkAge();
});
