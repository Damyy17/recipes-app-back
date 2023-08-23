const express = require('express')
const router = express.Router();

const recipeController = require('../controllers/recipeController')

router.get('/recipes', recipeController.getAllRecipes);

router.get('/recipes/:id', recipeController.getRecipeById);

router.post('/recipes', recipeController.addNewRecipe)

router.delete('/recipes/:id', recipeController.deleteRecipe)

module.exports = router