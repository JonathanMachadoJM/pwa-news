const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const URL = 'http://localhost:3000/api';

const getNews = (subject) => {
  return fetch(`${URL}/${subject}`, params)
    .then((response) => response.json())
    .catch((err) => {
      console.error('Ocorreu um erro', err);
    });
}

const getNewsById = (subject, id) => {
  return fetch(`${URL}/${subject}/${id}`, params)
    .then((response) => response.json())
    .catch((err) => {
      console.error('Ocorreu um erro', err);
    });
}

export default {
  getNews,
  getNewsById,
};
