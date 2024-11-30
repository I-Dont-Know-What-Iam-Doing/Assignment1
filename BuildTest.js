
// Characters
function toggleAccordion() {
    const content = document.getElementById("content-info");
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




















// Relic
function toggleAccordion2() {
    const relicContent = document.getElementById("relic-content-info");
    relicContent.classList.toggle("expanded");
}

function filterRelicSelection(filter) {
    const relics = document.querySelectorAll(".relicDiv");

    relics.forEach((relic) => {
    if (filter === "all" || relic.classList.contains(filter)) {
        relic.style.display = "block";
    } else {
        relic.style.display = "none";
    }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const relicButtons = document.querySelectorAll(".relicDiv");
    const selectedRelicDiv = document.getElementById("selected-relic");

    relicButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const relicName = button.value; // Relic set name
            const relicDescription = button.getAttribute("data-description"); // Description from HTML
            const relicSet = button.dataset.set; // Relic set from dataset
            const pieceCount = button.dataset.piece; // 2 or 4 from dataset

            // Update the selected relic text with description
            selectedRelicDiv.innerHTML = `
                <div>
                    <strong>You selected: ${relicName}</strong><br>
                    ${relicDescription}
                </div>
            `;

            // Call function to display bonus details
            displayRelicBonus(relicSet, pieceCount);
        });
    });
});

// Function to display the relic bonus description dynamically
function displayRelicBonus(relicSet, pieceCount) {
    const relicInfo = relicSets[relicSet];
    if (relicInfo && relicInfo.bonuses[pieceCount]) {
        const bonusDescription = relicInfo.bonuses[pieceCount].description;

        // Update the bonus display (add a container for bonus description)
        const bonusContainer = document.getElementById("relic-bonus-description");
        if (bonusContainer) {
            bonusContainer.innerHTML = `
                <h3>${relicSet} (${pieceCount}-Piece Set Bonus)</h3>
                <p>${bonusDescription}</p>
            `;
        } else {
            console.error("Relic bonus description container not found.");
        }
    } else {
        console.error(`No bonus found for ${relicSet} (${pieceCount}-Piece Set).`);
    }
}

// Sample relicSets object
const relicSets = {
    "Sacerdos' Relived Ordeal": {
        bonuses: {
            2: {
                description: "Increases SPD by 6%.",
                stats: { Speed: 6 },
            },
            4: {
                description: "When using Skill or Ultimate on one ally target, increases the ability-using target's CRIT DMG by 18%, lasting for 2 turns. This effect can stack up to 2 times.",
                stats: { Speed: 6, CritDMG: 18 },
            },
        },
    },
    // Add more relics here
};
















