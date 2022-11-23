const ALERT_SHOW_TIME = 5000;

const isEscapeKeyPress = (evt) =>
  evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '20%';
  alertContainer.style.top = '30%';
  alertContainer.style.right = '20%';
  alertContainer.style.bottom = '30%';
  alertContainer.style.padding = '100px 3px';
  alertContainer.style.fontSize = '50px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'blue';
  alertContainer.style.border = '3px solid white';

  alertContainer.textContent = message;

  document.body.appendChild(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscapeKeyPress, showAlert};
