import { isEscape } from './utils.js';

const ALERT_SHOW_TIME = 5000;

// Блок с сообщением об ошибке
const errorContainerTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

// Блок с сообщением об успехе
const successContainerTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

// Сообщение от ошибке
const showErrorMessage = () => {
  const errorContainer = errorContainerTemplate.cloneNode(true);
  const errorCloseButton = errorContainer.querySelector('.error__button');

  errorContainer.style.zIndex = '100';

  document.body.append(errorContainer);

  const onPopupEscKeydown = (evt) => {
    if (isEscape(evt)) {
      evt.preventDefault();
      onCloseAlertClick();
    }
  };

  const onOutBoxClick = (evt) => {
    if (!errorContainer.querySelector('.error__inner').contains(evt.target)) {
      evt.preventDefault();
      onCloseAlertClick();
    }
  };

  function onCloseAlertClick() {
    errorContainer.remove();
    errorCloseButton.removeEventListener('click', onCloseAlertClick);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onOutBoxClick);
  }

  errorCloseButton.addEventListener('click', onCloseAlertClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onOutBoxClick);

  setTimeout(() => {
    errorContainer.remove();
  }, ALERT_SHOW_TIME);
};

// Сообщение об успешной отправке
const showSuccessMessage = () => {
  const successContainer = successContainerTemplate.cloneNode(true);
  const successCloseButton = successContainer.querySelector('.success__button');

  successContainer.style.zIndex = '100';

  document.body.append(successContainer);

  const onPopupEscKeydown = (evt) => {
    if (isEscape(evt)) {
      evt.preventDefault();
      onCloseMessageClick();
    }
  };

  const onOutBoxClick = (evt) => {
    if (!successContainer.querySelector('.success__inner').contains(evt.target)) {
      evt.preventDefault();
      onCloseMessageClick();
    }
  };

  function onCloseMessageClick() {
    successContainer.remove();
    successCloseButton.removeEventListener('click', onCloseMessageClick);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onOutBoxClick);
  }

  successCloseButton.addEventListener('click', onCloseMessageClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onOutBoxClick);

  setTimeout(() => {
    successContainer.remove();
  }, ALERT_SHOW_TIME);
};

// Кастомное сообщение об ошибке загруки
const showCustomErrorMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '50%';
  alertContainer.style.top = '40%';
  alertContainer.style.bottom = '0';
  alertContainer.style.right = '0';
  alertContainer.style.transform = 'translate(-50%, -50%)';
  alertContainer.style.height = '30%';
  alertContainer.style.borderRadius = '10px';
  alertContainer.style.display = 'flex';
  alertContainer.style.justifyContent = 'center';
  alertContainer.style.alignItems = 'center';
  alertContainer.style.padding = '50px 50px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.lineHeight = '1.2';
  alertContainer.style.backgroundColor = '#FF5F49';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export { showErrorMessage, showSuccessMessage, showCustomErrorMessage };
