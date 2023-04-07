const sortBlock = document.querySelector('.img-filters'); // Блок сортировки
const sortDefault = sortBlock.querySelector('#filter-default'); // Кнопка сортировки «по умолчанию»
const sortRandom = sortBlock.querySelector('#filter-random'); // Кнопка сортировки «случайные»
const sortDiscussed = sortBlock.querySelector('#filter-discussed'); // Кнопка сортировки «обсуждаемые»

const sortInput = sortBlock.querySelector('#sort-input'); // Скрытый инпут

// Убирает скрывающий класс с блока сортировки.
const showSortBlock = () => {
  sortBlock.classList.remove('img-filters--inactive');
};

// Нажатие на кнопку "По умолчанию".
const sortDefaultClick = (cb) => {
  sortDefault.addEventListener('click', () => {
    sortDefault.classList.add('img-filters__button--active');
    sortRandom.classList.remove('img-filters__button--active');
    sortDiscussed.classList.remove('img-filters__button--active');

    sortInput.value = 'default';
    cb();
  });
};

// Нажатие на кнопку "Случайные".
const sortRandomClick = (cb) => {
  sortRandom.addEventListener('click', () => {
    sortDefault.classList.remove('img-filters__button--active');
    sortRandom.classList.add('img-filters__button--active');
    sortDiscussed.classList.remove('img-filters__button--active');

    sortInput.value = 'random';
    cb();
  });
};

// Нажатие на кнопку "Обсуждаемые".
const sortDiscussedClick = (cb) => {
  sortDiscussed.addEventListener('click', () => {
    sortDefault.classList.remove('img-filters__button--active');
    sortRandom.classList.remove('img-filters__button--active');
    sortDiscussed.classList.add('img-filters__button--active');

    sortInput.value = 'discussed';
    cb();
  });
};

// Функция сортировки изображений по id (по умолчанию)
const comparePicturesIds = (pictureA, pictureB) => {
  const rankIdA = pictureA.id;
  const rankIdB = pictureB.id;

  return rankIdA - rankIdB;
};

// Функция сортировки изображений по комментариям (обсуждаемые)
const comparePicturesComments = (pictureA, pictureB) => {
  const rankCommentsA = pictureA.comments.length;
  const rankCommentsB = pictureB.comments.length;

  return rankCommentsB - rankCommentsA;
};

export { showSortBlock, sortBlock, sortInput, comparePicturesIds, comparePicturesComments, sortDefaultClick, sortRandomClick, sortDiscussedClick };
