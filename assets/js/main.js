$(document).ready(function(){
    $('.fa-envelope-square').click(function(){
        $("#mail-content").toggleClass('content');
    });

    $('.fa-bars').click(function(){
        $('.wrapper').addClass('wrap-content');
        $('.ham-wrapper').addClass('ham-content');

    });

    $('.close-tab').click(function(){
        $('.wrapper').removeClass('wrap-content');
        $('.ham-wrapper').removeClass('ham-content');
    });
});
