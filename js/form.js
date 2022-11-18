import { isEscapeKeyPress } from './utils.js';
const fileInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('.img-upload__cancel');

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
  fileInput.value = '';
};

const openEditPictureModal = () => {
  document.body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  closeButton.addEventListener('click', onClickCloseButton);
  document.addEventListener('keydown', onEscapeKeyDown);
};

fileInput.addEventListener('change', ()=> {
  openEditPictureModal();
});


