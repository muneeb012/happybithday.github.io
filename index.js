function opens() {
    // Get references to the box and gifts elements
    let a = document.getElementById("box");
    let b = document.getElementById("gifts");

    // Hide the box and display the gifts
    a.style.display = "none";
    b.style.display = "flex";

    // Create an audio element and set its source
    const audio = new Audio("music.mp3"); // Replace "audio.mp3" with your audio file path

    // Play the audio
    audio.play();
}
