// index.js

function displayCurrentDate() {
    const currentDateElement = document.getElementById("currentDate");
    const currentDate = new Date();
    currentDateElement.textContent = `Today's Date: ${currentDate.toDateString()}`;
}

// Call the function to display the date when the page loads
displayCurrentDate();
