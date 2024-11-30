
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




































// Stats info
document.addEventListener("DOMContentLoaded", () => {
    const characterButtons = document.querySelectorAll(".filterDiv");

    characterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedCharacter = button.value;
            const displayElement = document.getElementById("selected-character");
            displayElement.textContent = `You selected: ${selectedCharacter}`;

            // Call the function to update the image and description
            updateCharacterDisplay(selectedCharacter);
        });
    });
});

// Function to update the display area with the selected character's image and description
function updateCharacterDisplay(characterName) {
    const displayArea = document.getElementById("character-display");
    
    // Information for each character
    const characterInfo = {
        Bailu: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/bailu-character_cut_in_front.webp?x49467",
            description: "Bailu is a healer from the Vidyadhara race. She specializes in keeping her allies alive."
        },
        Gallagher: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/gallagher-character_cut_in_front.webp?x49467",
            description: "Gallagher is a powerful warrior who excels in close combat."
        },
        Huohuo: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_cut_in_front.webp?x49467",
            description: "Huohuo is a fox spirit who wields healing magic and provides critical support to her team."
        },
        Lingsha: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/lingsha-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Luocha: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/luocha-character_cut_in_front.webp?x49467",
            description: "Huohuo is a fox spirit who wields healing magic and provides critical support to her team."
        },
        Lynx: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/lynx-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Natasha: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/natasha-character_cut_in_front.webp?x49467",
            description: "Huohuo is a fox spirit who wields healing magic and provides critical support to her team."
        },
        Arlan: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/arlan-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Blade: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/blade-character_cut_in_front.webp?x49467",
            description: "Huohuo is a fox spirit who wields healing magic and provides critical support to her team."
        },
        Clara: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/clara-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        'Dan Heng - Imbibitor Lunae': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/dan-heng-imbibitor-lunae-character_cut_in_front.webp?x49467",
            description: "Huohuo is a fox spirit who wields healing magic and provides critical support to her team."
        },
        Firefly: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/firefly-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Hook: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/hook-character_cut_in_front.webp?x49467",
            description: "Huohuo is a fox spirit who wields healing magic and provides critical support to her team."
        },
        Jingliu: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/jingliu-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Misha: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/misha-character_cut_in_front.webp?x49467",
            description: "Huohuo is a fox spirit who wields healing magic and provides critical support to her team."
        },
        'Trailblazer - Destruction': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-2_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Xueyi: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/xueyi-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Yunli: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/yunli-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Argenti: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/argenti-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Herta: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/herta-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Himeko: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/himeko-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Jade: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/jade-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        'Jing Yuan': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/jing-yuan-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Qingque: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/qingque-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Rappa: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/rappa-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Serval: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/serval-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Asta: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/asta-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Bronya: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/bronya-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Hanya: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/hanya-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Robin: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/robin-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        'Ruan Mei': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/ruan-mei-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Sparkle: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/sparkle-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Sunday: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/sunday-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Tingyun: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/tingyun-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        'Trailblazer - Harmony': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-5_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Yukong: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/yukong-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Boothill: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/boothill-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        'Dan Heng': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/dan-heng-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        'Dr Ratio': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/dr-ratio-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Feixiao: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/feixiao-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        'March 7th - The Hunt': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/march-7th-character-2_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Moze: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/moze-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Seele: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/seele-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Sushang: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/sushang-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Topaz: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/topaz-numby-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Yanqing: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/yanqing-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Acheron: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/acheron-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        'Black Swan': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/black-swan-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Guinaifen: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/guinaifen-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Jiaoqiu: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/jiaoqiu-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Kafka: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/kafka-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Luka: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/luka-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Pela: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/pela-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Sampo: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/sampo-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        'Silver Wolf': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/silver-wolf-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Fugue: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/fugue-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Welt: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/welt-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Aventurine: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/aventurine-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        'Fu Xuan': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/fu-xuan-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        Gepard: {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/gepard-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        'March 7th': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/march-7th-character_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        },
        'Trailblazer - Preservation': {
            imgUrl: "https://starrail.honeyhunterworld.com/img/character/trailblazer-character-4_cut_in_front.webp?x49467",
            description: "Lingsha is a swift and agile fighter who uses her speed to outmaneuver opponents."
        }


    };

    // Check if the character exists in the characterInfo object
    if (characterInfo[characterName]) {
        const character = characterInfo[characterName];
        displayArea.innerHTML = `
            <img src="${character.imgUrl}" alt="${characterName}">
            <div id="character-details">
                <h3>${characterName}</h3>
                <p>${character.description}</p>
            </div>
        `;
    } else {
        displayArea.innerHTML = `<p>No character selected</p>`;
    }
}