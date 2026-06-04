const experiences = [
    {
        period: "2014 - Present",
        role: "Freelance Web Developer",
        company: "Self-Employed",
        description:
            "Developed responsive WordPress websites from scratch for clients in eCommerce, education, and SaaS industries. Integrated third-party APIs including payment gateways, CRMs, and marketing tools to improve automation and conversions.",
        technologies: [
            "Wordpress",
            "Javascript",
            "React",
            "API Integration",
            "HTML",
            "CSS",
            "Git",
        ],
        current: true,
    },
    {
        period: "2019 - 2022",
        role: "Web Developer & QA Specialist",
        company: "Accentuate",
        description:
            "Led QA initiatives for 20+ client websites, implementing testing protocols that reduced post-deployment bugs by 35%. Built high-quality WordPress features with clean, maintainable code aligned with best development practices.",
        technologies: ["Wordpress", "Divi", "Quality Assurance"],
        current: false,
    },
    {
        period: "2014 - 2019",
        role: "Web Developer",
        company: "Platyppines Media Solutions",
        description:
            "Maintained and improved 20+ WordPress sites, ensuring uptime, security, and SEO readiness. Resolved 100+ technical issues related to server, DNS, and plugin conflicts.",
        technologies: ["HTML", "CSS", "JavaScript", "WordPress", "DNS"],
        current: false,
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute rounded-full bg-primary/5 blur-3xl w-96 h-96 top-1/2 left-1/4 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-muted-foreground uppercase tracking-wider font-medium text-sm animate-fade-in">
                        My Journey
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Professional
                        <span className="font-serif italic text-primary font-normal">
                            {" "}
                            experience
                        </span>
                    </h2>
                </div>

                {/* Experience Timeline */}
                <div className="relative">
                    {/* Vertical Timeline */}
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent transform md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{
                                    animationDelay: `${(index + 1) * 150}ms`,
                                }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-green-500 rounded-full ring-4 ring-background -translate-x-1/2">
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    )}
                                </div>

                                {/* Content */}
                                <div
                                    className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                                >
                                    <div className="glass p-6 rounded-2xl border border-primary/40 hover:border-primary transition-all duration-500">
                                        <span className="text-primary font-medium text-sm">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2">
                                            {exp.role}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {exp.company}
                                        </p>
                                        <p className="text-muted-foreground mt-4 text-sm">
                                            {exp.description}
                                        </p>
                                        <div
                                            className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                                        >
                                            {exp.technologies.map(
                                                (tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-primary/10 rounded-full px-3 py-1 text-xs font-medium border border-border/60 text-muted-foreground hover:border-primary hover:text-secondary-foreground transition-all duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
