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
const gallery = document.querySelector('.gallery'); 

gallery.addEventListener('click', onPictureClick);

let instance;


function onPictureClick(event){
  event.preventDefault();
  if(event.target.nodeName !== 'IMG'){
    return;
  } if (event.target.nodeName === 'IMG'){
    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}"></img>
    `);
    document.addEventListener('keydown', onEscKeydown);

  }
  return instance.show()
};

function onEscKeydown (event){
  // console.log(event.key)
  if(event.key == 'Escape'){
  instance.close()
  document.removeEventListener('keydown', onEscKeydown);
  };
}




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
    
};
renderGallery();



