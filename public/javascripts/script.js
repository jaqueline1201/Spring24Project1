function validateAndSaveForm () {

    $(".errorMessage").html("") 
    console.log("submit")
        
    const recipeTitle = $("#recipeTitle").val();
    if(!recipeTitle) {
        $("#recipeTitleError").html("error")
        $("#recipeTitle").css("border","2px solid red")
    }
    const typeOfFood = $("#typeOfFood").val();
    console.log($("#typeOfFood").val());
    if(!typeOfFood) {
        $("#typeOfFoodError").html("error") 
    } 
    const ingredients = $("#")
    
        

    return false;
}

$(document).ready(function(){
    $("#recipeForm").on("submit", validateAndSaveForm)
    
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

function clearList () {
    let recipeForm = document.getElementById("recipeForm");
    recipeForm.innerHTML = "";
}
