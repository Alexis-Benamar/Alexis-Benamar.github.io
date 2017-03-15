$(document).ready(function() {

    $(".button-collapse").sideNav({
        closeOnClick: true,
        draggable: true
    });
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    $(document).on('click', 'a', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000, "easeInOutQuad");
    });

});
