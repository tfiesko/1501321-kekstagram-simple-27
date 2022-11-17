import { getArrayFromPhotoItems } from './data.js';
const picturesContainer = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();

getArrayFromPhotoItems().forEach(({url, likes, comments})=> {
  const ThumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);
  ThumbnailTemplate.querySelector('.picture__img').src = url;
  ThumbnailTemplate.querySelector('.picture__likes').textContent = likes;
  ThumbnailTemplate.querySelector('.picture__comments').textContent = comments;
  picturesFragment.appendChild(ThumbnailTemplate);
});

picturesContainer.appendChild(picturesFragment);
