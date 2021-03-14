const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';
const errorMessage = 'No matches were found! Try again :)';

const url = `https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12`;
