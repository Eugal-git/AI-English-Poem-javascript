function generateClassicSongs(event) {
  event.preventDefault();

  new Typewriter("#song", {
    strings: "Mamma Mia",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", generateSong);
