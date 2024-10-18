function generateRecipes(event) {
  event.preventDefault();

  new Typewriter("#recipes", {
    strings: "18 Baked Pasta Recipes You Can Make in Your 9x13 Dish",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipesFormElement = document.querySelector("#recipes-generator-form");
recipesFormElement.addEventListener("submit", generateRecipes);
