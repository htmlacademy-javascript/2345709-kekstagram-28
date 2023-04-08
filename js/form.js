import './../nouislider/nouislider.js';

import {
  sliderElementBlock,
  sliderElement,
  effectLevelValue,
  imgUploadPreview,
} from './slider.js';
import { isEscape } from './utils.js';
import { sendData } from './api.js';
import { fileChooser } from './picture-preview.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import {
  hashtagValidate,
  commentValidate,
  hashtags,
  commentField,
  imageLoad,
  onHashtagsTextInput,
  commentTextInput,
} from './input-validate.js';
import {
  scaleControlSmallerButton,
  scaleControlBiggerButton,
  scaleControlValue,
  onScaleSmallerClick,
  onScaleBiggerClick,
  scaleValueHidden,
} from './scale.js';

const formUploadImage = document.querySelector('.img-upload__form');
const modalView = document.querySelector('body');
const buttonModalClose = document.querySelector('.img-upload__cancel');

//изменения значения кнопкок scale
const scaleChange = () => {
  scaleControlSmallerButton.addEventListener('click', onScaleSmallerClick);
  scaleControlBiggerButton.addEventListener('click', onScaleBiggerClick);
};

//изменения значения поля #upload-file)
formUploadImage.addEventListener('change', () => {
  openFormPopup();
});

//функция открытия модального окна
function openFormPopup() {
  imageLoad.classList.remove('hidden');
  modalView.classList.add('modal-open');
  scaleChange();
  hashtagValidate();
  commentValidate();
}

//закрытие модального окна кнопкой
buttonModalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeFormPopup();
});

//функция закрытия модального окна
function closeFormPopup() {
  modalView.classList.remove('modal-open');
  imageLoad.classList.add('hidden');
  //обработчики событий
  scaleControlSmallerButton.removeEventListener('click', onScaleSmallerClick);
  scaleControlBiggerButton.removeEventListener('click', onScaleBiggerClick);
  hashtags.removeEventListener('input', onHashtagsTextInput);
  commentField.addEventListener('input', commentTextInput);
  //Очистка полей
  fileChooser.value = '';
  scaleValueHidden.value = '100';
  scaleControlValue.value = '100%';
  imgUploadPreview.style.transform = 'scale(1)';
  //фильтры
  sliderElementBlock.style.display = 'none';
  sliderElement.style.display = 'none';
  effectLevelValue.value = '';
  imgUploadPreview.style.filter = 'none';
  // вводимый текст
  hashtags.value = '';
  commentField.value = '';
}

//закрытие модального окна по esc.
window.addEventListener('keydown', (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeFormPopup();
  }
  window.removeEventListener('keydown', closeFormPopup);
});

//нажатие на кнопку публикации
const setImgUploadFormSubmit = (onSuccess) => {
  formUploadImage.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => showSuccessMessage('Форма успешно отправлена'),
      () => showErrorMessage('При отправке формы возникла ошибка'),
      () => onSuccess(),
      new FormData(evt.target)
    );
  });
};

setImgUploadFormSubmit(closeFormPopup);

export { formUploadImage, imageLoad, imgUploadPreview };
