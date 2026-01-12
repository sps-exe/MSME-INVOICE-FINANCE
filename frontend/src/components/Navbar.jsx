import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout, isAdmin } = useAuth();

    return (
        <nav className="absolute top-0 left-0 w-full z-50 pt-6 px-6 md:px-12 bg-transparent">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-msme-text-primary font-bold text-2xl tracking-tighter font-serif hover:opacity-80 transition-opacity">
                    msme<span className="text-msme-accent">.fi</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10">
                    <a href="/#how-it-works" className="text-msme-text-secondary hover:text-msme-text-primary transition-colors text-sm font-medium">About</a>
                    <a href="/#benefits" className="text-msme-text-secondary hover:text-msme-text-primary transition-colors text-sm font-medium">Features</a>
                    <a href="/#pricing" className="text-msme-text-secondary hover:text-msme-text-primary transition-colors text-sm font-medium">Pricing</a>
                </div>

                {/* CTA */}
                <div className="flex items-center space-x-4">
                    {isAuthenticated ? (
                        <>
                            <Link to={isAdmin ? "/admin/dashboard" : "/dashboard"} className="text-msme-text-primary hover:text-msme-accent transition-colors text-sm font-medium">
                                Dashboard
                            </Link>
                            <button onClick={logout} className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hidden md:block text-msme-text-primary hover:text-msme-accent transition-colors text-sm font-medium">
                                Login
                            </Link>
                            <Link to="/signup" className="bg-msme-text-primary hover:bg-msme-accent-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block">
                                Start selling
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
