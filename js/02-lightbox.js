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
            <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
            `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});
