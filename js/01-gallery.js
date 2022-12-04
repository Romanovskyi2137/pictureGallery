import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="small-image.jpg"
    data-source="large-image.jpg"
    alt="Image description"
  />
</a>
</div> */
const gallery = document.querySelector('.gallery') 


function renderGallery(){
    let htmlString = galleryItems.reduce((acc, {preview, original, description}) => 
      (acc + `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
      </div>`), '');
    return gallery.insertAdjacentHTML('beforeend', `${htmlString}`)
    
}

renderGallery();