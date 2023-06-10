// Variable to store the dragged item
var draggedItem;

// Event handler for drag start
function handleDragStart(e) {
    draggedItem = this;
    this.classList.add("dragging");
}

// Event handler for drag over
function handleDragOver(e) {
    e.preventDefault();
}

// Event handler for drop
function handleDrop(e) {
    e.preventDefault();
    draggedItem.classList.remove("dragging");
    this.appendChild(draggedItem);
    showSuccessMessage("Item dropped successfully!");
    var placeholder = document.getElementById("placeholder");
    placeholder.remove();
}

// Function to show success message
function showSuccessMessage(message) {
    var successMessage = document.getElementById("successMessage");
    successMessage.innerText = message;
    successMessage.style.display = "block";
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 2000);
}

// Function to reset containers
function resetContainers() {
    window.location.replace("./");
}

// Get all draggable items
var items = document.querySelectorAll(".item");

// Add dragstart event listener to each item
items.forEach(function(item) {
    item.addEventListener("dragstart", handleDragStart, false);
    item.addEventListener("touchstart", handleDragStart, false);
});

// Get the target container for dropping items
var container2 = document.getElementById("container2");

// Add dragover and drop event listeners to the target container
container2.addEventListener("dragover", handleDragOver, false);
container2.addEventListener("drop", handleDrop, false);
container2.addEventListener("touchmove", handleDragOver, false);
container2.addEventListener("touchend", handleDrop, false);
