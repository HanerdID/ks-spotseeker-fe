// src/api/auth.js
import axiosInstance from "./axiosConfig";

export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post("/login", { username, password });
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    return user; // Mengembalikan data user termasuk role
  } catch (error) {
    throw error;
  }
};

// src/api/auth.js
export const register = async (name, username, password) => {
  try {
    const response = await axiosInstance.post('/register', { name, username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// src/api/auth.js
export const getMe = async () => {
  try {
    const response = await axiosInstance.get('/me');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// src/api/auth.js
export const logout = async () => {
  try {
    await axiosInstance.delete('/logout');
    localStorage.removeItem('token');
  } catch (error) {
    throw error;
  }
};