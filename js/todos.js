//Check Off Specific Todos by clicking

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});


//Click on X to delete the todo

$("ul").on("click","span",function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ todoText + "</li>");
    }
   
})

$(".fa-plus").on("click", function(){
    $("#newtodo").fadeToggle();
})