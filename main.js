$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleclass('fa-times');
        $('.navbar').toggleclass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeclass('fa-times');
        $('.navbar').removeclass('nav-toggle');

        if($(window).scrollTop()>30){
            $('header').addclass('header-active');
        }else{
            $('header').removeclass('header-active');

        }
    });

})






