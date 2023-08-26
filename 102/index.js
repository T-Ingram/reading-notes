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
        // Ask the user for the number of times to display the image
        const numImagesInput = prompt("How many times would you like to see the image?");

    else if (isValidNumber(numImagesInput)) {
        const numImages = parseInt(numImagesInput);
        // Display the image 'numImages' times
            displayImages(numImages);
        instructionMessage.textContent = "";
    } else {
        instructionMessage.textContent = "Please enter a valid number greater than 0.";
    }
    } else if (selectedTransmission === "manual") {
        instructionMessage.textContent = "For manual transmission vehicles, follow these instructions...";
        
        // Ask the user for the number of times to display the image
        const numImagesInput = prompt("How many times would you like to see the image?");
    
    if (isValidNumber(numImagesInput)) {
        const numImages = parseInt(numImagesInput);
        // Display the image 'numImages' times for manual transmission     
        displayImages(numImages);
        instructionMessage.textContent = ""
    } else {
        instructionMessage.textContent = "Please enter a valid number greater than 0.";
    }    
    } else {
        // Invalid selection, show an error message
        instructionMessage.textContent = "Please select a valid transmission type.";
        transmissionSelect.value = ""; // Clear the selection
    }
}

function displayImages(numImages) {
    const imageSection = document.querySelector(".image-section");
    imageSection.innerHTML = ""; // Clear any previous images

    for (let i = 0; i < numImages; i++) {
        const img = document.createElement("img");
        img.src = "https://www.shutterstock.com/image-photo/automatic-transmission-gearbox-automobile-sections-757525762";
        img.alt = "automatic transmission";
        img.width = 200;
        imageSection.appendChild(img);
    }
}

