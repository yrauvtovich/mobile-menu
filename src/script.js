$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('triggered');
    });

    $('.has-children > a').after('<span></span>');
    $('.has-children span').on('click', function() {
        $(this).toggleClass('subtriggered');
    });
});

