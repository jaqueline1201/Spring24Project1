var express = require('express');
var router = express.Router();

const recipesCompilation = []


const Recipe = function (recipeTitle, typeOfFood, ingredients, instructions, url, sourceOption, notes) {

    this.title = recipeTitle;
    this.type = typeOfFood;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.source = sourceOption;
    this.link = url;
    this.notes = notes;
};

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        recipeList: recipesCompilation
    });
});

router.post('/', function(req, res, next) {

    const newRecipe = new Recipe (req.body.title, req.body.type, req.body.ingredients, req.body.instructions, req.body.link, req.body.source, req.body.notes);
    
    recipesCompilation.push(newRecipe);

    res.status(200).send({ 
        success: true, 
        recipenumber: recipesCompilation.length
    });
  });

module.exports = router;

