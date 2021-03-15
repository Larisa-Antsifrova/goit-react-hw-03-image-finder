import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';

// const url = `https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12`;

function fetchImages(query, page, perPage = 12) {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(response => response.data.hits);
}

export { fetchImages };
