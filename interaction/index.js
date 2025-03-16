let video;
let canvas;
let imagelist = {};

function setup() {
  let width = document.getElementById('p5-container').offsetWidth-5;
  let height = document.getElementById('p5-container').offsetHeight-5;
  canvas = createCanvas(width, height);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  canvas.parent("#p5-container");

  const clickableImages = document.querySelectorAll(".box img");
  clickableImages.forEach((img) => {
    img.addEventListener("click", () => {
      const imgSrc = img.src;
      if (imagelist[imgSrc]) {
        delete imagelist[imgSrc];
      } else {
        //lippen
        var x = 160;
        let y = 250;

        if (imgSrc.includes("Brille")) {
          y = 100;
        }
        if (imgSrc.includes("Schnurrbart")) {
          y = 200;
        }
        imagelist[imgSrc] = {
          x: x, // canvas
          y: y,
          width: 320,
          height: 320
        };
      }
    });
  });
}

function draw() {
  image(video, 0, 0, width, height);

  for (let src in imagelist) {
    const imgData = imagelist[src];
    const imgElement = createImg(src);
    imgElement.hide(); // Hide the HTML element to use it as a p5 image
    image(imgElement, imgData.x, imgData.y, imgData.width, imgData.height);
  }
}