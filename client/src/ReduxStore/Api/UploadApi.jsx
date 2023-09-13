import axios from "axios";

// Create an Axios instance with the base URL
const API = axios.create({ baseURL: "http://localhost:5000" });

// Add an interceptor to attach the user's token to requests
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// Define a function to upload an image
export const uploadImage = (data) => {
  console.log("uploadImage data:", data); // Log the data before making the request
  return API.post("/upload", data);
};

// Define a function to upload a post
export const uploadPost = (data) => {
  console.log("uploadPost data:", data); // Log the data before making the request
  return API.post("/post", data);
};

// Export the API instance for usage in other parts of the application
export default API;
