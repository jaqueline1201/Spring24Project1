function validateAndSaveForm () {
        
    const recipeTitle = $("#recipeTitle").val();
    if(!recipeTitle) {
        $("#recipeTitleError").html("It is important to write the title!")
    }
    const typeOfFood = $("#typeOfFood").val();
    if(!typeOfFood) {
        $("#typeOfFoodError").html("Don't forget to chose a category!")
        
    } 
    const ingredients = $("#ingredients").val();
    if(!ingredients){
        $("#ingredientsError").html("Ingredients are important, you must write them!")
        $("#ingredients").css("border","2px solid red") 
    }
    const instructions = $("#instructions").val();
    if(!instructions){
        $("#instructionsError").html("Please write your instructions!")
        $("#instructions").css("border","2px solid red") 
    }

    return false;
}

$(document).ready(function(){
    $("#recipeForm").on("submit", validateAndSaveForm)
    $("#clearForm").click(function(){
        $("#recipeForm")[0].reset();
        $(".errorMessage").html(""); 
        $(".border").css("border",".05px solid black");
      });
    $("#choice2").click(function(){
        $("#sourceURL").hide();
    });
    $("#choice1").click(function(){
        $("#sourceURL").show();
    });
    $("#newIngredient").click(function(){
        $("#ingredientsList").append('<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input type="text" name="ingredient" class="nextIngredient"></div>');
    });
    $("#newStep").click(function(){
        $("#instructionsList").append('<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input type="text" name="newStep" class="nextStep"></div>')
    });
    $("#deleteIngredient").click(function(){

    })
  });



//old//
const recipesInformation = [];

const recipe = function (rTitle,rType,rSource,rIngredients,rInstructions,rLink,rNotes) {
    this.title = rTitle;
    this.type = rType;
    this.source = rSource;
    this.ingredientes = rIngredients;
    this.instructions = rInstructions;
    this.link = rLink;
    this.notes = rNotes;
};

function addRecipe () {
    let isValid = true;

    if (!isTitleValid()) {
        isValid = false;
    }
    if (!isTypeOfFoodValid ()) {
        isValid = false;
    }
    if (!isIngredientsValid()) {
        isValid = false;
    }
    if (!isInstructionsValid()) {
        isValid = false;
    }

    return isValid;
    
}

function isTitleValid () {
    let recipeTitle = document.getElementById("recipeTitle").value;
    if (recipeTitle === "") {
        document.getElementById("recipeTitleError").innerHTML = "Title of the recipe is requiered!"
        
        return false;
    }
        document.getElementById("recipeTitleError").innerHTML = ""
        
        return true;
}

function isTypeOfFoodValid () {
    let typeOfFood = document.getElementById("typeOfFood").value;
    if (typeOfFood === "none") {
        document.getElementById("typeOfFoodError").innerHTML = "Please choose a type of Food!"

        return false;
    } 
        document.getElementById("typeOfFoodError").innerHTML = ""
        
        return true;
}

function isIngredientsValid () {
    let ingredients = document.getElementById("ingredients").value;
    if (ingredients === "") {
        document.getElementById("ingredientsError").innerHTML = "Don't forget to list your ingredients!"

        return false;
    } 
        document.getElementById("ingredientsError").innerHTML = ""

        return true;
    }

function isInstructionsValid () {
    let instructions = document.getElementById("instructions").value;
    if (instructions === "") {
        document.getElementById("instructionsError").innerHTML = "Don't forget the instructions!"

        return false;
    }
        document.getElementById("instructionsError").innerHTML =""

        return true;
    }

function isURLneeded () {
    let defaultBtn = document.getElementById("choice2");
    defaultBtn.checked = true;

    // if(defaultBtn === false) {
    //     let appearURL 
    // }
}

// function clearList () {
//     let recipeForm = document.getElementById("recipeForm");
//     recipeForm.innerHTML = "";
// }
