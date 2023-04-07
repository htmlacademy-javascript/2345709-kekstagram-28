const sliderElementBlock = document.querySelector('.effect-level'); // Блок со слайдером
const sliderElement = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const onEffectChange = () => {
  sliderElementBlock.style.display = 'none';
  sliderElement.style.display = 'none';
  effectLevelValue.value = '';
  imgUploadPreview.style.filter = 'none';
  effectsList.querySelector('#effect-none').checked = true;

  effectsList.addEventListener('change', (evt) => {
    switch (evt.target.value) {
      case 'chrome':
        sliderElementBlock.style.display = 'block';
        sliderElement.style.display = 'block';
        effectLevelValue.value = 1;
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          step: 0.1,
        });
        sliderElement.noUiSlider.set(1);
        sliderElement.noUiSlider.on('update', (values, handle) => {
          effectLevelValue.value = values[handle];
          imgUploadPreview.style.filter = `grayscale(${values[handle]})`;
        });
        break;
      case 'sepia':
        sliderElementBlock.style.display = 'block';
        sliderElement.style.display = 'block';
        effectLevelValue.value = 1;
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          step: 0.1,
        });
        sliderElement.noUiSlider.set(1);
        sliderElement.noUiSlider.on('update', (values, handle) => {
          effectLevelValue.value = values[handle];
          imgUploadPreview.style.filter = `sepia(${values[handle]})`;
        });
        break;
      case 'marvin':
        sliderElementBlock.style.display = 'block';
        sliderElement.style.display = 'block';
        effectLevelValue.value = 100;
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          step: 1,
        });
        sliderElement.noUiSlider.set(100);
        sliderElement.noUiSlider.on('update', (values, handle) => {
          effectLevelValue.value = values[handle];
          imgUploadPreview.style.filter = `invert(${values[handle]}%)`;
        });
        break;
      case 'phobos':
        sliderElementBlock.style.display = 'block';
        sliderElement.style.display = 'block';
        effectLevelValue.value = 3;
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          step: 0.1,
        });
        sliderElement.noUiSlider.set(3);
        sliderElement.noUiSlider.on('update', (values, handle) => {
          effectLevelValue.value = values[handle];
          imgUploadPreview.style.filter = `blur(${values[handle]}px)`;
        });
        break;
      case 'heat':
        sliderElementBlock.style.display = 'block';
        sliderElement.style.display = 'block';
        effectLevelValue.value = 3;
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          step: 0.1,
        });
        sliderElement.noUiSlider.set(3);
        sliderElement.noUiSlider.on('update', (values, handle) => {
          effectLevelValue.value = values[handle];
          imgUploadPreview.style.filter = `brightness(${values[handle]})`;
        });
        break;
      case 'none':
        imgUploadPreview.style.filter = 'none';
        sliderElementBlock.style.display = 'none';
        sliderElement.style.display = 'none';
        effectLevelValue.value = '';
        break;
    }
  });
};
onEffectChange();
export { sliderElementBlock, sliderElement, effectLevelValue, imgUploadPreview };
