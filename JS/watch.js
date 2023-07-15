$(document).ready(function(){

    $('.reply-icon').click(function(){
        $(this).parents('div.row').next('div.card').toggle();
    });
});