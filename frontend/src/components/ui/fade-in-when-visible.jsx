import React from 'react';
import { motion } from 'motion/react';

export const FadeInWhenVisible = ({ children, className, delay = 0 }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
