export const elements = {
    searchForm: document.querySelector('.search'),                  /* The search form submit button */
    searchInput: document.querySelector('.search__field'),          /* The search form input field */
    searchResultsList: document.querySelector('.results__list'),    /* DOM render position for a new results item */
    resultsColumn: document.querySelector('.results'),              /* The whole left hand results column */
    resultsPagenation : document.querySelector('.results__pages'),  /* Where the results pagenation buttons go */
    resultsRecipe: document.querySelector('.results_link'),         /* Each individual recipe on LHS */
    resultsRecipeDetail: document.querySelector('.recipe'),          /* The recipe detail in the middle */
    resultsRecipeIngredients: document.querySelector('.recipe__ingredients')
};
const elementStrings = {
    loader: 'loader'    /* Class name for the loading spinner */
}
/*
Loading spinner (Used before the search results display and before the full recipe displays)
*/
export const renderSpinner = parentForSpinner => {
    const loaderHTML = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href = "img/icons.svg#icon-cw">
                </use>
            </svg>
        </div>
    `;
    parentForSpinner.insertAdjacentHTML('afterbegin', loaderHTML);
};
/*
Remove the spinner
*/
export const clearSpinner = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) { /* If the loader class is present i.e. the spinner is spinning */
        loader.parentElement.removeChild(loader)
    }
}