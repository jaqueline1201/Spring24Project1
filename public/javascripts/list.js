$(document).ready(function(){
    $(".listLink").click(function(){
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
                let index = $(this).attr('id');
                console.log($(this).attr('id'))
                $("#recipeInformation").html(`
                <div><h3 class="listTitle">${recipes[index].title}</h3></div>
                <div class= "titleSection">Ingredients:</div>
                <div><ul>${recipes[index].ingredients}</ul></div>
                <div>Instructions:</div>
                <div><ul>${recipes[index].instructions}</ul></div>
                <div><p>${recipes[index].link}</p></div>
                `)
            })
            }
        })
    })
})
