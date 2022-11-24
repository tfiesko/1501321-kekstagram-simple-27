import { isEscapeKeyPress} from './utils.js';
import { showInfoModal } from './info-modal-render.js';
import { onZoomOutButtonClick } from './photo-scale-changer.js';
import { onZoomInButtonClick } from './photo-scale-changer.js';
import { resetScaleValue } from './photo-scale-changer.js';
import { resetFilter } from './filter-changer.js';
import { onEffectsRadioButtonsChange } from './filter-changer.js';
import { sendData } from './api.js';
import { validFileType } from './utils.js';
import { showAlert } from './utils.js';
const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
];
const TYPE_ERROR_MESSAGE = 'Недопустимый тип файла!';
const EMPTY_VALUE = '';
const fileInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('.img-upload__cancel');
const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const imgEffectsList = document.querySelector('.img-upload__effects');
const form = document.querySelector('.img-upload__form');
const comment = form.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit');
const successInfoModalTemplate = document.querySelector('#success').content.querySelector('.success');
const errorInfoModalTemplate = document.querySelector('#error').content.querySelector('.error');

const resetForm = () => {
  resetScaleValue();
  resetFilter();
  fileInput.value = EMPTY_VALUE;
  comment.value = EMPTY_VALUE;
};

const onKeyDownEscape = (evt)=> {

  if(isEscapeKeyPress(evt)) {
    evt.preventDefault();
    closeEditPictureModal();
  }
};

const onCloseButtonClick = () => {
  closeEditPictureModal();
};

function closeEditPictureModal() {
  document.body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onKeyDownEscape);
  closeButton.removeEventListener('click', onCloseButtonClick);
  controlSmaller.removeEventListener('click', onZoomOutButtonClick);
  controlBigger.removeEventListener('click', onZoomInButtonClick);
  imgEffectsList.removeEventListener('change', onEffectsRadioButtonsChange);
  resetForm();
}

const openEditPictureModal = () => {
  document.body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onKeyDownEscape);
  controlSmaller.addEventListener('click', onZoomOutButtonClick);
  controlBigger.addEventListener('click', onZoomInButtonClick);
  imgEffectsList.addEventListener('change', onEffectsRadioButtonsChange);
  resetScaleValue();
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуем...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

fileInput.addEventListener('change', ()=> {
  if(!validFileType(fileInput.files[0], ALLOWED_FILE_TYPES)){
    showAlert(TYPE_ERROR_MESSAGE);
  }
  else {
    openEditPictureModal();
  }
});

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt)=> {
    blockSubmitButton();
    evt.preventDefault();
    sendData(
      ()=> {
        onSuccess();
        showInfoModal(successInfoModalTemplate);
        unblockSubmitButton();
      },
      ()=> {
        showInfoModal(errorInfoModalTemplate);
        unblockSubmitButton();
      },
      new FormData(evt.target)
    );
  });
};

export {setUserFormSubmit, closeEditPictureModal};
