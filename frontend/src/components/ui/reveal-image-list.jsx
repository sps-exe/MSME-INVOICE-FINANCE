import { cn } from "../../lib/utils";

function RevealImageListItem({ text, subtext, images }) {
    const container = "absolute right-0 top-1/2 -translate-y-1/2 z-40 h-32 w-24 md:h-40 md:w-32 pointer-events-none";
    const effect =
        "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-full h-full overflow-hidden transition-all rounded-xl border border-white/20";

    return (
        <div className="group relative w-full border-b border-msme-border/40 py-12 cursor-pointer transition-colors hover:bg-msme-text-secondary/5">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 px-4 md:px-8">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-msme-text-primary transition-all duration-500 group-hover:opacity-100 opacity-80">
                    {text}
                </h3>
                <p className="text-msme-text-secondary text-lg max-w-sm transition-all duration-500 group-hover:text-msme-text-primary">
                    {subtext}
                </p>
            </div>

            <div className={container}>
                <div className={effect}>
                    <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
                </div>
            </div>
            <div
                className={cn(
                    container,
                    "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-12 group-hover:rotate-12",
                )}
            >
                <div className={cn(effect, "duration-200")}>
                    <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export function RevealImageList() {
    const items = [
        {
            text: "01. Upload Invoice",
            subtext: "Submit your outstanding B2B invoices directly to our secure platform in seconds.",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&auto=format&fit=crop&q=60",
                    alt: "Invoice Paperwork",
                },
                {
                    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60",
                    alt: "Digital Upload",
                },
            ],
        },
        {
            text: "02. Instant Approval",
            subtext: "Our AI-driven engine assesses risk and offers terms instantly. No paperwork, no waiting.",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=60",
                    alt: "Data Analysis",
                },
                {
                    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&auto=format&fit=crop&q=60",
                    alt: "Approval Check",
                },
            ],
        },
        {
            text: "03. Receive Funds",
            subtext: "Get up to 90% of the invoice value transferred to your account within 24 hours.",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&auto=format&fit=crop&q=60",
                    alt: "Money Transfer",
                },
                {
                    src: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=400&auto=format&fit=crop&q=60",
                    alt: "Growth",
                },
            ],
        },
    ];

    return (
        <div className="flex flex-col w-full">
            {items.map((item, index) => (
                <RevealImageListItem key={index} text={item.text} subtext={item.subtext} images={item.images} />
            ))}
        </div>
    );
}
