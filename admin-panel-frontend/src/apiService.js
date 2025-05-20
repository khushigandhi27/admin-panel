// src/api/apiService.js
import axios from "axios";

// Base Axios Instance
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL, // Using the environment variable
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ API Interceptor for Error Handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// ✅ API Functions
export const fetchTests = async () => {
  const res = await api.get("/api/test/get-all");
  return res.data;
};

export const uploadTestFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await api.post("/api/test/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Add more functions as needed for other APIs (Tasks, Users, Subscriptions)
