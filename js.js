
// Slideshow
// Initialize slide index
let slideIndex = 1;

// Display the first slide when the page loads
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    dots[slideIndex - 1].className += " active";
}

// Auto-slide functionality
function autoSlides() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlides, 5000); // Change slide every 5 seconds
}

document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex); // Ensure the first slide is shown on page load
  autoSlides(); // Start auto-sliding
});
// - Slideshow










// Side nav
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,1)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
// - side nav














// Character container
function filterSelection(category) {
  // Get all filterable elements
  const elements = document.querySelectorAll('.filterDiv');

  // Show/hide elements based on the category
  elements.forEach(el => {
      if (category === 'all' || el.classList.contains(category)) {
          el.classList.add('show');
      } else {
          el.classList.remove('show');
      }
  });

  // Update the active button
  const buttons = document.querySelectorAll('#myBtnContainer .btn');
  buttons.forEach(btn => btn.classList.remove('active')); // Remove active from all
  event.currentTarget.classList.add('active'); // Add active to clicked button
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// - Character container














// Character selection
document.addEventListener("DOMContentLoaded1", () => {
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










// Tierlist char
document.addEventListener("DOMContentLoaded", () => {
    const characterButtons = [
        { name: "Bailu", tier: "a", description: "Role: Healer, Element: Lightning, Special: Increases healing power by 20%", img: "https://starrail.honeyhunterworld.com/img/character/bailu-character_wait_icon.webp?x49467" },
        { name: "Gallagher", tier: "b", description: "Role: Attacker, Element: Fire, Special: Increases crit damage by 30%", img: "https://starrail.honeyhunterworld.com/img/character/gallagher-character_wait_icon.webp?x49467" },
        { name: "Huohuo", tier: "c", description: "Role: Buffer, Element: Wind, Special: Increases attack power by 15%", img: "https://starrail.honeyhunterworld.com/img/character/huohuo-character_wait_icon.webp?x49467" },
        { name: "Luocha", tier: "d", description: "Role: Support, Element: Quantum, Special: Increases defense by 25%", img: "https://starrail.honeyhunterworld.com/img/character/luocha-character_wait_icon.webp?x49467" }
    ];

    // Function to populate the tierlist table with character buttons
    const tierA = document.getElementById("tier-a");
    const tierB = document.getElementById("tier-b");
    const tierC = document.getElementById("tier-c");
    const tierD = document.getElementById("tier-d");

    characterButtons.forEach(character => {
        const button = document.createElement("button");
        button.classList.add("character-btn");
        button.setAttribute("value", character.name);
        button.setAttribute("data-description", character.description);
        button.setAttribute("data-img", character.img);
        button.innerHTML = `<img src="${character.img}" alt="${character.name}">`;

        // Append the button to the correct tier column
        if (character.tier === "a") tierA.appendChild(button);
        if (character.tier === "b") tierB.appendChild(button);
        if (character.tier === "c") tierC.appendChild(button);
        if (character.tier === "d") tierD.appendChild(button);

        // Add event listener for character button clicks
        button.addEventListener("click", () => {
            const selectedCharacterName = button.value;
            const selectedCharacterDescription = button.getAttribute("data-description");
            const selectedCharacterImg = button.getAttribute("data-img");

            // Update the character information table
            document.getElementById("selected-character-info").innerHTML = `
                <tr>
                    <td colspan="2" style="text-align: center;">
                        <h3>${selectedCharacterName}</h3>
                        <img src="${selectedCharacterImg}" alt="${selectedCharacterName}" width="150" style="border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); margin-bottom: 10px;">
                        <p>${selectedCharacterDescription}</p>
                    </td>
                </tr>
            `;
        });
    });

    // Function to filter characters by tier type
    function filterTierList(tier) {
        const tierButtons = document.querySelectorAll(".character-btn");
        tierButtons.forEach(button => {
            const buttonTier = button.getAttribute("data-tier");

            if (tier === "all" || buttonTier === tier) {
                button.style.display = "inline-block";
            } else {
                button.style.display = "none";
            }
        });
    }

    // Make filterTierList available globally for the tierlist buttons
    window.filterTierList = filterTierList;
});
// - Tierlist char