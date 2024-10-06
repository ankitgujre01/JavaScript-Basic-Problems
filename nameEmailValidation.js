// Arrow function for validating the form
const validateForm = () => {
    let isValid = true; // Assume form is valid
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    // Clear previous error messages
    document.querySelector("#nameError").textContent = "";
    document.querySelector("#emailError").textContent = "";

    // Name validation: check if it's empty
    if (name === "") {
        document.querySelector("#nameError").textContent = "Name is required.";
        isValid = false;
    } else if (name.length < 3) {
        document.querySelector("#nameError").textContent = "Name must be at least 3 characters.";
        isValid = false;
    }
    

    // Email validation: simple email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.querySelector("#emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.querySelector("#emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Return the validation result
    return isValid;
};