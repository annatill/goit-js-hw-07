import { galleryItems } from "./gallery-items.js";

const makeImgEl = (image) => {
  const { original, preview, description } = image;
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};

const divEl = document.querySelector(".gallery");
const imageMarkup = galleryItems.map(makeImgEl).join("");
divEl.insertAdjacentHTML("beforeend", imageMarkup);

divEl.addEventListener("click", onImagesClick);

function onImagesClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img width="1400" height="900" src="${event.target.dataset.source}">
`);
  instance.show();

  window.addEventListener("keydown", closeEscModal);
}

function closeEscModal(event) {
  if (event.code === "Escape") {
    const modal = document.querySelector(".basicLightbox");
    if (modal) {
      modal.remove();
    }
  }
  window.removeEventListener("keydown", closeEscModal);
}
