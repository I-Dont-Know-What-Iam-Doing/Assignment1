

// Initialize both accordions
document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content-info");
    const relicContent = document.getElementById("relic-content-info");

    // Set initial styles to ensure they start as collapsed
    content.style.height = "0px";
    content.style.overflow = "hidden";
    relicContent.style.height = "0px";
    relicContent.style.overflow = "hidden";
});





// Characters


// Accordion for characters
function toggleAccordion() {
    const content = document.getElementById("content-info");

    if (content.classList.contains("expanded")) {
        content.style.height = "0px"; // Collapse
        content.style.overflow = "hidden"; // Prevent scrollbars
    } else {
        content.style.height = content.scrollHeight + "px"; // Expand
        content.style.overflow = "visible"; // Show content
    }

    content.classList.toggle("expanded");
}





// JavaScript code for character selection
document.addEventListener("DOMContentLoaded", () => {
    const characterButtons = document.querySelectorAll(".filterDiv");

    characterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedCharacter = button.value;
            const displayElement = document.getElementById("selected-character");
            displayElement.textContent = `You selected: ${selectedCharacter}`;
        });
    });
});






// Relics


// Accordion for relics
function toggleAccordion2() {
    const relicContent = document.getElementById("relic-content-info");

    if (relicContent.classList.contains("expanded")) {
        relicContent.style.height = "0px"; // Collapse
        relicContent.style.overflow = "hidden"; // Prevent scrollbars
    } else {
        relicContent.style.height = relicContent.scrollHeight + "px"; // Expand
        relicContent.style.overflow = "visible"; // Show content
    }

    relicContent.classList.toggle("expanded");
}



// Relic selection
document.addEventListener("DOMContentLoaded", () => {
    const relicButtons = document.querySelectorAll(".relicDiv");
    const selectedRelicDiv = document.getElementById("selected-relic");

    relicButtons.forEach(button => {
        button.addEventListener("click", () => {
            const relicName = button.value;
            const relicDescription = button.getAttribute("data-description");

            // Update the selected relic text with line breaks and formatting
            selectedRelicDiv.innerHTML = `
                <div>
                    <strong>You selected: ${relicName}</strong><br>
                    ${relicDescription}
                </div>
            `;
        });
    });

    // Filter function for relics
    function filterRelicSelection(category) {
        const items = document.querySelectorAll(".relicDiv");
        if (category === "all") {
            items.forEach(item => item.style.display = "inline-block");
        } else {
            items.forEach(item => {
                if (item.classList.contains(category)) {
                    item.style.display = "inline-block";
                } else {
                    item.style.display = "none";
                }
            });
        }
    }

    // Attach filterRelicSelection function to the global scope for button clicks
    window.filterRelicSelection = filterRelicSelection;
});
