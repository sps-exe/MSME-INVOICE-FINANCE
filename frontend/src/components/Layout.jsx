import React from 'react';
import DynamicBackground from './ui/DynamicBackground';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-msme-background p-4 md:p-8 flex items-center justify-center font-sans selection:bg-msme-accent selection:text-white">
            <div className="w-full max-w-[1400px] bg-msme-surface rounded-[2rem] shadow-2xl overflow-hidden relative border border-white/5 ring-1 ring-white/10 m-auto min-h-[90vh]">
                <DynamicBackground />
                <div className="relative z-10 flex flex-col min-h-[90vh]">
                    <Navbar />
                    <main className="flex-grow p-6 md:p-12">
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;
