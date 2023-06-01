const imageContainer = document.querySelector(`.slider-photo`);
const nextButton = document.querySelector(`slider-button-back`);
const prevButton = document.querySelector(`slider-button-next`);

let sources = [
  `./1.jpg`,
  `./2.jpg`,
  `./3.jpg`,
  `./4.jpg`,
  `./5.jpg`,
  `./6.jpg`,
  `./7.jpg`,
];

let currentImage = 0;

function nextImage() {
  currentImage++;
  if (currentImage > sources.length - 1) {
    currentImage = sources.length - 1;
  }
  imageContainer.src = sources[currentImage];
}

function prevImage() {
  currentImage--;

  if (currentImage < 0) {
    currentImage = 0;
  }
  imageContainer.src = sources[currentImage];
}

nextButton.addEventListener(`click`, nextImage);
prevButton.addEventListener(`click`, prevImage);
