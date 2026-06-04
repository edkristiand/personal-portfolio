import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "WSSA",
        description:
            "An E-Commerce website built for WSSA using Wordpress and Woocommerce.",
        image: "/projects/wssa.jpg",
        link: "https://wssa.com.au/",
        tags: ["Wordpress", "Woocommerce", "PHP"],
    },
    {
        title: "Proactive",
        description:
            "A Business Finance website built for Proactive using Bricks",
        image: "/projects/proactive.jpg",
        link: "https://proactive.net.au/",
        tags: ["Wordpress", "Bricks", "Gravity Forms"],
    },
    {
        title: "Expert Training Group",
        description:
            "A website built for Expert Training Group using Wordpress and Bricks.",
        image: "/projects/expert-training.jpg",
        link: "https://experttraininggroup.com.au/",
        tags: ["Wordpress", "Figma", "Bricks"],
    },
    {
        title: "Lash Sublime Couture",
        description:
            "A website built for Lash Sublime Couture using Wordpress and Woocommerce.",
        image: "/projects/sublime.jpg",
        link: "https://sublime-e.com/",
        tags: ["Wordpress", "Woocommerce", "Divi"],
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="absolute rounded-full bg-gradient-to-br from-primary/80 via-transparent to-primary/50 blur-2xl animate-pulse w-96 h-96 top-1/4 right-0" />
            <div className="absolute rounded-full bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse w-64 h-64 bottom-1/4 left-0" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-muted-foreground uppercase tracking-wider font-medium text-sm animate-fade-in">
                        Featured Work
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        See my
                        <span className="font-serif italic text-primary font-normal">
                            {" "}
                            latest work
                        </span>
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{
                                animationDelay: `${(index + 1) * 100}ms`,
                            }}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full object-cover object-top w-full transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-70" />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>

                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-primary/10 rounded-full px-4 py-1.5 text-xs font-medium border border-border/60 text-muted-foreground hover:border-primary hover:text-secondary-foreground transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
