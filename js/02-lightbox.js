import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const newGalleryIm = galleryItems
  .map(({ description, original, preview }) => {
    return `
		<a class="gallery__item" href="${original}">
			<img class="gallery__image" 
					height="600px"
					width="1200px"
					src="${preview}"
					alt="${description}" />
		</a>`;
  })
  .join("");

	gallery.insertAdjacentHTML("afterbegin", newGalleryIm);

	gallery.addEventListener("click", openModal);

	function openModal(event) {
		event.preventDefault();
		if (event.target.tagName !== "IMG") {
			return;
		}
		new SimpleLightbox('.gallery a ', {captionsData:	'alt' , captionClass:	'bottom', captionDelay:	'250' });
	}