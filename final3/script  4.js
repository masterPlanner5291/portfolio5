function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "BIO; Daneil Warren Johnson has been drawing since an early age. He was professionally taught and was encouraged to practice realism. THis training did him well when he eventaully let loose and self published several web comics includeing Space Mullet. His natrual showmanship eventually got him noticed and he is now one of the hottest artists inthe inustry.") {
    x.innerHTML = "Blurb; Johonson's work is nothing short of controlled anarchy. He uses choppy and varied linework inorder to portay characters in the most organic ways possible. He can go from showing some of the most exprissive potrails of love to some of the most body bending grumsome violence in a single filp of a page.";
  } else {
    x.innerHTML ="BIO; Daneil Warren Johnson has been drawing since an early age. He was professionally taught and was encouraged to practice realism. THis training did him well when he eventaully let loose and self published several web comics includeing Space Mullet. His natrual showmanship eventually got him noticed and he is now one of the hottest artists inthe inustry.";
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


