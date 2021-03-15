import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';

// const url = `https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12`;

function fetchImages() {
  return axios
    .get(
      `https://pixabay.com/api/?q=moon&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
}

export { fetchImages };
