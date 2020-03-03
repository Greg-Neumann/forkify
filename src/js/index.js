import searchAPI from "./models/Search";
import { elements, renderSpinner, clearSpinner} from "./views/base";              /* HTML DOM Elements */
import * as searchView from "./views/searchView";   

/*
Define a store for the global state of the app. This state will track:
* - The current search object
* - The current recipe object
* - The current shopping list object
* - The current Liked recipe object
*/
const state = {};
const controlSearch = async () => { /* Needs to be 'async' as there is an 'await' in this block */
    const query = searchView.getInput();
    if (query) {
        renderSpinner(elements.resultsColumn);
        /*
        If we actually have a query, then update the State for that query with the new instance of the Class
        */
       state.search = new searchAPI(query);
       /*
       Now do the asynchronous fetch 
       */
       await state.search.recipeAPIAW() // Do the query call
       clearSpinner();
       /*
       Now render the retrieved list from the State 
       */
        if (state.search.recipeList) {
            searchView.clearInput();
            searchView.clearResults();
            searchView.renderResults(state.search.recipeList);
        } 
    }
};
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault(); // stop the page re-loading upon pressing of the search submit button
    controlSearch();
})

