function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "BIO; Mike Allred fell in love with comics at an early age. With encouragement from his wife and collaberator Laura Allred, Mike Allred published Graphik Muzik. THis books featured the first apperance of Frank Einstein, who would evntually evolve into the superhero Madman who is still a prominent fixutre in the inide comic scene")
     {
    x.innerHTML = "Blurb; Allred's style belnds popart with realsim. His art encapsulates all that is wonderful with the silverage while mixing it seamlessly with modern sencibilites. ";
  } else {
    x.innerHTML = "BIO; Mike Allred fell in love with comics at an early age. With encouragement from his wife and collaberator Laura Allred, Mike Allred published Graphik Muzik. THis books featured the first apperance of Frank Einstein, who would evntually evolve into the superhero Madman who is still a prominent fixutre in the inide comic scene";
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


