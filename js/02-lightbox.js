import { galleryItems } from "./gallery-items.js";

const makeImgEl = (image) => {
  const { original, preview, description } = image;
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
};

const ulEl = document.querySelector(".gallery");
const imageMarkup = galleryItems.map(makeImgEl).join("");
ulEl.insertAdjacentHTML("beforeend", imageMarkup);

ulEl.addEventListener("click", onImagesClick);

function onImagesClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  usageSimpleLightBox();
}

function usageSimpleLightBox() {
  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
