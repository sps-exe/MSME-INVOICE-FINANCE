import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import WhyItMatters from '../components/WhyItMatters';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

import DynamicBackground from '../components/ui/DynamicBackground';

import { FadeInWhenVisible } from '../components/ui/fade-in-when-visible';

const Landing = () => {
    return (
        <div className="min-h-screen bg-msme-background p-4 md:p-8 flex items-center justify-center font-sans selection:bg-msme-accent selection:text-white">
            <div className="w-full max-w-[1400px] bg-msme-surface rounded-[2rem] shadow-2xl overflow-hidden relative border border-white/5 ring-1 ring-white/10 m-auto">
                <DynamicBackground />
                <div className="relative z-10">
                    <Navbar />
                    <main>
                        <Hero />
                        <FadeInWhenVisible>
                            <HowItWorks />
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                            <Benefits />
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                            <WhyItMatters />
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                            <FinalCTA />
                        </FadeInWhenVisible>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Landing;
