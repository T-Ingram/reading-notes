function displayCurrentDate() {
    const currentDateElement = document.getElementById("currentDate");
    const currentDate = new Date();
    currentDateElement.textContent = `Today's Date: ${currentDate.toDateString()}`;
}
displayCurrentDate();

function displayGreeting() {
    const userName = document.getElementById("userName").value;
    const greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.textContent = `Hello, ${userName}! Welcome to your oil change guide!`;
}

function displayInstructions() {
    const transmissionSelect = document.getElementById("transmission");
    const selectedTransmission = transmissionSelect.value;
    const instructionMessage = document.getElementById("instructionMessage");

    if (selectedTransmission === "") {
        // No transmission type selected, show an error message
        instructionMessage.textContent = "Please select a valid transmission type.";
    } else if (selectedTransmission === "automatic") {
        instructionMessage.textContent = "For automatic transmission vehicles, follow these instructions...";
        // Valid transmission type selected
        // Ask the user for the number of times to display the image
      
    } else if (selectedTransmission === "manual") {
        instructionMessage.textContent = "For manual transmission vehicles, follow these instructions...";
        // Valid transmission type selected
            // Ask the user for the number of times to display the image
        const numImages = parseInt(prompt("How many times would you like to see the image?"));
        if (!isNaN(numImages) && numImages > 0) {
            // Display the image 'numImages' times
            displayImages(numImages);
            instructionMessage.textContent = "";
        } else {
            instructionMessage.textContent = "Please enter a valid number greater than 0.";
        }
        } else {
        // Invalid selection, show an error message
        instructionMessage.textContent = "Please select a valid transmission type.";
        transmissionSelect.value = ""; // Clear the selection
    }
}

