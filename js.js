
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
// - Character selection





