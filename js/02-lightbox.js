import { galleryItems } from "./gallery-items.js";
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

  new SimpleLightbox(".gallery a ", {
    captionsData: "alt",
    captionClass: "bottom",
    captionDelay: "250",
  });



// gallery.addEventListener("click", () => {

// });

// function openModal() {
	// без цього коду якой нижче код не працюе 
  // event.preventDefault();
  // if (event.target.tagName !== "IMG") {
  //   return;
  // }
	//
// }
