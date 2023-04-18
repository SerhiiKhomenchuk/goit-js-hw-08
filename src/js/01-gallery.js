// Add imports above this line
import simpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryList = document.querySelector(".gallery");
 
const galleryMarKup = galleryItems.map(({ preview, original, description }) => 

`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarKup);


const lightbox = new simpleLightbox('.gallery a', {
    doubleTapZoom: 1.5,
    captionsData: "alt",
    captionDelay: 250
});