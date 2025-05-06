import axios from "axios";

const BASE_URL = "https://api.pexels.com/v1/search";
const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      query,
      page,
      per_page: 12,
    },
  });

  return {
    results: response.data.photos,
    total_results: response.data.total_results,
    next_page: response.data.next_page,
  };
};
