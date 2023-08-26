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
    } else if (selectedTransmission === "manual") {
        instructionMessage.textContent = "For manual transmission vehicles, follow these instructions...";
    } else {
        // Invalid selection, show an error message
        instructionMessage.textContent = "Please select a valid transmission type.";
        transmissionSelect.value = ""; // Clear the selection
    }
}



function showImages() {
    const numOfImages = validateInput();

    if (numOfImages !== null) {
        const imageContainer = document.getElementById("imageContainer");
        imageContainer.innerHTML = ""; // Clear previous images

        for (let i = 0; i < numOfImages; i++) {
            const image = document.createElement("img");
            image.src = "https://www.shutterstock.com/image-illustration/motor-oil-bottle-isolated-on-white-1614433003"; // Replace with the actual image URL
            image.alt = "Oil Change Image";
            imageContainer.appendChild(image);
        }
    }
}

function validateInput() {
    const numOfImagesInput = document.getElementById("numOfImages");
    const errorText = document.getElementById("errorText");
    const numOfImages = parseInt(numOfImagesInput.value);

    if (isNaN(numOfImages) || numOfImages <= 0) {
        errorText.textContent = "Please enter a valid positive number.";
        return null;
    }

    errorText.textContent = "";
    return numOfImages;
}