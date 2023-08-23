const Recipe = require('../models/recipeModel')

let recipes = [
    new Recipe(1, 'Pasta Carbonara', 'Best pasta ever',['pasta', 'eggs', 'bacon', 'cheese'], 'Instructions for Pasta Carbonara.')
]

exports.getAllRecipes = (req, res) => {
    res.json(recipes);
};

exports.getRecipeById = (req, res) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipes.find((r) => r.id === recipeId);

    if(!recipe) {
        return res.status(404).json({
            message: 'Recipe not found'
        });
    }
    
    res.json(recipe);
}

exports.addNewRecipe = (req, res) => {
    try {
        Recipe.validate(req.body);

        const newRecipe = new Recipe(
            recipes.length + 1,
            req.body.title,
            req.body.description,
            req.body.ingredients,
            req.body.instructions
        );

        recipes.push(newRecipe);

        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    };
}

exports.deleteRecipe = (req, res) => {
    const recipeId = parseInt(req.params.id);
    recipes = recipes.filter(recipe => recipe.id != recipeId)

    if(!recipe) {
        return res.status(404).json({
            message: 'Recipe not found'
        });
    } else {
        return res.json({
            message: 'Recipe suscessful deleted!'
        })
    }
}