function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "BIO; A Javier Rodregiez's Career began in the 90's on independent and self published eruopean comics until making the jump to mainstream US superhero comics in the early 2000's with DC's Batgril Year One. Ever since he has gotten more and more experimental with his artwork and is now one of th architects of DC's Absolute Imprint "
) {
    x.innerHTML = "Blurb; Rodreigez's artwork ecapsulates everything psychedelic and mind bending.He experetly plays with form, color, page layouts and even the medium of comics itslef inorder to transport the readers on a parallel journey as the characters he illistrates."

;
  } else {
    x.innerHTML = "BIO; A Javier Rodregiez's Career began in the 90's on independent and self published eruopean comics until making the jump to mainstream US superhero comics in the early 2000's with DC's Batgril Year One. Ever since he has gotten more and more experimental with his artwork and is now one of th architects of DC's Absolute Imprint "
;
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


