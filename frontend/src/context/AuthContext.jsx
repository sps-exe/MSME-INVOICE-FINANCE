import React, { createContext, useContext, useState, useEffect } from 'react';
import * as authApi from '../api/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Sync token with localStorage
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const login = async (email, password) => {
        try {
            setLoading(true);
            const data = await authApi.login(email, password);
            // Backend returns { access_token, token_type }
            setToken(data.access_token);
            return data;
        } finally {
            setLoading(false);
        }
    };

    const signup = async (email, password) => {
        try {
            setLoading(true);
            await authApi.signup(email, password);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setToken(null);
    };

    const getRole = () => {
        if (!token) return null;
        try {
            // Simple decode to check if user is admin
            const payload = JSON.parse(atob(token.split('.')[1]));
            // For MVP, we'll check if email is admin@msme.fi since we haven't added role to JWT payload yet
            return payload.sub === "admin@msme.fi" ? "ADMIN" : "USER";
        } catch (e) {
            return null;
        }
    };

    const isAdmin = getRole() === 'ADMIN';

    return (
        <AuthContext.Provider value={{ token, login, signup, logout, isAuthenticated: !!token, loading, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
