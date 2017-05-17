// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    $(".navbar").offset().top > 50 ? 
        $(".navbar-fixed-top").addClass("top-nav-collapse") :
        $(".navbar-fixed-top").removeClass("top-nav-collapse")
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var height 
        $anchor.attr('href') == '#page-top' ? height = 0 : height = $($anchor.attr('href')).offset().top;
        $('html, body').stop().animate({scrollTop: height}, 1600, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});


