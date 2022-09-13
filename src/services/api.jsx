import axios from 'axios';

export const fetchImages = async (query, page) => {
  const response = axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=28448133-ce3e4c130a7fcd3dd0a288d2a&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};
