const getData = (onSuccess, onError) => {
  fetch('https://28.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch((err) => {
      onError(err);
    });
};

const sendData = (onSuccess, onFail, onFinally, body) => {
  fetch('https://28.javascript.pages.academy/kekstagram/', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onSuccess();
    })
    .finally(() => {
      onFinally();
    });
};

export { getData, sendData };
