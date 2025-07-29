let header = document.querySelector(".header");
let headerHover = document.querySelector(".headerHover");

let secondArea = document.querySelector(".second-area");
let secHeader = document.querySelector(".Sec-area-header");


headerHover.addEventListener("mouseenter", () => {
    header.style.top = '0%';
    headerHover.style.width = '1%';
    headerHover.style.left = '-15%';
    console.log('hovered');
});

header.addEventListener("mouseleave", () => {
    header.style.top = '-100%';
    headerHover.style.left = '0%';
    headerHover.style.width = '100%';
    console.log('unhovered');
});


// second area

window.addEventListener("scroll", () => {
    let secondAreaTop = secondArea.getBoundingClientRect().top;

    // If secondArea reaches top of the viewport
    if (secondAreaTop <= 0) {
        secHeader.style.left = '0';
    } else {
        secHeader.style.left = '100%'; // hide it again when scrolling up
    }
});

const seventhArea = document.querySelector(".seventh-area");

// Create an Intersection Observer to watch seventh-area
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // When seventh-area is at least 20% visible
        secHeader.style.left = "100%"; // Move back to default hidden position
        console.log("Seventh-area visible, Sec-area-header returned.");
      }
    });
  },
  { threshold: 0.2 } // Trigger when 20% visible
);

// Observe the seventh-area
observer.observe(seventhArea);

