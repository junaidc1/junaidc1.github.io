$(function(){

    $('.parts').on('click', function(){
        $(this).siblings().children('.barcode').hide();
        $(this).children('.barcode').toggle();
        $(this).siblings().removeClass('active');
        $(this).siblings().children().removeClass('neon');
        $(this).toggleClass('active');
        $(this).children().toggleClass('neon');
        
    });

});
