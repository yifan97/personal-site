$(document).ready(function(){
    $('.fa-envelope-square').click(function(){
        $("#mail-content").toggleClass('content');
    });
    
    $('.nav-toggle').click(function(){
        $('.ham-wrapper').addClass('ham-content');
        $('.ham-wrapper').addClass('open');
        $('.wrapper').addClass('out');
    });

    $('.close-tab').click(function(){
        $('.ham-wrapper').removeClass('open');
        $('.wrapper').removeClass('out');
    });

    $('[data-fancybox="gallery"]').fancybox({
        // Options will go here
    });

    // add smmoth scrolling when click to different section
    $('.all-nav a').click(function(){ 
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 160
            }, 400);
        return false;
    });

});
