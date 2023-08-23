// script.js

function displayGreeting() {
    const userName = document.getElementById("userName").value;
    const greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.textContent = `Hello, ${userName}! Welcome to our oil change guide.`;
}

function displayInstructions() {
    const transmissionType = document.getElementById("transmission").value;
    const instructionMessage = document.getElementById("instructionMessage");

    if (transmissionType === "automatic") {
        instructionMessage.textContent = "For automatic transmission vehicles, follow these instructions...";
    } else if (transmissionType === "manual") {
        instructionMessage.textContent = "For manual transmission vehicles, follow these instructions...";
    } else {
        instructionMessage.textContent = "";
    }
}

function updateDate() {
    const currentDateElement = document.getElementById("currentDate");
    const currentDate = new Date();
    currentDateElement.textContent = `Today's Date: ${currentDate.toDateString()}`;
}
