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
Utility function, used within this module, to keep the recipe title as whole words on one line
By Default, the character limit is set to 17.
*/
const limitRecipeTitle = (title, charLimit = 17) => {
    /* 
    We're going to build the new title up char-by-char until whole words do not exceed the limit 
    */
    const newTitle = []; 
    if(title.length > charLimit) {
        title.split(' ').reduce((currentTitleLength,word)=> {
            if(currentTitleLength + word.length <= charLimit) {
                /*
                The current count, plus this word, is less than the line-limit
                */
               newTitle.push(word);
            }
            return currentTitleLength + word.length /* Advance to end of included word */
        },0); /* start the reduce with currentTitleLength = 0 */
        return `${newTitle.join(' ')} ...`
    } else {
        return title
    }
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
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
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

