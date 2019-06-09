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

});
