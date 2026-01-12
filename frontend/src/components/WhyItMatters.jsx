import React from 'react';
import DatabaseWithRestApi from './ui/database-with-rest-api';
import { GlowingEffect } from './ui/glowing-effect';

const WhyItMatters = () => {
    return (
        <section id="why-it-matters" className="py-32 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-msme-text-primary text-center mb-8">
                        Seamless Integration
                    </h2>
                    <p className="text-msme-text-secondary text-center max-w-2xl text-xl">
                        No paperwork. Faster access to working capital.
                    </p>
                </div>

                <div className="flex flex-col xl:flex-row items-center justify-center gap-16">
                    {/* Visual with Glowing Effect */}
                    <div className="w-full xl:w-5/12 flex justify-center relative">
                        <div className="relative rounded-3xl p-1">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={2}
                                variant="default"
                            />
                            <div className="relative z-10 bg-white/50 rounded-2xl p-6 backdrop-blur-sm">
                                <DatabaseWithRestApi
                                    title="Financing Engine"
                                    circleText="API"
                                    badgeTexts={{
                                        first: "FETCH",
                                        second: "SUBMIT",
                                        third: "APPROVE",
                                        fourth: "CLOSE"
                                    }}
                                    buttonTexts={{
                                        first: "Platform",
                                        second: "Bank"
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Explainer Grid - Now with Card Styles */}
                    <div className="w-full xl:w-7/12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-msme-border/60 rounded-3xl bg-msme-surface/30">
                            {/* Step 1 */}
                            <div className="relative h-full rounded-2xl">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative z-10 h-full p-6 rounded-2xl bg-[#FDFBF7] border border-msme-border">
                                    <div className="text-xs font-mono text-msme-text-secondary uppercase tracking-widest border-b border-msme-border pb-2 mb-4 w-fit">
                                        Step 01
                                    </div>
                                    <h3 className="text-xl font-bold font-serif text-msme-text-primary mb-3">Fetch invoice details</h3>
                                    <p className="text-sm text-msme-text-secondary leading-relaxed">
                                        Securely read invoice and buyer information from your system.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative h-full rounded-2xl">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative z-10 h-full p-6 rounded-2xl bg-[#FDFBF7] border border-msme-border">
                                    <div className="text-xs font-mono text-msme-text-secondary uppercase tracking-widest border-b border-msme-border pb-2 mb-4 w-fit">
                                        Step 02
                                    </div>
                                    <h3 className="text-xl font-bold font-serif text-msme-text-primary mb-3">Submit for financing</h3>
                                    <p className="text-sm text-msme-text-secondary leading-relaxed">
                                        Upload an unpaid invoice to request early payment.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative h-full rounded-2xl">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative z-10 h-full p-6 rounded-2xl bg-[#FDFBF7] border border-msme-border">
                                    <div className="text-xs font-mono text-msme-text-secondary uppercase tracking-widest border-b border-msme-border pb-2 mb-4 w-fit">
                                        Step 03
                                    </div>
                                    <h3 className="text-xl font-bold font-serif text-msme-text-primary mb-3">Approve financing</h3>
                                    <p className="text-sm text-msme-text-secondary leading-relaxed">
                                        Confirm the offer and update invoice status instantly.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative h-full rounded-2xl">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative z-10 h-full p-6 rounded-2xl bg-[#FDFBF7] border border-msme-border">
                                    <div className="text-xs font-mono text-msme-text-secondary uppercase tracking-widest border-b border-msme-border pb-2 mb-4 w-fit">
                                        Step 04
                                    </div>
                                    <h3 className="text-xl font-bold font-serif text-msme-text-primary mb-3">Close invoice</h3>
                                    <p className="text-sm text-msme-text-secondary leading-relaxed">
                                        Mark the invoice as settled after payment completion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-msme-text-secondary text-base">
                        <span className="font-semibold text-msme-text-primary">Secure invoice processing:</span> All actions are handled through structured and compliant APIs.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyItMatters;
