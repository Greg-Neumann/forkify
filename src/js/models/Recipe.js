export default class Recipe {
    constructor (id) {
        this.id = id;
        this.title = "";
        this.author = "";
        this.source_url = "";
        this.img_url = "";
        this.ingredients = [];
    }

    async getRecipeAW() {
        //
        // You MUST AWAIT this method call when you use it 😄
        //
        const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
        if (res.ok) {
            const list = await res.json(); // add the list to a property on the Class
            this.title = list.recipe.title;
            this.author = list.recipe.publisher;
            this.source_url = list.recipe.source_url;
            this.img_url = list.recipe.image_url;
            //
            //ToDO: Ingredients list needs parsing such that, if it starts with a number,
            //then, that is extracted as a quantity property. Immediately following that
            //quantity (if present), is the units 
            // e.g. 4 Tablespoons Butter
            // 1/2 whole Medium Onion, Finely Diced
            // 1/2 cup White Wine
            // The api does NOT provide any cooking instructions
            //
            this.ingredients = list.recipe.ingredients;
        }
        else {
            console.error("Recipe details not found");
        }
    }
    /*
    * A method to calculate the cooking time. For every 3 ingredients, you need 15 minutes!
    */
   calcTime() {
       this.cookingTime = Math.ceil(this.ingredients.length / 3) * 15;
   }
   calcServings() {
       this.servings = 4;
   }
}