var express = require('express');
var router = express.Router();

const recipesCompilation = []

const Recipe = function (recipeTitle, typeOfFood, ingredients, instructions, url, sourceOption, notes) {

    this.title = recipeTitle;
    this.type = typeOfFood;
    this.ingredientes = ingredients;
    this.instructions = instructions;
    this.source = url;
    this.link = sourceOption;
    this.notes = notes;
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {


    res.status(200).send(req.body)
    
  });

module.exports = router;

