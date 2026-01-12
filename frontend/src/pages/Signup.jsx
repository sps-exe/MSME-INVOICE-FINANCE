import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';

const Signup = () => {
    const { signup, loading } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signup(email, password);
            // Redirect to login after successful signup
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.detail || 'Signup failed. Email might be in use.');
        }
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto py-10">
                <h1 className="text-4xl font-serif text-white mb-8">Sign Up</h1>
                {error && <div className="w-full bg-red-500/20 border border-red-500/50 text-white p-3 rounded-xl mb-4 text-center">{error}</div>}

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-400 text-sm">Email</label>
                        <input
                            type="email"
                            required
                            disabled={loading}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-msme-accent transition-all disabled:opacity-50"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-400 text-sm">Password</label>
                        <input
                            type="password"
                            required
                            disabled={loading}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-msme-accent transition-all disabled:opacity-50"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-center mt-4">
                        <InteractiveHoverButton
                            text={loading ? "Creating Account..." : "Create Account"}
                            type="submit"
                            disabled={loading}
                        />
                    </div>
                </form>

                <p className="mt-8 text-gray-400">
                    Already have an account? <Link to="/login" className="text-msme-accent hover:text-white transition-colors">Login</Link>
                </p>
            </div>
        </Layout>
    );
};

export default Signup;
