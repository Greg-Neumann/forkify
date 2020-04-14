/*
Define a class to both search for a query and return the results. Export this
for use in the controller module.
*/
export default class Search {
    constructor (query) {
        //console.log(`Initialising Class Search with string ${query}`)
        this.query = query;
    };
    /*
    Define an asynchronous method of the class to retrieve any recipes for the query
    */
    async recipeAPIAW() {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
        if (res.ok) {
            const list = await res.json(); // add the list to a property on the Class
            this.recipeList = list.recipes;
            //console.log(this.recipeList)
        } else {
            console.info('Recipe not found')
        }
    };
}

