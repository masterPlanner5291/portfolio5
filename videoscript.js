function showContent(id) {

  document.querySelectorAll(".content").forEach(section => section.style.display = "none");

  document.querySelectorAll("video").forEach(video => {
    video.pause();
    video.currentTime = 0;
  });


  const selectedSection = document.getElementById(id);
  if (!selectedSection) return;
  selectedSection.style.display = "block";



  const selectedVideo = selectedSection.querySelector("video");
if (selectedVideo) selectedVideo.play();
}