const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * Math.abs(max - min) + Math.min(min, max));


const checkStringLength = (checkedString, maxLength) =>
  checkedString.length <= maxLength;

const isEscapeKeyPress = (evt) =>
  evt.key === 'Escape';

export {getRandomNumber ,checkStringLength, isEscapeKeyPress};
