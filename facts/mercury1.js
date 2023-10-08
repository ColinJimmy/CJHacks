const paragraphs = [
    "Mercury has no moons",
    "On Mercury a day is twice as long as a year",
    "Sunlight is 11 times brighter on Mercury",
    "A year on Mercury is 88 Earth days",
    "Mercury orbits closest to the Sun.",
]; // Add your paragraph texts here

let currentIndex = 0;

function changeContent() {
   // document.getElementById("image").src = images[currentIndex];
    document.getElementById("paragraph").textContent = paragraphs[currentIndex];
    currentIndex = (currentIndex + 1) % paragraphs.length;
}

// Call the changeContent function every 5 seconds
setInterval(changeContent, 5000);

// Initial call to display the first content
changeContent();