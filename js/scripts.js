$('.owl-carousel').owlCarousel({
    responsiveClass:true,
    loop:true,
    items:1,
})
$(document).ready(function(){
    $("#bs-example-navbar-collapse-1").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var button = $('#button-up');
    $(window).scroll (function () {
        if ($(this).scrollTop () > 300) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
    button.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });

});

