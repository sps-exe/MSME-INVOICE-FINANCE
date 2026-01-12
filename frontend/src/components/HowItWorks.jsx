import React from 'react';
import { RevealImageList } from './ui/reveal-image-list';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-32 bg-transparent border-t border-msme-border/50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-serif font-medium text-msme-text-primary mb-16 text-center animate-fade-in">
                    How it works
                </h2>

                <RevealImageList />
            </div>
        </section>
    );
};

export default HowItWorks;
