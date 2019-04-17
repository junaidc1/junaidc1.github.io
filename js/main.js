$(function(){

    $('.parts').on('click', function(){
        $(this).siblings().children('.barcode').hide();
        $(this).children('.barcode').toggle();
        $(this).siblings().removeClass('active');
        $(this).siblings().children().removeClass('neon');
        $(this).toggleClass('active');
        $(this).children().toggleClass('neon');
    });

    $('#partsProcessor').on('click', function(){
    
        if($(this).hasClass("active")){
            $('.descriptionColumn').children().hide();
            $('#descriptionProcessor').toggle();
        } else {
            $('.descriptionColumn').children().hide();
        }

    });

    $('#partsRAM').on('click', function(){

        if($(this).hasClass("active")){
            $('.descriptionColumn').children().hide();
            $('#descriptionRAM').toggle();
        } else {
            $('.descriptionColumn').children().hide();
        }
    });

});
