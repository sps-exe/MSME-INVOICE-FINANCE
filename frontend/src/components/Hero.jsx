import React from 'react';
import { WarpBackground } from './ui/warp-background';
import { ContainerScroll } from './ui/container-scroll-animation';


const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-transparent">
            <ContainerScroll
                titleComponent={
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl md:text-8xl font-bold font-serif text-msme-text-primary tracking-tight mb-6 leading-[1.1]">
                            Get paid for your work. <br />
                            <span className="italic text-msme-text-primary">Today.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-msme-text-secondary mb-10 max-w-lg leading-relaxed">
                            Turn your unpaid invoices into working capital. Simple, transparent, and built for your business growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center">
                            <button className="bg-msme-accent hover:bg-msme-accent-hover text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[160px]">
                                Get Started
                            </button>
                            <button className="bg-white border border-msme-border text-msme-text-primary hover:bg-gray-50 px-8 py-3.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md min-w-[160px]">
                                Login
                            </button>
                        </div>
                    </div>
                }
            >
                <WarpBackground className="w-full h-full rounded-2xl bg-white flex items-center justify-center p-8">
                    <h3 className="text-4xl md:text-6xl font-serif font-bold text-center text-msme-text-primary leading-tight">
                        Get paid faster on your <br />
                        <span className="text-msme-accent italic">unpaid invoices.</span>
                    </h3>
                </WarpBackground>
            </ContainerScroll>
        </section>
    );
};

export default Hero;
