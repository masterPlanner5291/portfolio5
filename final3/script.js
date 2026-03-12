function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "BIO; Jack Kirby loved to draw from an early age. It was the only pastime he could afford while growing up in the slums during the great depression. He found early success at Timely Comics with collaborator Joe Simon, with the creation of Captain America. After returning from service in WWII Kirby was partnered with Stan Lee and ushered in the Marvel Age with the publication of the Fantastic Four! The Four’s success led to such titles as Ant-Man, Iron Man, Spider-Man, Thor, and many more. Kirby left Marvel in the early 70’s for DC. There Kirby created The New Gods along with other titles like The Demon and Kamandi: the Last Boy on Earth.") {
    x.innerHTML = "Blurb; Kirby’s art is built on strong shapes and wild poses. His figures have often been compared to stone. Nothing on a Kirby Page stands still. A simple glance at his work shows why hes the king of comics ";
  } else {
    x.innerHTML = "BIO; Jack Kirby loved to draw from an early age. It was the only pastime he could afford while growing up in the slums during the great depression. He found early success at Timely Comics with collaborator Joe Simon, with the creation of Captain America. After returning from service in WWII Kirby was partnered with Stan Lee and ushered in the Marvel Age with the publication of the Fantastic Four! The Four’s success led to such titles as Ant-Man, Iron Man, Spider-Man, Thor, and many more. Kirby left Marvel in the early 70’s for DC. There Kirby created The New Gods along with other titles like The Demon and Kamandi: the Last Boy on Earth.";
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


