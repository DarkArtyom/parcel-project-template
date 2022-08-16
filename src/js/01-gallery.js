// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryEL = document.querySelector('.gallery');

const createGallery = galleryItems =>
  galleryItems.map(item => {
    const galleryItemsEl = `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
      title="${item.description}"
    />
  </a>
</div>`;
    galleryEL.insertAdjacentHTML('beforeend', galleryItemsEl);
  });

createGallery(galleryItems);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {});
