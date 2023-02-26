import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerElement = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);

galleryContainerElement.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(item) {
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

  const source = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
};

galleryContainerElement.addEventListener("click", clickOnImage);
