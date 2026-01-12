import api from './axios';

export const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
};

export const signup = async (email, password) => {
    const response = await api.post('/auth/signup', { email, password });
    return response.data;
};
