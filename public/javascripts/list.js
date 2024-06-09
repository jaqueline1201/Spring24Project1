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
                <li><a href="#page4" id="${index}" class="recipeLink">${value.title}</a></li> 
                `);
            });
            $(".recipeLink").click(function(){
                let index = $(this).attr('id');
                console.log($(this).attr('id'))
                $("#recipeInformation").html(`
                <li>${recipes[index].title}</li>
                `)
            })
            
        }
    })
    
})
