const gallery = document.querySelector(".gallery");
const popup = document.querySelector(".popup");
const selectedImg = document.querySelector(".selectedImg");
let imageIndex = 0;
let images = [
  {
    src: "https://kestutisrubys.lt/ft/nasa-rTZW4f02zY8-unsplash.jpg",
    alt: "nebula cloud",
  },
  {
    src: "https://kestutisrubys.lt/ft/photo-1570032257806-7272438f38da.jpg",
    alt: "mountains reflection on water",
  },
  {
    src: "https://kestutisrubys.lt/ft/photo-1525054098605-8e762c017741.jpg",
    alt: "strong waves",
  },
  {
    src: "https://kestutisrubys.lt/ft/photo-1562207520-19c0ebd8264f.jpg",
    alt: "green mountains and blue sky",
  },
  {
    src: "https://kestutisrubys.lt/ft/photo-1617191519105-d07b98b10de6.jpg",
    alt: "blue and purple galaxy",
  },
  {
    src: "https://kestutisrubys.lt/ft/photo-1441829266145-6d4bfbd38eb4.jpg",
    alt: "blue wavy ocean with horizon",
  },
  {
    src: "https://kestutisrubys.lt/ft/photo-1615114814213-a245ffc79e9a.jpg",
    alt: "brown and black galaxy",
  },
  {
    src: "https://kestutisrubys.lt/ft/photo-1552604660-a8c4dde15b2e.jpg",
    alt: "person on clif in canyon",
  },
  {
    src: "https://kestutisrubys.lt/ft/photo-1564295644023-16f14ac50b93.jpg",
    alt: "whale tale above water surface",
  },
];

window.addEventListener("DOMContentLoaded", generateImages);

function generateImages() {
  images.forEach((image, i) => {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;

    img.addEventListener("click", () => {
      selectedImg.src = image.src;
      popup.style.display = "flex";
      selectedImg.style.display = "block";

      imageIndex = i;
      document.querySelector(".prev").addEventListener("click", prevImage);
      function prevImage() {
        if (imageIndex === 0) {
          imageIndex = images.length - 1;
          selectedImg.src = images[imageIndex].src;
        } else {
          imageIndex -= 1;
          selectedImg.src = images[imageIndex].src;
        }
      }

      document.querySelector(".next").addEventListener("click", nextImage);
      function nextImage() {
        if (imageIndex === images.length - 1) {
          imageIndex = 0;
          selectedImg.src = images[imageIndex].src;
        } else {
          imageIndex += 1;
          selectedImg.src = images[imageIndex].src;
        }
      }
    });

    gallery.appendChild(img);
  });

  // popup.addEventListener("click", () => {
  //   popup.style.display = "none";
  //   selectedImg.style.display = "none";
  // });
}
