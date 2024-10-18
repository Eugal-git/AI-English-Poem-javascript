function generateRecipes(event) {
  event.preventDefault();

  new Typewriter("#recipes", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipesFormElement = document.querySelector("#recipes-generator-form");
recipesFormElement.addEventListener("submit", generateRecipes);
