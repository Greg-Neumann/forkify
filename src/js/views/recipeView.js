import { elements } from './base';              /* HTML DOM Elements */
const renderRecipeHeader = recipe => {
    const markUpHeader = `
    <figure class="recipe__fig">
    <img src="${recipe.img_url}" alt="${recipe.title}" class="recipe__img">
    <h1 class="recipe__title">
        <span>"${recipe.title}"</span>
    </h1>
    </figure>
    <div class="recipe__details">
    <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="img/icons.svg#icon-stopwatch"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">"${recipe.cookingTime}"</span>
        <span class="recipe__info-text"> minutes</span>
    </div>
    <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="img/icons.svg#icon-man"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">"${recipe.servings}"</span>
        <span class="recipe__info-text"> servings</span>

        <div class="recipe__info-buttons">
            <button class="btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-minus"></use>
                </svg>
            </button>
            <button class="btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-plus"></use>
                </svg>
            </button>
        </div>

    </div>
    <button class="recipe__love">
        <svg class="header__likes">
            <use href="img/icons.svg#icon-heart-outlined"></use>
        </svg>
    </button>
    </div>
    `;
    elements.resultsRecipeDetail.insertAdjacentHTML('beforeend', markUpHeader); 
};
const renderRecipeIngredients = ingredients => {
    const markUpIngredientsHeader = 
    `<div class="recipe__ingredients">
        <ul class="recipe__ingredient-list">
    `;
    elements.resultsRecipeDetail.insertAdjacentHTML('beforeend',markUpIngredientsHeader)
    ingredients.forEach(element => {
        const markUpIngredientsBody = `
        <li class="recipe__item">
            <svg class="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">1000</div>
            <div class="recipe__ingredient">
                <span class="recipe__unit">g</span>
                "${element}"
            </div>
        </li>
        `;
        elements.resultsRecipeDetail.insertAdjacentHTML('beforeend',markUpIngredientsBody);
    });
    const markUpIngredientsTrailer = `</ul></div>`;
    elements.resultsRecipeDetail.insertAdjacentHTML('beforeend',markUpIngredientsTrailer);

}
export const renderRecipeDetail = recipe => {
    renderRecipeHeader(recipe);
    renderRecipeIngredients(recipe.ingredients);
};