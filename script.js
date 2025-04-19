// Function to update dropdown color based on the selection
function updateDropdownColor(select) {
    const value = select.value;
    select.classList.remove("yes", "maybe", "no"); // Remove previous classes

    if (value === "yes") {
        select.classList.add("yes");
    } else if (value === "maybe") {
        select.classList.add("maybe");
    } else if (value === "no") {
        select.classList.add("no");
    }
}

// Function to create the options for the dropdown
function createOptions(select) {
    const options = ["", "yes", "maybe", "no"];
    options.forEach(opt => {
        const optionElement = document.createElement("option");
        optionElement.value = opt;
        optionElement.textContent = opt === "" ? "—" : opt.charAt(0).toUpperCase() + opt.slice(1); // Capitalize the option
        select.appendChild(optionElement);
    });
}

// Initialize all dropdowns in "WHO", "WHERE", and "WHAT" sections
document.querySelectorAll(".status").forEach(select => {
    createOptions(select); // Create options dynamically for the .status dropdowns
    updateDropdownColor(select); // Set the initial color
    select.addEventListener("change", () => updateDropdownColor(select)); // Update color on change
});

// Do not touch player dropdowns, leave them as they are (no background change)
document.querySelectorAll(".player-dropdown").forEach(select => {
    //  createPlayerOptions(select);  // Removed createPlayerOptions.  It's not needed.
});

// Function to handle crossing out the name/item when clicked
function toggleCrossOut(event) {
    const itemElement = event.target;

    // Ensure the clicked element is a span with the 'clickable-name' class
    if (itemElement.classList.contains("clickable-name")) {
        // Toggle the 'crossed-out' class to cross out the text
        itemElement.classList.toggle("crossed-out");
    }
}

// Add event listener to all clickable names/items when the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".clickable-name").forEach(item => {
        item.addEventListener("click", toggleCrossOut);
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    let isDarkMode = true; // Start with dark mode

    themeToggle.addEventListener('click', () => {
        if (isDarkMode) {
            body.classList.add('light-mode');
            isDarkMode = false;
        } else {
            body.classList.remove('light-mode');
            isDarkMode = true;
        }
    });
});