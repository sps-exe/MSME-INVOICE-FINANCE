import React from 'react';
import { BreakableCard } from './ui/breakable-card';



const Benefits = () => {
    return (
        <section id="benefits" className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-msme-text-primary mb-4 animate-fade-in">
                        Why leading MSMEs choose us.
                    </h2>
                    <p className="text-msme-text-secondary text-lg">
                        We strip away the complexity of traditional banking to give you speed and certainty.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <BreakableCard
                        title="Immediate Cash Flow"
                        description="Bridge the gap between work and payment. Reinvest in your growth today, not next month."
                    />

                    <BreakableCard
                        title="No Collateral Needed"
                        description="Funding is secured by the voice itself. Your assets stay yours."
                    />

                    <BreakableCard
                        title="One Simple Fee"
                        description="No hidden interest. No subscription costs. Just a transparent flat rate."
                    />

                    <BreakableCard
                        title="Built for Growth"
                        description="Designed specifically for the unique needs of scaling businesses."
                    />
                </div>
            </div>
        </section>
    );
};

export default Benefits;
