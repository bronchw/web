
const images = [
  "img1.png", "img2.png", "img3.png", "img4.png",
  "img5.png", "img6.png", "img7.png"
];


const preloaded = [];
for (let i = 0; i < images.length; i++) {
  preloaded[i] = new Image();
  preloaded[i].src = images[i];
}

let current = 0;

function changeImage() {
  current = (current + 1) % images.length;


  document.getElementById("mainAnimation").src = preloaded[current].src;
}


setInterval(changeImage, 220);
