// Add imports above this line
import simpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

//  {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },

const galleryList = document.querySelector(".gallery");
console.log(galleryList);
const galleryMarKup = galleryItems.map(({ preview, original, description }) => 

`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join("");
galleryList.insertAdjacentHTML("beforeend", galleryMarKup);
console.log(galleryMarKup);
galleryList.addEventListener("click", onClick);

function onClick(evt) {
    evt.preventDefault();
}
const lightbox = new SimpleLightbox('.gallery a', {
    doubleTapZoom: 1.5,
    captionsData: "alt",
    captionDelay: 250
});