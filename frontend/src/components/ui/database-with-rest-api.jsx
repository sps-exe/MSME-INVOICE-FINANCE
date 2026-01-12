import React from "react";
import { motion } from "motion/react";
import { Folder, HeartHandshakeIcon, SparklesIcon } from "lucide-react";
import { cn } from "../../lib/utils";

const DatabaseIcon = ({ x = "0", y = "0", className }) => {
    return (
        <svg
            x={x}
            y={y}
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    );
};

const DatabaseWithRestApi = ({
    className,
    circleText,
    badgeTexts,
    buttonTexts,
    title,
    lightColor,
}) => {
    return (
        <div
            className={cn(
                "relative flex h-[350px] w-full max-w-[500px] flex-col items-center select-none",
                className
            )}
        >
            {/* SVG Paths  */}
            <svg
                className="h-full sm:w-full text-msme-text-secondary"
                width="100%"
                height="100%"
                viewBox="0 0 200 100"
            >
                <g
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    strokeDasharray="100 100"
                    pathLength="100"
                >
                    <path d="M 25 10 v 15 q 0 5 5 5 h 65 q 5 0 5 5 v 10" />
                    <path d="M 75 10 v 10 q 0 5 5 5 h 15 q 5 0 5 5 v 10" />
                    <path d="M 125 10 v 10 q 0 5 -5 5 h -15 q -5 0 -5 5 v 10" />
                    <path d="M 175 10 v 15 q 0 5 -5 5 h -65 q -5 0 -5 5 v 10" />
                    {/* Animation For Path Starting */}
                    <animate
                        attributeName="stroke-dashoffset"
                        from="100"
                        to="0"
                        dur="3s"
                        repeatCount="indefinite"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.25,0.1,0.5,1"
                        keyTimes="0; 1"
                    />
                </g>
                {/* Blue Lights */}
                <g mask="url(#db-mask-1)">
                    <circle
                        className="database db-light-1"
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#db-blue-grad)"
                    />
                </g>
                <g mask="url(#db-mask-2)">
                    <circle
                        className="database db-light-2"
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#db-blue-grad)"
                    />
                </g>
                <g mask="url(#db-mask-3)">
                    <circle
                        className="database db-light-3"
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#db-blue-grad)"
                    />
                </g>
                <g mask="url(#db-mask-4)">
                    <circle
                        className="database db-light-4"
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#db-blue-grad)"
                    />
                </g>
                {/* Buttons - Clean Black/White Design */}
                <g stroke="none">
                    {/* First Button */}
                    <g className="group/btn cursor-pointer">
                        <rect
                            className="fill-[#1A1A1A] transition-colors duration-300 group-hover/btn:fill-[#9C6644]"
                            x="2"
                            y="5"
                            width="46"
                            height="14"
                            rx="7"
                        ></rect>
                        <DatabaseIcon x="6" y="9.5" className="text-white"></DatabaseIcon>
                        <text
                            x="16"
                            y="14.5"
                            fill="white"
                            stroke="none"
                            fontSize="6"
                            fontWeight="600"
                            className="pointer-events-none"
                        >
                            {badgeTexts?.first || "FETCH"}
                        </text>
                    </g>
                    {/* Second Button */}
                    <g className="group/btn cursor-pointer">
                        <rect
                            className="fill-[#1A1A1A] transition-colors duration-300 group-hover/btn:fill-[#9C6644]"
                            x="52"
                            y="5"
                            width="46"
                            height="14"
                            rx="7"
                        ></rect>
                        <DatabaseIcon x="56" y="9.5" className="text-white"></DatabaseIcon>
                        <text
                            x="66"
                            y="14.5"
                            fill="white"
                            stroke="none"
                            fontSize="6"
                            fontWeight="600"
                            className="pointer-events-none"
                        >
                            {badgeTexts?.second || "SUBMIT"}
                        </text>
                    </g>
                    {/* Third Button */}
                    <g className="group/btn cursor-pointer">
                        <rect
                            className="fill-[#1A1A1A] transition-colors duration-300 group-hover/btn:fill-[#9C6644]"
                            x="102"
                            y="5"
                            width="46"
                            height="14"
                            rx="7"
                        ></rect>
                        <DatabaseIcon x="106" y="9.5" className="text-white"></DatabaseIcon>
                        <text
                            x="116"
                            y="14.5"
                            fill="white"
                            stroke="none"
                            fontSize="6"
                            fontWeight="600"
                            className="pointer-events-none"
                        >
                            {badgeTexts?.third || "APPROVE"}
                        </text>
                    </g>
                    {/* Fourth Button */}
                    <g className="group/btn cursor-pointer">
                        <rect
                            className="fill-[#1A1A1A] transition-colors duration-300 group-hover/btn:fill-[#9C6644]"
                            x="152"
                            y="5"
                            width="46"
                            height="14"
                            rx="7"
                        ></rect>
                        <DatabaseIcon x="156" y="9.5" className="text-white"></DatabaseIcon>
                        <text
                            x="166"
                            y="14.5"
                            fill="white"
                            stroke="none"
                            fontSize="6"
                            fontWeight="600"
                            className="pointer-events-none"
                        >
                            {badgeTexts?.fourth || "CLOSE"}
                        </text>
                    </g>
                </g>
                <defs>
                    {/* 1 -  user list */}
                    <mask id="db-mask-1">
                        <path
                            d="M 25 10 v 15 q 0 5 5 5 h 65 q 5 0 5 5 v 10"
                            strokeWidth="0.5"
                            stroke="white"
                        />
                    </mask>
                    {/* 2 - task list */}
                    <mask id="db-mask-2">
                        <path
                            d="M 75 10 v 10 q 0 5 5 5 h 15 q 5 0 5 5 v 10"
                            strokeWidth="0.5"
                            stroke="white"
                        />
                    </mask>
                    {/* 3 - backlogs */}
                    <mask id="db-mask-3">
                        <path
                            d="M 125 10 v 10 q 0 5 -5 5 h -15 q -5 0 -5 5 v 10"
                            strokeWidth="0.5"
                            stroke="white"
                        />
                    </mask>
                    {/* 4 - misc */}
                    <mask id="db-mask-4">
                        <path
                            d="M 175 10 v 15 q 0 5 -5 5 h -65 q -5 0 -5 5 v 10"
                            strokeWidth="0.5"
                            stroke="white"
                        />
                    </mask>
                    {/* Blue Grad */}
                    <radialGradient id="db-blue-grad" fx="1">
                        <stop offset="0%" stopColor={lightColor || "#9C6644"} />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
            </svg>
            {/* Main Box */}
            <div className="absolute bottom-10 flex w-full flex-col items-center">
                {/* bottom shadow */}
                <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-[#9C6644]/20 blur-xl" />
                {/* box title */}
                <div className="absolute -top-3 z-20 flex items-center justify-center rounded-full border border-msme-border bg-[#1A1A1A] px-3 py-1 sm:-top-4 sm:py-1.5 shadow-lg">
                    <SparklesIcon className="size-3 text-[#FDFBF7]" />
                    <span className="ml-2 text-xs text-[#FDFBF7] font-medium tracking-wide">
                        {title ? title : "Data exchange using a customized REST API"}
                    </span>
                </div>
                {/* box outter circle */}
                <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border border-t border-msme-border bg-[#1A1A1A] font-semibold text-sm text-[#FDFBF7] shadow-xl">
                    {circleText ? circleText : "API"}
                </div>
                {/* box content */}
                <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-xl border border-msme-border bg-[#FDFBF7] shadow-md">
                    {/* Badges */}
                    <div className="absolute bottom-8 left-8 z-10 h-8 rounded-full bg-[#1A1A1A] px-4 text-sm border border-msme-border flex items-center gap-2 text-[#FDFBF7] shadow-lg">
                        <HeartHandshakeIcon className="size-3" />
                        <span>{buttonTexts?.first || "LegionDev"}</span>
                    </div>
                    <div className="absolute top-8 right-8 z-10 h-8 rounded-full bg-[#1A1A1A] px-4 text-sm sm:flex border border-msme-border items-center gap-2 text-[#FDFBF7] shadow-lg">
                        <Folder className="size-3" />
                        <span>{buttonTexts?.second || "v2_updates"}</span>
                    </div>
                    {/* Circles */}
                    <motion.div
                        className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t border-msme-accent/40 bg-msme-accent/5"
                        animate={{
                            scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t border-msme-accent/40 bg-msme-accent/5"
                        animate={{
                            scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t border-msme-accent/40 bg-msme-accent/5"
                        animate={{
                            scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </div>
        </div>
    );
};

export default DatabaseWithRestApi;
