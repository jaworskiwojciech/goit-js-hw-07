import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerElement = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);

galleryContainerElement.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(image) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
                <a class="gallery__link" href="large-image.jpg">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
            `;
    })
    .join("");
}

const clickOnImage = (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery")) return;

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}"width="800" height="600">
    `
  );

  instance.show();

  const keydownListener = function (event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", keydownListener);
    }
  };

  document.addEventListener("keydown", keydownListener);
};

galleryContainerElement.addEventListener("click", clickOnImage);
