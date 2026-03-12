function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "BIO; Alex Ross was the son of a fashion illatratior so from a young age he was constanly surrounded by materials of all sorts and watch his mother draw realistaclly preportions figures to insure the cloths would indeed fit. He brought these skills i the world of superheores through his paintings which take great care to show each and every texture of these larger than life heroes.") {
    x.innerHTML = "Blurb; Ross's artwork while ultra realsitc still expertly portays these larger than life characters with the gravitaus and awe which they deserve. He expertly potrays how superheores are the perfect middle ground of human and myth.";} else {
    x.innerHTML = "BIO; Alex Ross was the son of a fashion illatratior so from a young age he was constanly surrounded by materials of all sorts and watch his mother draw realistaclly preportions figures to insure the cloths would indeed fit. He brought these skills i the world of superheores through his paintings which take great care to show each and every texture of these larger than life heroes.";
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


