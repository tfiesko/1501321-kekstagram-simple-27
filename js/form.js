import { isEscapeKeyPress } from './utils.js';
import { onZoomOutButtonClick } from './photo_scale_changer.js';
import { onZoomInButtonClick } from './photo_scale_changer.js';
import { resetScaleValue } from './photo_scale_changer.js';
const fileInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('.img-upload__cancel');
const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');

const onEscapeKeyDown = (evt)=> {

  if(isEscapeKeyPress(evt)) {
    evt.preventDefault();
    closeEditPictureModal();
  }
};

const onClickCloseButton = () => {
  closeEditPictureModal();
};

const closeEditPictureModal = () => {
  document.body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onEscapeKeyDown);
  closeButton.removeEventListener('click', onClickCloseButton);
  controlSmaller.removeEventListener('click', onZoomOutButtonClick);
  controlBigger.removeEventListener('click', onZoomInButtonClick);
  fileInput.value = '';
};

const openEditPictureModal = () => {
  document.body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  closeButton.addEventListener('click', onClickCloseButton);
  document.addEventListener('keydown', onEscapeKeyDown);
  controlSmaller.addEventListener('click', onZoomOutButtonClick);
  controlBigger.addEventListener('click', onZoomInButtonClick);
  resetScaleValue();
};

fileInput.addEventListener('change', ()=> {
  openEditPictureModal();
});