//relic stats
document.addEventListener("DOMContentLoaded", () => {
    const relicContainer = document.getElementById("stats-relic-container");

    // Function to create a properly formatted relic box
    function createRelicBox(relicId) {
        const relicBox = document.createElement("div");
        relicBox.classList.add("stats-relic-box");
        relicBox.setAttribute("data-relic", relicId);

        relicBox.innerHTML = `
            <div class="stats-relic-main">
                <span>Relic ${relicId} Main Stat</span>
                <select class="relic-main-stat">
                    <option value="Attack" data-value="54">Attack (+54%)</option>
                    <option value="HP" data-value="54">HP (+54%)</option>
                    <option value="Speed" data-value="15">Speed (+15)</option>
                    <option value="Defense" data-value="54">Defense (+54%)</option>
                </select>
            </div>
            <div class="stats-relic-sub">
                <span>Relic ${relicId} Sub Stats</span>
                <select class="relic-sub-stat">
                    <option value="CritRate" data-value="18">Crit Rate (+18%)</option>
                    <option value="CritDMG" data-value="34">Crit DMG (+34%)</option>
                    <option value="BreakEffect" data-value="34">Break Effect (+34%)</option>
                    <option value="EffectRes" data-value="34">Attack (+34%)</option>
                </select>
                <select class="relic-sub-stat">
                    <option value="CritRate" data-value="18">Crit Rate (+18%)</option>
                    <option value="CritDMG" data-value="34">Crit DMG (+34%)</option>
                    <option value="BreakEffect" data-value="34">Break Effect (+34%)</option>
                    <option value="EffectRes" data-value="34">Attack (+34%)</option>
                </select>
                <select class="relic-sub-stat">
                    <option value="CritRate" data-value="18">Crit Rate (+18%)</option>
                    <option value="CritDMG" data-value="34">Crit DMG (+34%)</option>
                    <option value="BreakEffect" data-value="34">Break Effect (+34%)</option>
                    <option value="EffectRes" data-value="34">Attack (+34%)</option>
                </select>
                <select class="relic-sub-stat">
                    <option value="CritRate" data-value="18">Crit Rate (+18%)</option>
                    <option value="CritDMG" data-value="34">Crit DMG (+34%)</option>
                    <option value="BreakEffect" data-value="34">Break Effect (+34%)</option>
                    <option value="EffectRes" data-value="34">Attack (+34%)</option>
                </select>
            </div>
        `;
        return relicBox;
    }

    // Function to update relic boxes dynamically based on piece count
    function updateRelicsForSet(pieceCount) {
        const existingRelic3 = document.querySelector(".stats-relic-box[data-relic='3']");
        const existingRelic4 = document.querySelector(".stats-relic-box[data-relic='4']");

        if (pieceCount === "4RS") {
            if (!existingRelic3) relicContainer.appendChild(createRelicBox(3));
            if (!existingRelic4) relicContainer.appendChild(createRelicBox(4));
        } else if (pieceCount === "2RS") {
            if (existingRelic3) existingRelic3.remove();
            if (existingRelic4) existingRelic4.remove();
        }
    }

    // Attach event listeners to relic buttons
    const relicButtons = document.querySelectorAll(".relicDiv");
    relicButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const pieceCount = button.classList.contains("4RS") ? "4RS" : "2RS";
            updateRelicsForSet(pieceCount);
        });
    });

    // Function to calculate relic stats
    function getRelicStats() {
        const relicBoxes = document.querySelectorAll(".stats-relic-box");
        const stats = {
            Attack: 0,
            HP: 0,
            Speed: 0,
            Defense: 0,
            CritRate: 0,
            CritDMG: 0,
            BreakEffect: 0,
            EffectRes: 0,
        };

        relicBoxes.forEach((box) => {
            // Main stat
            const mainStatSelect = box.querySelector(".relic-main-stat");
            const mainStatValue = parseFloat(mainStatSelect.selectedOptions[0].dataset.value);
            const mainStatType = mainStatSelect.value;
            stats[mainStatType] += mainStatValue;

            // Sub stats
            const subStatSelects = box.querySelectorAll(".relic-sub-stat");
            subStatSelects.forEach((subStatSelect) => {
                const subStatValue = parseFloat(subStatSelect.selectedOptions[0].dataset.value);
                const subStatType = subStatSelect.value;
                stats[subStatType] += subStatValue;
            });
        });

        return stats;
    }

    // Attach event listener to Calculate button
    const calculateButton = document.getElementById("calculateBtn");
    if (calculateButton) {
        calculateButton.addEventListener("click", () => {
            const relicStats = getRelicStats();
            console.log("Relic Stats:", relicStats);
        });
    }
});








































// Stats info: Add event listeners to character selection buttons
document.addEventListener("DOMContentLoaded", () => {
    const characterButtons = document.querySelectorAll(".filterDiv");

    characterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedCharacter = button.value;
            const displayElement = document.getElementById("selected-character");
            displayElement.textContent = `You selected: ${selectedCharacter}`;

            // Update stats for the selected character
            updateCharacterStats(selectedCharacter);
        });
    });
});

// Character stats information
const characterInfo = {
    Bailu: {
        stats: {
            Attack: 120,
            HP: 1000,
            Speed: 110,
            Defense: 50,
        },
    },
    Huohuo: {
        stats: {
            Attack: 601.52,
            Defense: 509.36,
            HP: 1358,
            Speed: 98,
            CritRate: 5,
            CritDamage: 50,
        },
    },
    // Add more characters here
};

// Function to update the stats display for the selected character
function updateCharacterStats(characterName) {
    const statsContainer = document.getElementById("character-stats");

    if (characterInfo[characterName]) {
        const character = characterInfo[characterName];

        // Create a stats table for the selected character
        let statsTable = `
            <h3>${characterName}'s Stats</h3>
            <table>
                <thead>
                    <tr>
                        <th>Stat</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Populate the stats table dynamically
        for (const [stat, value] of Object.entries(character.stats)) {
            statsTable += `
                <tr>
                    <td>${stat}</td>
                    <td>${value}</td>
                </tr>
            `;
        }

        statsTable += `
                </tbody>
            </table>
            <button id="calculateBtn">Calculate</button>
        `;

        statsContainer.innerHTML = statsTable;

        // Attach an event listener to the Calculate button
        document.getElementById("calculateBtn").addEventListener("click", () => {
            calculateStats(characterName, character.stats);
        });
    } else {
        // If no character is selected, clear the stats display
        statsContainer.innerHTML = `<p>No character stats available.</p>`;
    }
}

// Function for calculations
function calculateStats(characterName, stats) {
    console.log(`Calculating stats for ${characterName}:`, stats);

    // Example calculation: Sum of all stats
    const totalStats = Object.values(stats).reduce((sum, stat) => sum + stat, 0);
    console.log(`Total Stats for ${characterName}: ${totalStats}`);

    // Display the result (placeholder for now)
    alert(`Total Stats for ${characterName}: ${totalStats}`);
}