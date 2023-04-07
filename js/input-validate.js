const imageLoad = document.querySelector('.img-upload__overlay');

const MAX_HASHTAG_QUANTITY = 5;
const COMMENT_MAX_LENGTH = 140;
const regExp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const hashtags = imageLoad.querySelector('.text__hashtags');
const commentField = imageLoad.querySelector('.text__description');

//валидация хештегов

const onHashtagsTextInput = () => {
  hashtags.value = hashtags.value.replaceAll('  ', ' ');

  const hashtagsArr = hashtags.value.split(' ');
  const invalidHashtagsArr = [];

  if (hashtagsArr[0] === '') {
    hashtagsArr.shift();
  }
  if (hashtagsArr[hashtagsArr.length - 1] === '') {
    hashtagsArr.pop();
  }
  hashtagsArr.forEach((hashtag) => {
    if (!hashtag.match(regExp)) {
      invalidHashtagsArr.push(hashtag);
    }
  });

  for (let i = 0; i < hashtagsArr.length; i++) {
    hashtagsArr[i] = hashtagsArr[i].toLowerCase();
  }

  const duplicateHashtagsArr = hashtagsArr.filter((hashtag, index, arr) => arr.indexOf(hashtag) !== index);

  if (duplicateHashtagsArr && duplicateHashtagsArr.length !== 0) {
    hashtags.setCustomValidity(`Пожалуйста, удалите повторяющиеся хэш-теги: ${duplicateHashtagsArr.join(', ')}`);
    hashtags.style.borderColor = '#FF5F49';
  } else if (hashtagsArr.length > MAX_HASHTAG_QUANTITY) {
    hashtags.setCustomValidity(`Нельзя указывать больше ${MAX_HASHTAG_QUANTITY} хэш-тегов. Просьба удалить лишние ${hashtagsArr.length - MAX_HASHTAG_QUANTITY}`);
    hashtags.style.borderColor = '#FF5F49';
  } else if (invalidHashtagsArr.length !== 0) {
    hashtags.setCustomValidity(`Некорректно введен хэш-тег: ${invalidHashtagsArr.join(', ')}`);
    hashtags.style.borderColor = '#FF5F49';
  } else {
    hashtags.setCustomValidity('');
    hashtags.style.borderColor = '';
  }
  hashtags.reportValidity();
};

hashtags.addEventListener('input', onHashtagsTextInput);

//отключает закрытие окна при фокусе в инпуте
hashtags.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

//проверка поля ввода комментария
const commentTextInput = () => {
  const valueLength = commentField.value.length;
  if (valueLength > COMMENT_MAX_LENGTH) {
    commentField.setCustomValidity(`Максимальная длина комментария 140 символов. Удалите лишние ${valueLength - COMMENT_MAX_LENGTH} симв.`);
    commentField.style.borderColor = '#FF5F49';
  } else {
    commentField.setCustomValidity('');
    commentField.style.borderColor = '';
  }
  commentField.reportValidity();
};

commentField.addEventListener('input', commentTextInput);

//отключает закрытие окна при фокусе в инпуте
commentField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

const hashtagValidate = () => {
  hashtags.addEventListener('input', onHashtagsTextInput);
};

const commentValidate = () => {
  commentField.addEventListener('input', commentTextInput);
};

export { hashtagValidate, commentValidate, hashtags, commentField, imageLoad, onHashtagsTextInput, commentTextInput };
