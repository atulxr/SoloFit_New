var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    var prevPreview = document.querySelector(".prev-preview");
    var nextPreview = document.querySelector(".next-preview");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    // Show preview images
    if (slideIndex === 1) {
        prevPreview.style.display = "none";
        nextPreview.style.display = "block";
    } else if (slideIndex === slides.length) {
        prevPreview.style.display = "block";
        nextPreview.style.display = "none";
    } else {
        prevPreview.style.display = "block";
        nextPreview.style.display = "block";
    }
}