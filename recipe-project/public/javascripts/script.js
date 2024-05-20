const recipesInformation = [];

const recipe = function (rTitle,rType,rSource,rIngredients,rInstructions,rLink,rNotes) {
    this.title = rTitle;
    this.type = rType;
    this.source = rSource;
    this.ingredientes = rIngredients;
    this.instructions = rInstructions;
    this.link = rLink;
    this.notes = rNotes;
}

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

    return false;
    
}

function isTitleValid () {
    let recipeTitle = document.getElementById("recipeTitle").value;
    if (recipeTitle == "") {
        document.getElementById("recipeTitleError").innerHTML = "Title of the recipe is requiered!"
    } else {
        document.getElementById("recipeTitleError").innerHTML = ""
        return true;
    }
}

function isTypeOfFoodValid () {
    let typeOfFood = document.getElementById("typeOfFood").value;
    if (typeOfFood == "none") {
        document.getElementById("typeOfFoodError").innerHTML = "Please choose a type of Food!"
    } else {
        document.getElementById("typeOfFoodError").innerHTML = ""
        return true;
    }
}

//function of the fieldset goes here//

function isIngredientsValid () {
    let ingredients = document.getElementById("ingredients").value;
    if (ingredients == "") {
        document.getElementById("ingredientsError").innerHTML = "Don't forget to list your ingredients!"
    } else {
        document.getElementById("ingredientsError").innerHTML = ""
        return true;
    }
}

function isInstructionsValid () {
    let instructions = document.getElementById("instructions").value;
    if (instructions == "") {
        document.getElementById("instructionsError").innerHTML = ""
        return true;
    }
}

function save ()

function clearList () {
    let recipeForm = document.getElementById("recipeForm");
    movieList.innerHTML = "";
}
