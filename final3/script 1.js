function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "BIO; Darwyn Cooke began his artistic carrer graphic design and animation, working on projects like  Batman The Animated Series, before moving to comic books and becoming one of the industires hottests artists before his tragic passing") {
    x.innerHTML = "Blurb; Cooke's style is the perfect blend of idealzied smoothness and realsitic roughness. His figuees are clear, swfit and defined yet you can feel theyre wight as they glide effotlessly form panel to panel ";
  } else {
    x.innerHTML = "BIO; Darwyn Cooke began his artistic carrer graphic design and animation, working on projects like  Batman The Animated Series, before moving to comic books and becoming one of the industires hottests artists before his tragic passing";
  }
}










window.onload = function() {
    let slideIndex = 1;
    showSlides(slideIndex);

   
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
};


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


