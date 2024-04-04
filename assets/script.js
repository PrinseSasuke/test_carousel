document.addEventListener("DOMContentLoaded", function () {
  const slider = tns({
    container: ".slider .slides",
    items: 3,
    slideBy: 1,
    autoplay: false,
    nav: false,
    controls: false,
    lazyload: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    responsive: {
      768: {
        items: 3,
      },
      1400: {
        items: 5,
      },
    },
  });

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  nextBtn.addEventListener("click", () => {
    slider.goTo("next");
  });
  prevBtn.addEventListener("click", () => {
    slider.goTo("prev");
  });
  const addImagesBtn = document.getElementById("addImagesBtn");
  const fileInput = document.getElementById("fileInput");

  addImagesBtn.addEventListener("click", function () {
    slider.destroy();
    const files = fileInput.files;
    const slidesContainer = document.querySelector(".slider .slides");
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match("image.*")) {
        const reader = new FileReader();
        const img = document.createElement("img");
        img.classList.add("slide");
        const openButton = document.createElement("button");
        openButton.classList.add("open-modal-btn");
        openButton.textContent = "Открыть";
        const slideWrapper = document.createElement("div");
        slideWrapper.classList.add("slide");
        reader.onload = (function (image) {
          return function (e) {
            image.src = e.target.result;
            slideWrapper.appendChild(image);
            slideWrapper.appendChild(openButton);
          };
        })(img);
        reader.readAsDataURL(file);
        fragment.appendChild(slideWrapper);
      }
    }
    slidesContainer.appendChild(fragment);
    slider.rebuild();
    initializeSlider();
    const buttons = document.querySelectorAll(".open-modal-btn");
    const images = document.querySelectorAll(".slider .slides img");
    buttons.forEach(function (button, index) {
      button.addEventListener("click", function (event) {
        openModal(images[index].src);
      });
    });
  });
});

const buttons = document.querySelectorAll(".open-modal-btn");
const images = document.querySelectorAll(".slider .slides img");

buttons.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    openModal(images[index].src);
  });
});
function openModal(imageSrc) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}
function initializeSlider() {
  // Код инициализации слайдера
  const slider = tns({
    container: ".slider .slides",
    items: 3,
    slideBy: 1,
    autoplay: false,
    nav: false,
    controls: false,
    lazyload: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    responsive: {
      768: {
        items: 3,
      },
      1400: {
        items: 5,
      },
    },
  });

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  nextBtn.addEventListener("click", () => {
    slider.goTo("next");
  });
  prevBtn.addEventListener("click", () => {
    slider.goTo("prev");
  });
}
