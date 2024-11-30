
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
// Relic stats handling
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
    document.addEventListener("click", (e) => {
        if (e.target.id === "calculateBtn") {
            const relicStats = getRelicStats();
            console.log("Relic Stats:", relicStats);

            // Display calculated Crit DMG for confirmation
            const critDamageDisplay = document.getElementById("stat-CritDamage");
            if (critDamageDisplay) {
                critDamageDisplay.textContent = relicStats.CritDMG.toFixed(2);
            }
        }
    });
});








































document.addEventListener("DOMContentLoaded", () => {
    const characterInfo = {
        Huohuo: {
            stats: {
                Attack: 601.52,
                HP: 1358,
                Defense: 509.36,
                Speed: 98,
                CritRate: 5,
                CritDMG: 50,
            },
            multipliers: {
                basic: 1.5,
                skill: 2.0,
                ultimate: 3.5,
            },
        },
        Bailu: {
            stats: {
                Attack: 120,
                HP: 1000,
                Defense: 50,
                Speed: 110,
                CritRate: 5,
                CritDMG: 50,
            },
            multipliers: {
                basic: 1.2,
                skill: 1.8,
                ultimate: 3.0,
            },
        },
        // Add more characters as needed
    };

    function updateCharacterStats(characterName) {
        const statsContainer = document.getElementById("character-stats");
        const character = characterInfo[characterName];

        if (character) {
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

            for (const [stat, value] of Object.entries(character.stats)) {
                statsTable += `
                    <tr>
                        <td>${stat}</td>
                        <td id="stat-${stat}">${value}</td>
                    </tr>
                `;
            }

            statsTable += `
                    </tbody>
                </table>
                <button id="calculateBtn">Calculate</button>
            `;

            statsContainer.innerHTML = statsTable;

            // Attach event listener to Calculate button
            document.getElementById("calculateBtn").addEventListener("click", () => {
                calculateDamage(characterName);
            });
        } else {
            statsContainer.innerHTML = `<p>No character stats available.</p>`;
        }
    }

    function calculateSelectedRelicStats() {
        const relicBoxes = document.querySelectorAll(".stats-relic-box");
        const stats = {
            Attack: 0,
            HP: 0,
            Speed: 0,
            Defense: 0,
            CritRate: 0,
            CritDMG: 0,
            BreakEffect: 0,
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

    function calculateDamage(characterName) {
        const character = characterInfo[characterName];
        if (!character) return;

        const baseStats = { ...character.stats };
        const relicStats = calculateSelectedRelicStats();

        // Aggregate stats
        const totalStats = { ...baseStats };
        for (const [key, value] of Object.entries(relicStats)) {
            if (totalStats[key] !== undefined) {
                totalStats[key] += value;
            }
        }

        // Calculate total attack with Crit DMG multiplier applied
        const totalAttack = totalStats.Attack * (1 + totalStats.CritDMG / 100);

        // Calculate damage for each move
        const basicDamage = totalAttack * character.multipliers.basic;
        const skillDamage = totalAttack * character.multipliers.skill;
        const ultimateDamage = totalAttack * character.multipliers.ultimate;

        // Update damage display
        document.getElementById("basic-damage").textContent = `Damage: ${basicDamage.toFixed(2)}`;
        document.getElementById("skill-damage").textContent = `Damage: ${skillDamage.toFixed(2)}`;
        document.getElementById("ultimate-damage").textContent = `Damage: ${ultimateDamage.toFixed(2)}`;

        // Show the results container
        const resultContainer = document.getElementById("calculation-result-container");
        resultContainer.style.display = "block";

        // Update the displayed stats in real-time
        for (const [key, value] of Object.entries(totalStats)) {
            const statElement = document.getElementById(`stat-${key}`);
            if (statElement) statElement.textContent = value.toFixed(2);
        }
    }

    // Attach event listeners to character selection buttons
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
