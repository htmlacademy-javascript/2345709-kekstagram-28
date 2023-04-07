const DIVISOR = 100;
const zoomValue = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const scaleControls = document.querySelector('.img-upload__scale');

const scaleControlSmallerButton = scaleControls.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = scaleControls.querySelector('.scale__control--bigger');
const scaleControlValue = scaleControls.querySelector('.scale__control--value');

const scaleValueHidden = scaleControls.querySelector('.scale__value--hidden'); // Скрытое поле значения

const formImage = document.querySelector('.img-upload__form');
const sizeImg = formImage.querySelector('img');


const onScaleSmallerClick = () => {
  let size = parseInt(scaleControlValue.value, 10);
  if (size === zoomValue.MIN) {
    return;
  }
  size -= zoomValue.STEP;
  scaleControlValue.value = `${size}%`;
  sizeImg.style.transform = `scale(${size / DIVISOR})`;
  scaleValueHidden.value = scaleControlValue.value;
};

const onScaleBiggerClick = () => {
  let size = parseInt(scaleControlValue.value, 10);
  if (size === zoomValue.MAX) {
    return;
  }
  size += zoomValue.STEP;
  scaleControlValue.value = `${size}%`;
  sizeImg.style.transform = `scale(${size / DIVISOR})`;
  scaleValueHidden.value = scaleControlValue.value;
};
scaleControlBiggerButton.addEventListener('click', () => {

});

export { scaleControlSmallerButton, scaleControlBiggerButton, scaleControlValue, scaleValueHidden, onScaleSmallerClick, onScaleBiggerClick };
