$(document).ready(function(){
    let index;
    function render(){
        $("#recipeContainer").html("");
        $.ajax({
            type: "GET",
            url:"/recipes",
            dataType:"json",
            success: function(data) {
                const recipes = data.recipeList;
                recipes.forEach(function(value,index) {
                    console.log(value);
                    
                    $("#recipeContainer").append(`
                    <li><a href="#page4" id="${index}" class="recipeLink">${value.title}</a></li> 
                    `);
                });
                $(".recipeLink").click(function(){
                    index = $(this).attr('id');
                    console.log($(this).attr('id'))
                    console.log(recipes[index].ingredients)
                    let ingredientsElements = "";
                    let instructionsElements = "";

                    recipes[index].ingredients.forEach(function(value){
                        let ingredientsValue = `<li>${value}</li>`

                        ingredientsElements = `${ingredientsElements} ${ingredientsValue}`;
                    });

                    recipes[index].instructions.forEach(function(value){
                        let instructionsValue = `<li>${value}</li>`

                        instructionsElements = `${instructionsElements} ${instructionsValue}`;
                    })
                    
                    $("#recipeInformation").html(`
                    <div><h3 class="listTitle">${recipes[index].title}</h3></div>
                    <div class= "titleSection">Ingredients:</div>
                    <div><ul>${ingredientsElements}</ul></div>
                    <div>Instructions:</div>
                    <div><ul>${instructionsElements}</ul></div>
                    <div><p>${recipes[index].link}</p></div>
                    `)
                    })
                }
            })
    }

    $(".listLink").click(function(){
        render()
    });

    $("#deleteRecipe").click(function(){
            $.ajax({
                type:"DELETE",
                url:"/recipes/" + index,
                success:function(data){
                    alert ('Your receipt has been deleted successfully!')
                    location.replace("#page3")
                    render();
                },
                error:function(data){
                    alert('Your recipe was not deleted! :(')
                }
            })
    });    
})
