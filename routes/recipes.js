var express = require('express');
var router = express.Router();

let recipesCompilation = []

const Recipe = function (recipeTitle, typeOfFood, ingredients, instructions, url, sourceOption, notes) {

    this.title = recipeTitle;
    this.type = typeOfFood;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.source = sourceOption;
    this.link = url;
    this.notes = notes;
};
var fs = require("fs");

let fileManager  = {
  read: function() {
    var rawdata = fs.readFileSync('objectdata.json');
    let goodData = JSON.parse(rawdata);
    recipesCompilation = goodData;
  },

  write: function() {
    let data = JSON.stringify(recipesCompilation);
    fs.writeFileSync('objectdata.json', data);
  },

  validData: function() {
    var rawdata = fs.readFileSync('objectdata.json');
    console.log(rawdata.length);
    if(rawdata.length < 1) {
      return false;
    }
    else {
      return true;
    }
  }
};

if (!fileManager.validData()) {
    recipesCompilation.push(new Recipe("Paloma Cocktail","7",['Tequila','Grapefruit juice','Club soda','Lime juice','Agave nectar','Salt','Ice'], ['Rub the rim of a highball glass or margarita glass with a grapefruit wedge, and dip it in a small plate of salt.','Add the tequila, grapefruit juice, sparkling water, lime juice, and sweetener to the glass, stir to combine, and add ice to fill the glass.','Sweeten to taste, and garnish with a grapefruit or lime wedge. Enjoy!'],"https://www.loveandlemons.com/paloma/","For more tartness, squeeze in extra lime."))
    fileManager.write();
} else {
    fileManager.read(); 
}


/* GET users listing. */
router.delete('/:index', function(req, res, next) {
    const deleteIndex = req.params.index;
    let recipeQuantity = recipesCompilation.length;
    if(deleteIndex > recipeQuantity){
        res.status(400).send()
    }else {
        recipesCompilation.splice(deleteIndex,1)
        res.status(200).send({
            success:true
        })
    }
});

router.get('/', function(req, res, next) {
    res.send({
        recipeList: recipesCompilation
    });
    fileManager.read()
});

router.post('/', function(req, res, next) {

    const newRecipe = new Recipe (req.body.title, req.body.type, req.body.ingredients, req.body.instructions, req.body.link, req.body.source, req.body.notes);
    
    recipesCompilation.push(newRecipe);

    res.status(200).send({ 
        success: true, 
        recipenumber: recipesCompilation.length
        
    });
    fileManager.write()
  });

module.exports = router;

