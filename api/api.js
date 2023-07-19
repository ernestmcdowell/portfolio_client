require('dotenv').config();
import axios from 'axios';

const API_BASE_URL = 'https://beau.guru/'

const api = axios.create({
  baseURL: API_BASE_URL,
});


const fetchAdventurePhotos = async (page) => {
  try {
    const response = await api.get('api/images/', { params: { page } })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
    throw error;
  }

}


const fetchPosts = async () => {
  try {
    const response = await api.get('api/posts/');
    console.log(response.data)
    return response.data.results;;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};


async function fetchPostInfo(slug) {
  try {
    const response = await api.get(`api/posts/${slug}`);
    console.log(response.data);
    console.log(slug);
    return response.data;
  } catch (error) {
    console.error('Error fetching report data:', error);
    throw error;
  }
}

export default {
  fetchPosts,
  fetchPostInfo,
  fetchAdventurePhotos,
};
