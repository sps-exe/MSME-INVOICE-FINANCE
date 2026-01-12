import React, { useRef, useEffect } from 'react';
import { useMousePositionRef } from '../../hooks/useMousePositionRef';

const DynamicBackground = ({ className }) => {
    const containerRef = useRef(null);
    const mousePosRef = useMousePositionRef(containerRef);
    const spotlightRef = useRef(null);

    useEffect(() => {
        let animationFrameId;

        const animate = () => {
            if (spotlightRef.current) {
                const { x, y } = mousePosRef.current;
                // Update CSS variables for the spotlight position
                spotlightRef.current.style.setProperty('--mouse-x', `${x}px`);
                spotlightRef.current.style.setProperty('--mouse-y', `${y}px`);
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [mousePosRef]);

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}
        >
            {/* Animated Gradient Spotlight */}
            <div
                ref={spotlightRef}
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(
                        1200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                        rgba(156, 102, 68, 0.25), 
                        transparent 45%
                    )`
                }}
            />

            {/* Secondary Ambient Light fixed at top right */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />

            {/* Secondary Ambient Light fixed at bottom left */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-msme-accent-hover/5 rounded-full blur-3xl" />
        </div>
    );
};

export default DynamicBackground;
