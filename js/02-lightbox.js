import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery'); 


gallery.addEventListener('click', onPictureClick);


let lightbox;

function onPictureClick(event){
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
      return;
    } if (event.target.nodeName === 'IMG'){
       return lightbox = new SimpleLightbox('.gallery a', 
        {
            captions: true,
            captionType: 'attr',
            captionsData: 'alt',
            captionDelay: 250,
        });
  
    }
  };



function renderGallery(){
    let htmlString = galleryItems.reduce((acc, {preview, original, description}) => 
      (acc + `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`), '');
    return gallery.insertAdjacentHTML('beforeend', `${htmlString}`)  
};
renderGallery();