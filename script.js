const images = [
  "img1.png", "img2.png", "img3.png", "img4.png",
  "img5.png", "img6.png", "img7.png"
];

let current = 0;

function changeImage() {
  current = (current + 1) % images.length;
  document.getElementById("slideshow").src = images[current];
}

setInterval(changeImage, 220);
