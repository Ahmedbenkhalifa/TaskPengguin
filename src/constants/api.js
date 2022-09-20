export const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

export const showAPI = {
  FETCHSHOW: `${BASE_URL}/search/tv?api_key=${API_KEY}`,
  GETDETAILS: `${BASE_URL}/tv/`,
  APIKEY: `?api_key=${API_KEY}&language=en-US`,
};
