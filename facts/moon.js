const paragraphs = [
    "The Apollo astronauts footprints on the moon will probably stay there for at least 100 million years",
    "The Moon is shaped like a lemon",
    "On Mercury a day is twice as long as a year",
    "The largest asteroid in our solar system is a mammoth piece of space rock named Ceres",
    "Black holes have theoretical opposites known as white holes"
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