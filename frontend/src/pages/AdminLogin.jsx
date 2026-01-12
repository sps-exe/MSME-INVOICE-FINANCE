import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';

const AdminLogin = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            // Hardcoded check for MVP/Demo purposes to prevent non-admins from confusing themselves
            if (email !== 'admin@msme.fi') {
                setError("Access Denied. Admin portal only.");
                return;
            }
            await login(email, password);
            navigate('/admin/dashboard');
        } catch (err) {
            setError(err.response?.data?.detail || 'Invalid credentials');
        }
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto py-10">
                <div className="bg-msme-accent/10 p-3 rounded-full mb-4 border border-msme-accent/20">
                    <span className="text-msme-accent font-mono text-sm">ADMIN PORTAL</span>
                </div>
                <h1 className="text-4xl font-serif text-white mb-8">Admin Login</h1>
                {error && <div className="w-full bg-red-500/20 border border-red-500/50 text-white p-3 rounded-xl mb-4 text-center">{error}</div>}

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-400 text-sm">Admin Email</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-msme-accent transition-all"
                            placeholder="admin@msme.fi"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-400 text-sm">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-msme-accent transition-all"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-center mt-4">
                        <InteractiveHoverButton text="Access Dashboard" type="submit" />
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default AdminLogin;
