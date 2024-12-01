
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
                    <option value="Defense" data-value="54">Defense (+54%)</option>
                </select>
            </div>
            <div class="stats-relic-sub">
                <span>Relic ${relicId} Sub Stats</span>
                <select class="relic-sub-stat">
                    <option value="Attack" data-value="34">Attack (+34%)</option>
                    <option value="HP" data-value="34">HP (+34%)</option>
                    <option value="Defense" data-value="34">Defense (+34%)</option>
                    <option value="Speed" data-value="15">Speed (+15)</option>
                </select>
                <select class="relic-sub-stat">
                    <option value="HP" data-value="34">HP (+34%)</option>
                    <option value="Defense" data-value="34">Defense (+34%)</option>
                    <option value="BreakEffect" data-value="34">Break Effect (+34%)</option>
                    <option value="EffectRes" data-value="31">EffectRes (+31%)</option>
                </select>
                <select class="relic-sub-stat">
                    <option value="CritRate" data-value="18">Crit Rate (+18%)</option>
                    <option value="CritDMG" data-value="34">Crit DMG (+34%)</option>
                    <option value="Attack" data-value="34">Attack (+34%)</option>
                    <option value="Speed" data-value="15">Speed (+15)</option>
                </select>
                <select class="relic-sub-stat">
                    <option value="CritRate" data-value="18">Crit Rate (+18%)</option>
                    <option value="CritDMG" data-value="34">Crit DMG (+34%)</option>
                    <option value="BreakEffect" data-value="34" >Break Effect (+34%)</option>
                    <option value="Attack" data-value="34" >Attack (+34%)</option>
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
    const relicContainer = document.getElementById("stats-relic-container");
    const selectedCharacterDisplay = document.getElementById("selected-character");
    const calculationResultContainer = document.getElementById("calculation-result-container");
    const basicDamageDisplay = document.getElementById("basic-damage");
    const skillDamageDisplay = document.getElementById("skill-damage");
    const ultimateDamageDisplay = document.getElementById("ultimate-damage");

    // Character information
    const characterInfo = {
        Huohuo: {
            stats: {
                Attack: 601.52,
                HP: 1358,
                Defense: 509.36,
                Speed: 98,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 18,
            },
            multipliers: {
                basic: 1.5,
                skill: 0,
                ultimate: 0,
            },
        },
        Bailu: {
            stats: {
                Attack: 562.72,
                HP: 1319,
                Defense: 485.1,
                Speed: 100,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 10,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 0,
            },
        },
        Gallagher: {
            stats: {
                Attack: 529,
                HP: 1539.9,
                Defense: 441,
                Speed: 98,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 13.3,
                EffectRes: 28,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 3.25,
            },
        },
        Lingsha: {
            stats: {
                Attack: 679.14,
                HP: 1358,
                Defense: 436.59,
                Speed: 98,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 21.3,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 1,
                ultimate: 1.8,
            },
        },
        Luocha: {
            stats: {
                Attack: 756.76,
                HP: 1281,
                Defense: 363.83,
                Speed: 101,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 2.4,
            },
        },
        Lynx: {
            stats: {
                Attack: 493.92,
                HP: 1058.4,
                Defense: 551.25,
                Speed: 100,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 10,
            },
            multipliers: {
                basic: 0.65,
                skill: 0,
                ultimate: 0,
            },
        },
        Natasha: {
            stats: {
                Attack: 476.28,
                HP: 1164.24,
                Defense: 507.15,
                Speed: 98,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 18,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 0,
            },
        },
        Arlan: {
            stats: {
                Attack: 599.76,
                HP: 1199.52,
                Defense: 599.76,
                Speed: 102,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 18,
            },
            multipliers: {
                basic: 1.3,
                skill: 3,
                ultimate: 3.84,
            },
        },
        Blade: {
            stats: {
                Attack: 543.31,
                HP: 1358.28,
                Defense: 485.1,
                Speed: 97,
                CritRate: 17,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 10,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 3.36,
            },
        },
        Clara: {
            stats: {
                Attack: 737.35,
                HP: 1241.86,
                Defense: 485.1,
                Speed: 90,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 3.0,
                ultimate: 4.92,
            },
        },
        'Dan Heng - Imbibitor Lunae': {
            stats: {
                Attack: 698.54,
                HP: 1241.86,
                Defense: 363.83,
                Speed: 102,
                CritRate: 16,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 8.84,
                skill: 0,
                ultimate: 3.6,
            },
        },
        Firefly: {
            stats: {
                Attack: 523.91,
                HP: 814.97,
                Defense: 776.16,
                Speed: 109,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 37.4,
                EffectRes: 18,
            },
            multipliers: {
                basic: 1.3,
                skill: 3.55,
                ultimate: 0,
            },
        },
        Jingliu: {
            stats: {
                Attack: 679.14,
                HP: 1435.9,
                Defense: 485.1,
                Speed: 105,
                CritRate: 5,
                CritDMG: 87.3,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 3.125,
                ultimate: 3.6,
            },
        },
        Misha: {
            stats: {
                Attack: 599.76,
                HP: 1270.08,
                Defense: 396.9,
                Speed: 96,
                CritRate: 11.7,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 2.5,
                ultimate: 1.8,
            },
        },
        'Trailblazer - Destruction': {
            stats: {
                Attack: 620.93,
                HP: 1203.05,
                Defense: 460.85,
                Speed: 100,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.5625,
                ultimate: 3.15,
            },
        },
        Xueyi: {
            stats: {
                Attack: 599.76,
                HP: 1058.4,
                Defense: 396.9,
                Speed: 103,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 37.4,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.75,
                ultimate: 3.72,
            },
        },
        Yunli: {
            stats: {
                Attack: 679.14,
                HP: 1358.28,
                Defense: 460.85,
                Speed: 94,
                CritRate: 11.7,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.5,
                ultimate: 3.84,
            },
        },
        Argenti: {
            stats: {
                Attack: 737.35,
                HP: 1047.82,
                Defense: 363.83,
                Speed: 103,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.5,
                ultimate: 3.36,
            },
        },
        Herta: {
            stats: {
                Attack: 582.12,
                HP: 952.56,
                Defense: 396.9,
                Speed: 100,
                CritRate: 9.7,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.45,
                ultimate: 2.4,
            },
        },
        Himeko: {
            stats: {
                Attack: 756.76,
                HP: 1047.82,
                Defense: 436.59,
                Speed: 96,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 10,
            },
            multipliers: {
                basic: 1.3,
                skill: 2.5,
                ultimate: 2.76,
            },
        },
        Jade: {
            stats: {
                Attack: 659.74,
                HP: 1086.62,
                Defense: 509.36,
                Speed: 103,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 10,
            },
            multipliers: {
                basic: 1.17,
                skill: 0,
                ultimate: 4,
            },
        },
        'Jing Yuan': {
            stats: {
                Attack: 698.54,
                HP: 1164.24,
                Defense: 485.1,
                Speed: 99,
                CritRate: 17,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.25,
                ultimate: 2.4,
            },
        },
        Qingque: {
            stats: {
                Attack: 652.68,
                HP: 1023.12,
                Defense: 441,
                Speed: 98,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 3.12,
                skill: 0,
                ultimate: 2.4,
            },
        },
        Rappa: {
            stats: {
                Attack: 717.95,
                HP: 1086.62,
                Defense: 460.85,
                Speed: 105,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 13.3,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.5,
                ultimate: 0,
            },
        },
        Serval: {
            stats: {
                Attack: 652.68,
                HP: 374.85,
                Defense: 917.28,
                Speed: 104,
                CritRate: 23.7,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 10,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.75,
                ultimate: 2.16,
            },
        },
        Asta: {
            stats: {
                Attack: 511.56,
                HP: 1023.12,
                Defense: 463.05,
                Speed: 106,
                CritRate: 11.7,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 2.5,
                ultimate: 0,
            },
        },
        Bronya: {
            stats: {
                Attack: 582.12,
                HP: 1241.86,
                Defense: 533.61,
                Speed: 99,
                CritRate: 5,
                CritDMG: 74,
                BreakEffect: 0,
                EffectRes: 10,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 0,
            },
        },
        Hanya: {
            stats: {
                Attack: 564.48,
                HP: 917.28,
                Defense: 352.8,
                Speed: 119,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 3,
                ultimate: 0,
            },
        },
        Robin: {
            stats: {
                Attack: 640.33,
                HP: 1280.66,
                Defense: 485.1,
                Speed: 107,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 0,
            },
        },
        'Ruan Mei': {
            stats: {
                Attack: 659.74,
                HP: 1086.62,
                Defense: 485.1,
                Speed: 109,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 37.3,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 0,
            },
        },
        Sparkle: {
            stats: {
                Attack: 523.91,
                HP: 1397.09,
                Defense: 485.1,
                Speed: 101,
                CritRate: 5,
                CritDMG: 74,
                BreakEffect: 0,
                EffectRes: 10,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 0,
            },
        },
        Sunday: {
            stats: {
                Attack: 0,
                HP: 0,
                Defense: 0,
                Speed: 0,
                CritRate: 0,
                CritDMG: 0,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 0,
                skill: 0,
                ultimate: 0,
            },
        },
        Tingyun: {
            stats: {
                Attack: 529.2,
                HP: 846.72,
                Defense: 396.9,
                Speed: 110,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 0,
            },
        },
        'Trailblazer - Harmony': {
            stats: {
                Attack: 446.29,
                HP: 1086.62,
                Defense: 679.14,
                Speed: 105,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 37.3,
                EffectRes: 10,
            },
            multipliers: {
                basic: 1.3,
                skill: 2.5,
                ultimate: 0,
            },
        },
        Yukong: {
            stats: {
                Attack: 599.76,
                HP: 917.28,
                Defense: 374.85,
                Speed: 107,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 4.56,
            },
        },
        Boothill: {
            stats: {
                Attack: 620.93,
                HP: 1203.05,
                Defense: 436.59,
                Speed: 107,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 37.3,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 4.8,
            },
        },
        'Dan Heng': {
            stats: {
                Attack: 546.84,
                HP: 882,
                Defense: 396.9,
                Speed: 110,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 3.25,
                ultimate: 4.8,
            },
        },
        'Dr Ratio': {
            stats: {
                Attack: 776.16,
                HP: 1047.82,
                Defense: 460.85,
                Speed: 103,
                CritRate: 17,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 5.25,
                ultimate: 2.88,
            },
        },
        Feixiao: {
            stats: {
                Attack: 601.52,
                HP: 1047.82,
                Defense: 388.08,
                Speed: 112,
                CritRate: 17,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 3.875,
                ultimate: 10.41,
            },
        },
        'March 7th - The Hunt': {
            stats: {
                Attack: 564.48,
                HP: 1058.4,
                Defense: 441,
                Speed: 102,
                CritRate: 5,
                CritDMG: 74,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 2.3,
                skill: 0,
                ultimate: 2.88,
            },
        },
        Moze: {
            stats: {
                Attack: 599.76,
                HP: 811.44,
                Defense: 352.8,
                Speed: 111,
                CritRate: 5,
                CritDMG: 74,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.875,
                ultimate: 3.24,
            },
        },
        Seele: {
            stats: {
                Attack: 640.33,
                HP: 931.39,
                Defense: 363.83,
                Speed: 115,
                CritRate: 5,
                CritDMG: 74,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 2.75,
                ultimate: 5.1,
            },
        },
        Sushang: {
            stats: {
                Attack: 564.48,
                HP: 917.28,
                Defense: 418.95,
                Speed: 107,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 3.875,
                ultimate: 4.34,
            },
        },
        Topaz: {
            stats: {
                Attack: 620.93,
                HP: 931.39,
                Defense: 412.34,
                Speed: 110,
                CritRate: 17,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 4.375,
                ultimate: 0,
            },
        },
        Yanqing: {
            stats: {
                Attack: 679.14,
                HP: 892.58,
                Defense: 412.34,
                Speed: 109,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 2.75,
                ultimate: 4.2,
            },
        },
        Acheron: {
            stats: {
                Attack: 698.54,
                HP: 1125,
                Defense: 436.59,
                Speed: 101,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 2,
                ultimate: 676.8,
            },
        },
        'Black Swan': {
            stats: {
                Attack: 659.74,
                HP: 1086.62,
                Defense: 485.1,
                Speed: 102,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 0.78,
                skill: 1.125,
                ultimate: 1.44,
            },
        },
        Guinaifen: {
            stats: {
                Attack: 582.12,
                HP: 882,
                Defense: 441,
                Speed: 106,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 24,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.5,
                ultimate: 2.46,
            },
        },
        Jiaoqiu: {
            stats: {
                Attack: 601.52,
                HP: 1358.28,
                Defense: 509.36,
                Speed: 103,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.875,
                ultimate: 1.2,
            },
        },
        Kafka: {
            stats: {
                Attack: 679.14,
                HP: 1086.62,
                Defense: 485.1,
                Speed: 100,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 2.825,
                ultimate: 566.69,
            },
        },
        Luka: {
            stats: {
                Attack: 582.12,
                HP: 917.28,
                Defense: 485.1,
                Speed: 103,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 2.08,
                skill: 1.5,
                ultimate: 3.96,
            },
        },
        Pela: {
            stats: {
                Attack: 546.84,
                HP: 987.84,
                Defense: 463.05,
                Speed: 105,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 2.625,
                ultimate: 1.2,
            },
        },
        Sampo: {
            stats: {
                Attack: 617.4,
                HP: 1023.12,
                Defense: 396.9,
                Speed: 102,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 2.8,
                ultimate: 1.92,
            },
        },
        'Silver Wolf': {
            stats: {
                Attack: 640.33,
                HP: 1047.82,
                Defense: 460.85,
                Speed: 107,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 2.45,
                ultimate: 4.56,
            },
        },
        Fugue: {
            stats: {
                Attack: 0,
                HP: 0,
                Defense: 0,
                Speed: 0,
                CritRate: 0,
                CritDMG: 0,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 0,
                skill: 0,
                ultimate: 0,
            },
        },
        Welt: {
            stats: {
                Attack: 620.93,
                HP: 1125.43,
                Defense: 509.36,
                Speed: 102,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 10,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.8,
                ultimate: 1.8,
            },
        },
        Aventurine: {
            stats: {
                Attack: 120,
                HP: 1000,
                Defense: 50,
                Speed: 106,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 10,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 3.24,
            },
        },
        'Fu Xuan': {
            stats: {
                Attack: 465.7,
                HP: 1474.7,
                Defense: 606.38,
                Speed: 100,
                CritRate: 17,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 10,
            },
            multipliers: {
                basic: 0.65,
                skill: 0,
                ultimate: 1.2,
            },
        },
        Gepard: {
            stats: {
                Attack: 543.31,
                HP: 1397.09,
                Defense: 654.88,
                Speed: 92,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 10,
            },
            multipliers: {
                basic: 1.3,
                skill: 2.3,
                ultimate: 0,
            },
        },
        'March 7th': {
            stats: {
                Attack: 511.56,
                HP: 1058.4,
                Defense: 573.3,
                Speed: 101,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 17,
            },
            multipliers: {
                basic: 1.3,
                skill: 1.25,
                ultimate: 1.8,
            },
        },
        'Trailblazer - Preservation': {
            stats: {
                Attack: 601.52,
                HP: 1241.86,
                Defense: 606.38,
                Speed: 95,
                CritRate: 5,
                CritDMG: 50,
                BreakEffect: 0,
                EffectRes: 0,
            },
            multipliers: {
                basic: 1.3,
                skill: 0,
                ultimate: 1.25,
            },
        },

    };

    // Function to update the character stats display dynamically
    function updateCharacterStatsDisplay() {
        const selectedCharacter = selectedCharacterDisplay.textContent.split(": ")[1];
        if (!selectedCharacter || !characterInfo[selectedCharacter]) {
            console.error("No character selected or invalid character name.");
            return;
        }

        const baseStats = characterInfo[selectedCharacter].stats;
        const relicStats = getRelicStats();

        // Calculate updated stats
        const updatedStats = {
            Attack: baseStats.Attack + (baseStats.Attack * relicStats.Attack / 100),
            HP: baseStats.HP + (baseStats.HP * relicStats.HP / 100),
            Defense: baseStats.Defense + (baseStats.Defense * relicStats.Defense / 100),
            Speed: baseStats.Speed + relicStats.Speed, // Speed is additive
            CritRate: baseStats.CritRate + relicStats.CritRate,
            CritDMG: baseStats.CritDMG + relicStats.CritDMG,
        };

        // Update the stats table
        const statsContainer = document.getElementById("character-stats");
        let statsTable = `
            <h3>${selectedCharacter}'s Stats</h3>
            <table>
                <thead>
                    <tr>
                        <th>Stat</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (const [stat, value] of Object.entries(updatedStats)) {
            statsTable += `
                <tr>
                    <td>${stat}</td>
                    <td>${value.toFixed(2)}</td>
                </tr>
            `;
        }

        statsTable += `
                </tbody>
            </table>
            <button id="calculateBtn" style="margin-top: 20px;">Calculate</button>
        `;
        statsContainer.innerHTML = statsTable;

        // Attach event listener to the Calculate button
        document.getElementById("calculateBtn").addEventListener("click", () => {
            calculateDamage(selectedCharacter, updatedStats);
        });
    }

    // Function to calculate damage
    function calculateDamage(characterName, stats) {
        const characterMultipliers = characterInfo[characterName].multipliers;

        const attackWithCrit = stats.Attack * (1 + stats.CritDMG / 100); // Attack considering CritDMG
        const basicDamage = attackWithCrit * characterMultipliers.basic;
        const skillDamage = attackWithCrit * characterMultipliers.skill;
        const ultimateDamage = attackWithCrit * characterMultipliers.ultimate;

        // Update the damage display
        basicDamageDisplay.textContent = `Damage: ${basicDamage.toFixed(2)}`;
        skillDamageDisplay.textContent = `Damage: ${skillDamage.toFixed(2)}`;
        ultimateDamageDisplay.textContent = `Damage: ${ultimateDamage.toFixed(2)}`;

        // Show the calculation result container
        calculationResultContainer.style.display = "block";
    }

    // Function to calculate relic stats dynamically
    function getRelicStats() {
        const relicBoxes = document.querySelectorAll(".stats-relic-box");
        const stats = {
            Attack: 0,
            HP: 0,
            Speed: 0,
            Defense: 0,
            CritRate: 0,
            CritDMG: 0,
        };

        relicBoxes.forEach((box) => {
            // Main stat
            const mainStatSelect = box.querySelector(".relic-main-stat");
            const mainStatValue = parseFloat(mainStatSelect.selectedOptions[0].dataset.value);
            const mainStatType = mainStatSelect.value;
            if (mainStatType in stats) {
                stats[mainStatType] += mainStatValue;
            }

            // Sub stats
            const subStatSelects = box.querySelectorAll(".relic-sub-stat");
            subStatSelects.forEach((subStatSelect) => {
                const subStatValue = parseFloat(subStatSelect.selectedOptions[0].dataset.value);
                const subStatType = subStatSelect.value;
                if (subStatType in stats) {
                    stats[subStatType] += subStatValue;
                }
            });
        });

        return stats;
    }

    // Attach event listeners to all relic stat selectors for real-time updates
    relicContainer.addEventListener("change", (event) => {
        if (event.target.matches(".relic-main-stat, .relic-sub-stat")) {
            updateCharacterStatsDisplay();
        }
    });

    // Attach event listeners to character selection buttons
    const characterButtons = document.querySelectorAll(".filterDiv");
    characterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedCharacter = button.value;
            selectedCharacterDisplay.textContent = `You selected: ${selectedCharacter}`;
            updateCharacterStatsDisplay(); // Update stats when character changes
        });
    });

    // Initial update for stats table
    updateCharacterStatsDisplay();
});
