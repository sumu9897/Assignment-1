function checkAge() {
    var ageInput = document.getElementById("ageInput").value;
    var errorMessage = document.getElementById("error-message");


    if (ageInput === "") {
        errorMessage.textContent = "Please enter your age.";
        return;
    }

    var age = parseInt(ageInput);

    if (isNaN(age) || age < 0) {
        errorMessage.textContent = "Please enter a valid age.";
        return;
    }

    errorMessage.textContent = "";


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

document.getElementById("ageInput").addEventListener("input", function() {

    checkAge();
});

var currentYear = new Date().getFullYear();

document.getElementById('currentYear').innerText = currentYear;