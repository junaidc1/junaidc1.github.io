$(function(){

    $('li').on('click', function(){
        $(this).siblings().children('.barcode').hide();
        $(this).children('.barcode').toggle();
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
        
    });

});

var captionLength = 0;
var caption = '';

$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('.barcode');
    
    $('#test-typing').click(function(){
        testTypingEffect();
    });

    $('#test-erasing').click(function(){
        testErasingEffect();
    });
});

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}

