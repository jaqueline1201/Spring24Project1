$(document).ready(function(){
    $.ajax({
        type: "GET",
        url:"/recipes",
        dataType:"json",
        success:function(data){
            console.log(data);
        }

    })
})
