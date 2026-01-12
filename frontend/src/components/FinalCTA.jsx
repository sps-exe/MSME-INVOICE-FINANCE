import React from 'react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

const FinalCTA = () => {
    return (
        <section className="py-24 bg-transparent">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-msme-text-primary mb-8">
                    Ready to optimize your working capital?
                </h2>
                <div className="flex justify-center">
                    <InteractiveHoverButton text="Get Started Now" className="min-w-[200px]" />
                </div>
                <p className="mt-6 text-sm text-msme-text-secondary">
                    No credit card required for setup. Fast approval.
                </p>
            </div>
        </section>
    );
};

export default FinalCTA;
