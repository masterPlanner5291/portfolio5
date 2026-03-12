let currentImages = [];
let currentIndex = 0;

function openLightbox(imageArray) {
  currentImages = imageArray; // Save the list of images for this essay
  currentIndex = 0;           // Start at the first page
  document.getElementById("portfolioModal").style.display = "block";
  updateModalImage();
}

function closeModal() {
  document.getElementById("portfolioModal").style.display = "none";
}

function changeSlide(direction) {
  currentIndex += direction;
  
  // Loop back to start/end
  if (currentIndex >= currentImages.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = currentImages.length - 1;
  
  updateModalImage();
}

function updateModalImage() {
  const container = document.getElementById("modal-image-container");
  const caption = document.getElementById("caption");
  
  container.innerHTML = `<img src="${currentImages[currentIndex]}" style="width:100%">`;
  caption.innerHTML = `Page ${currentIndex + 1} of ${currentImages.length}`;
}

// Close modal if user clicks outside the image
window.onclick = function(event) {
  const modal = document.getElementById("portfolioModal");
  if (event.target == modal) {
    closeModal();
  }
}