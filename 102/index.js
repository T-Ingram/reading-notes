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

    if (selectedTransmission === "automatic") {
        instructionMessage.textContent = "For automatic transmission vehicles, follow these instructions...";
    } else if (selectedTransmission === "manual") {
        instructionMessage.textContent = "For manual transmission vehicles, follow these instructions...";
    } else {
        // Invalid selection, show an error message
        instructionMessage.textContent = "Please select a valid transmission type.";
        transmissionSelect.value = "Potato"; // Clear the selection
        transmissionSelect.focus(); // Place focus back on the select element
    }
}
