import { showAlert } from './utils.js';
const GET_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SEND_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple';
const GET_DATA_ERROR_MESSAGE = 'Проблема с загрузкой данных :(';

const getData = (onSuccess) => {
  fetch(GET_DATA_URL)
    .then((response) => {
      if(response.ok){
        return response.json();
      }
      else {
        showAlert(GET_DATA_ERROR_MESSAGE);
      }})
    .then((thumbnails) => {
      onSuccess(thumbnails);
    }).catch(()=>{
      showAlert(GET_DATA_ERROR_MESSAGE);
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_DATA_URL,
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
