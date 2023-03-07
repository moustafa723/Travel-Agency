// Add smooth scrolling to all links
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
    );
});

// Add sticky header
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});

// Add slideshow to hero section
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
