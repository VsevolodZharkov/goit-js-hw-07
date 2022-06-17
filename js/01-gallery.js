import { galleryItems } from "./gallery-items.js";
// Change code below this line



const gallery = document.querySelector(".gallery");
const body = document.querySelector("body");
let instance;

const newGalleryIm = galleryItems
  .map(({ description, original, preview }) => {
    return `
			<div class="gallery__item">
        <a 
						class="gallery__link" href="${original}">
          <img
            class="gallery__image"
						height="600px"
						width="1200px"
            src = "${preview}"
            data-source = "${original}"
            alt = "${description}"
          />
				</a>
			</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", newGalleryIm);
gallery.addEventListener("click", openModal);

	function openModal(event) {
    event.preventDefault();

    if (event.target.tagName !== "IMG") {
      return;
    }
    const dataSourse = event.target.dataset.source;
    instance = basicLightbox.create(`<img src="${dataSourse}" width="800" height="600">`)
	  instance.show()
		body.addEventListener("keydown", closeModal);
  }


	function closeModal(event) {
		if(event.code === "Escape"){
			instance.close();
		}
		body.removeEventListener("keydown", closeModal);
	}