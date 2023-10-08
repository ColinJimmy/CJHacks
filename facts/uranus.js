const paragraphs = [
    "Uranus Moons are named after Shakespeare characters",
    "Uranus is the only planet not named after a Roman God",
    "The discoverer of Uranus wanted it to be called Georgium Sidus",
    "You could fit 63 Earths inside Uranus",
    "It was the first planet to be discovered through a telescope"
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