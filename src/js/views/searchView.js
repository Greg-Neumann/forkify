import { elements } from './base';              /* HTML DOM Elements */
/*
Utility function to retrieve the input search text from the input form on the DOM
*/
export const getInput = () => elements.searchInput.value;
/* 
Utility function to clear the input search text
*/
export const clearInput = () => {
    elements.searchInput.value = ''
};
/* 
Utility function to clear the previously rendered results
*/
export const clearResults = () => {
    elements.searchResultsList.innerHTML = ''; /* you clear rendered HTML !*/
};
/*
Utility function, used just within this module, to render the current recipe into the DOM
*/
const renderRecipe = recipe => {
    const markUP = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>`;
    elements.searchResultsList.insertAdjacentHTML('beforeend', markUP); /* Add new results to end of list */
};
/*
Utility function to render the current search results to the DOM
*/
export const renderResults = recipeList => recipeList.forEach(renderRecipe);

