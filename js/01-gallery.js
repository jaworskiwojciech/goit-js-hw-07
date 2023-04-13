import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const createImagesMarkup = (images) => {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
};

galleryContainer.insertAdjacentHTML(
  "afterbegin",
  createImagesMarkup(galleryItems)
);

const clickOnImage = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery")) return;

  const instance = basicLightbox.create(`
   <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  const keydownListener = (e) => {
    if (e.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", keydownListener);
    }
  };

  document.addEventListener("keydown", keydownListener);
};

galleryContainer.addEventListener("click", clickOnImage);
