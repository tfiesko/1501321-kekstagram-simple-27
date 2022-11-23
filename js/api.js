import { showAlert } from './utils.js';
const getDataUrl = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const sendDataUrl = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(getDataUrl)
    .then((response) => {
      if(response.ok){
        return response.json();
      }
      else {
        showAlert('Проблема с загрузкой данных :(');
      }})
    .then((thumbnails) => {
      onSuccess(thumbnails);
    }).catch(()=>{
      showAlert('Проблема с загрузкой данных :(');
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    sendDataUrl,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
