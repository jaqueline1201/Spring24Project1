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

if(!fileManager.validData()){
    recipesCompilation.push(new Recipe("Aguachile","2",["limon"], ["cortar"],"url","notes"))
    fileManager.write();
}else {
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

