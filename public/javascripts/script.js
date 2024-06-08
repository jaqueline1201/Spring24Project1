//START OF THE ADD NEW RECIPE PAGE//
function validateAndSaveForm (event) {
    
    event.preventDefault();
    reset();
    const recipeTitle = $("#recipeTitle").val();
    const typeOfFood = $("#typeOfFood").val();
    const ingredients = [];
    const instructions = $("#instructions").val();
    const url = $("#source").val();
    const choiceOnline =$("#choice1").val();
    const choicePersonal = $("#choice2").val();
    const notes = $("#notes").val();
    let isValid = true;
    
    
    $('[name="ingredient[]"]').each(function() {
        let valueIngredient = $(this).val()

        if(!valueIngredient){

            $("#ingredientsError").html("Ingredients are important, you must write them!")
            $(this).css("border","2px solid red") 
            isValid = false;
        }else {
            ingredients.push(valueIngredient)
        }

        
    });
    
    if(!recipeTitle) {
        $("#recipeTitleError").html("It is important to write the title!")
    }
    
    if(!typeOfFood) {
        $("#typeOfFoodError").html("Don't forget to chose a category!")
        
    } 
    
    
    
    if(!instructions){
        $("#instructionsError").html("Please write your instructions!")
        $("#instructions").css("border","2px solid red") 
    }



    return false;
}

function reset (){
    $("#recipeForm")[0].reset();
    $(".errorMessage").html(""); 
    $(".border").css("border",".05px solid black");  
}
$(document).ready(function(){
    let ingredientsCounter = 1;
    let instructionsCounter = 1;
    $("#recipeForm").on("submit", validateAndSaveForm)
    $("#clearForm").click(reset);
    $("#choice2").click(function(){
        $("#sourceURL").hide();
    });
    $("#choice1").click(function(){
        $("#sourceURL").show();
    });
    $("#newIngredient").click(function(){
        ingredientsCounter++;
        $("#ingredientsList").append(`
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset" id="containerIngredient${ingredientsCounter}">
                <input type="text" name="ingredient[]" class="nextIngredient border" id="ingredient${ingredientsCounter}">
            </div>
        `);
    });
    $("#newStep").click(function(){
        instructionsCounter++;
        $("#instructionsList").append(`
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset" id="containerInstructions${instructionsCounter}">
            <input type="text" name="newStep" class="nextStep" id="instructions${instructionsCounter}">
        </div>
        `);
    });
    $("#deleteIngredient").click(function(){     
        $(`#containerIngredient${ingredientsCounter}`).remove();
        ingredientsCounter--;
    });
    $("#deleteStep").click(function(){
        $(`#containerInstructions${instructionsCounter}`).remove();
        instructionsCounter--;
    });

  });
//END OF THE ADD NEW RECIPE PAGE//


const recipesInformation = [];

const recipeObject = function (rTitle,rType,rSource,rIngredients,rInstructions,rLink,rNotes) {
    this.title = rTitle;
    this.type = rType;
    this.source = rSource;
    this.ingredientes = rIngredients;
    this.instructions = rInstructions;
    this.link = rLink;
    this.notes = rNotes;
};



// function addRecipe () {
//     let isValid = true;

//     if (!isTitleValid()) {
//         isValid = false;
//     }
//     if (!isTypeOfFoodValid ()) {
//         isValid = false;
//     }
//     if (!isIngredientsValid()) {
//         isValid = false;
//     }
//     if (!isInstructionsValid()) {
//         isValid = false;
//     }

//     return isValid;
    
// }

// function isTitleValid () {
//     let recipeTitle = document.getElementById("recipeTitle").value;
//     if (recipeTitle === "") {
//         document.getElementById("recipeTitleError").innerHTML = "Title of the recipe is requiered!"
        
//         return false;
//     }
//         document.getElementById("recipeTitleError").innerHTML = ""
        
//         return true;
// }

// function isTypeOfFoodValid () {
//     let typeOfFood = document.getElementById("typeOfFood").value;
//     if (typeOfFood === "none") {
//         document.getElementById("typeOfFoodError").innerHTML = "Please choose a type of Food!"

//         return false;
//     } 
//         document.getElementById("typeOfFoodError").innerHTML = ""
        
//         return true;
// }

// function isIngredientsValid () {
//     let ingredients = document.getElementById("ingredients").value;
//     if (ingredients === "") {
//         document.getElementById("ingredientsError").innerHTML = "Don't forget to list your ingredients!"

//         return false;
//     } 
//         document.getElementById("ingredientsError").innerHTML = ""

//         return true;
//     }

// function isInstructionsValid () {
//     let instructions = document.getElementById("instructions").value;
//     if (instructions === "") {
//         document.getElementById("instructionsError").innerHTML = "Don't forget the instructions!"

//         return false;
//     }
//         document.getElementById("instructionsError").innerHTML =""

//         return true;
//     }

// function isURLneeded () {
//     let defaultBtn = document.getElementById("choice2");
//     defaultBtn.checked = true;

    // if(defaultBtn === false) {
    //     let appearURL 
    // }


// function clearList () {
//     let recipeForm = document.getElementById("recipeForm");
//     recipeForm.innerHTML = "";
// }
