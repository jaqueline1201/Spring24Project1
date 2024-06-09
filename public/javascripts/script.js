//START OF THE ADD NEW RECIPE PAGE//
function validateAndSaveForm (event) {
    event.preventDefault();

    reset(false);

    const recipeTitle = $("#recipeTitle").val();
    const typeOfFood = $("#typeOfFood").val();
    const ingredients = [];
    const instructions = []; 
    const url = $("#source").val();
    const sourceOption = $('input[name=choice]:checked', '#recipeForm').val();
    const notes = $("#notes").val();
    let isValid = true;

    const Recipe = function (recipeTitle, typeOfFood, ingredients, instructions, url, sourceOption, notes) {

        this.title = recipeTitle;
        this.type = typeOfFood;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.source = sourceOption;
        this.link = url;
        this.notes = notes;
    };

    $('[name="ingredient[]"]').each(function() {
        let valueIngredient = $(this).val()

        if (!valueIngredient) {
            $("#ingredientsError").html("Ingredients are important, you must write them!");
            $(this).css("border","2px solid red") 
            isValid = false;
        } else {
            ingredients.push(valueIngredient)
        }
    });

    $('[name="newStep[]"]').each(function() {
        let valueInstruction = $(this).val()

        if(!valueInstruction) {
            $("#instructionsError").html("Don't forget to write the instructions!");
            $(this).css("border","2px solid red")
            isValid = false;
        } else {
            instructions.push(valueInstruction)
        }
    });
    
    if(!recipeTitle) {
        $("#recipeTitleError").html("It is important to write the title!")
        $("#recipeTitle").css("border", "2px solid red")
        isValid = false
    } 
    
    if(!typeOfFood) {
        $("#typeOfFoodError").html("Don't forget to chose a category!")
        $("#typeOfFood-button").css("border", "2px solid red")
        isValid = false;
    } 

    if(sourceOption === "online") {
        if(!url) {
            $("#urlError").html("The URL of the recipe is required")
            $("#source").css("border", "2px solid red")
            isValid = false;
        }
    }
    
    if(isValid){

        const recipeInformation = new Recipe (recipeTitle, typeOfFood, ingredients, instructions, url, sourceOption, notes);

        const data = JSON.stringify(recipeInformation);
            $.ajax({
                type:"POST",
                url:"/recipes",
                data:data, 
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success:function(){
                    alert('Your recipe was saved succesfully!')
                },
                error:function(data){
                    alert('Something went wrong!')
                }
            });

    }
    return false;

}

function reset (deleteValues){ 
    if (deleteValues) {
        $("#recipeForm")[0].reset();
    }
    
    $(".errorMessage").html(""); 
    $(".border").css("border",".05px solid black");  
    $("#typeOfFood-button").css("border", ".05px solid black")
}
$(document).ready(function(){
    let ingredientsCounter = 1;
    let instructionsCounter = 1;

    $("#recipeForm").on("submit", validateAndSaveForm);
    $("#clearForm").click(function () { reset(true); });
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
            <input type="text" name="newStep[]" class="nextStep border" id="instructions${instructionsCounter}">
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



