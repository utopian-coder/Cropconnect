import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000' });
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getTimelinePosts= (id)=> API.get(`/post/${id}/timeline`);
export const likePost = async (id, userId) => {
  try {
    const response = await API.put(`/post/${id}/like`, { userId });
    return response.data; // Return the response data if needed
  } catch (error) {
    console.error('Error liking post:', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};