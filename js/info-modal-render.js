import { isEscapeKeyPress } from './utils.js';

const closeInfoModal = () => {
  document.querySelector('.success')?.remove();
  document.querySelector('.error')?.remove();
  document.body.removeEventListener('keydown', onKeyDownEscape);
  document.body.removeEventListener('click', onOverlayClick);
};

const onOverlayClick = (evt) => {
  if(evt.target.classList.contains('success') || evt.target.classList.contains('error')) {
    closeInfoModal();
  }
};

const onKeyDownEscape = (evt) => {
  if(isEscapeKeyPress(evt)) {
    evt.preventDefault();
    closeInfoModal();
  }
};

const showInfoModal = (templateContent) => {
  const cloneTemplate = templateContent.cloneNode(true);
  document.body.append(cloneTemplate);
  const exitButton = cloneTemplate.querySelector('button');
  exitButton.addEventListener('click', () => {
    closeInfoModal();
  });
  document.body.addEventListener('keydown', onKeyDownEscape);
  document.body.addEventListener('click', onOverlayClick);
};

export {showInfoModal};
