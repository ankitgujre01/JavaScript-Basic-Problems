function calculateAverage() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const num3 = parseFloat(prompt("Enter the third number:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.write("Please enter valid numbers.");
    } else {
        const sum = num1 + num2 + num3;
        const average = sum / 3;
        
        
        window.alert("The average of the three numbers is: " + average);
    }
}

calculateAverage();
