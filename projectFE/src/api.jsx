import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const signup = async (userData) => {
    const res = await axios.post(`${API_URL}/signup`, userData);
    return res.data;
};

export const login = async (userData) => {
    const res = await axios.post(`${API_URL}/login`, userData);
    return res.data;
};

export const changePassword = async (token, passwordData) => {
    const res = await axios.put(`${API_URL}/change-password`, passwordData, {
        headers: { 'x-auth-token': token }
    });
    return res.data;
};
export const logout = () => {
    localStorage.removeItem('token');
};

export const deleteAccount = async (token) => {
    const res = await axios.delete(`${API_URL}/delete-account`, {
        headers: { 'x-auth-token': token }
    });
    return res.data;
};
