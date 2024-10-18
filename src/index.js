function generateRecipes(event) {
  event.preventDefault();

  new Typewriter("#recipes", {
    strings: "pizza recipes",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipesFormElement = document.querySelector("#recipes-generator-form");
recipesFormElement.addEventListener("submit", generateRecipes);
