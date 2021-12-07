const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

function createListOfIngredients(array) {
  const fragment = document.createDocumentFragment();
  for (let i=0; i < array.length; i += 1){
    const tagsIngredients = document.createElement("li");
    tagsIngredients.textContent = array[i];
    tagsIngredients.classList.add("item");
    fragment.append(tagsIngredients);
  }
  ingredientsList.append(fragment);
}

createListOfIngredients(ingredients);