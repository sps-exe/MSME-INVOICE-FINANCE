import React, { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

const InteractiveHoverButton = forwardRef(({ text = "Button", className, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "group relative w-auto min-w-[140px] cursor-pointer overflow-hidden rounded-full border border-msme-accent bg-background p-2 px-6 py-3 text-center font-semibold",
                className,
            )}
            {...props}
        >
            <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-msme-text-primary">
                {text}
            </span>
            <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <span>{text}</span>
                <ArrowRight className="w-4 h-4" />
            </div>
            <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-msme-accent transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"></div>
        </button>
    );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
