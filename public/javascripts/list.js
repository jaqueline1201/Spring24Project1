$(document).ready(function(){
    $.ajax({
        type: "GET",
        url:"/recipes",
        dataType:"json",
        success: function(data) {
            const recipes = data.recipeList;
            recipes.forEach(function(value,index) {
                console.log(value);
                $("#recipeContainer").append(`
                <li><a a href="#page4">${value.title}</a></li> 
                `);
            });
            
        }
    })
})
