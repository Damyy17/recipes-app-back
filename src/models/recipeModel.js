class Recipe {
    constructor(id, title, description, ingredients, instructions){
        this.id = id;
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }

    static validate(recipeData) {
        if(!recipeData.title || !recipeData.description || !recipeData.ingredients || !recipeData.instructions){
            throw new Error('Recipe missing some data!')
        }
        if (!Array.isArray(recipeData.ingredients)) {
            throw new Error('Ingredients must be an array.')
        }
    }
}

module.exports = Recipe;