$(document).ready(function(){
    $('.fa-envelope-square').click(function(){
        $("#mail-content").toggleClass('content');
    });
    

    $('.burger').click(function(){
        $('.list-container').toggleClass('active')
        $(this).toggleClass('toggle'); 
        $('body').toggleClass('ove');
    });

    $('.list-container a').click(function(){
        console.log('dadsa');
        $('.list-container').removeClass('active');
        $('.burger').removeClass('toggle');
    });
});
