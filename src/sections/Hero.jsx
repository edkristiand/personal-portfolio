import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown } from "lucide-react";

const skills = [
    "Wordpress",
    "ReactJS",
    "PHP",
    "JavaScript",
    "HTML/CSS",
    "SEO Optimization",
    "API Integration",
    "Custom Plugin Development",
    "WooCommerce",
    "Performance Optimization",
    "QA Standards",
];

const socials = [
    {
        title: "LinkedIn",
        href: "https://linkedin.com/in/edkristian",
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/edkristian.daguit123",
    },
];

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(40)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="relative animate-fade-in animation-delay-300">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img
                                    src="/prof-pic.jpg"
                                    alt="Edkristian Daguit"
                                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                                />

                                {/* Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-sm font-medium">
                                            Available for Work
                                        </span>
                                    </div>
                                </div>

                                {/* Stats Badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="text-2xl font-bold text-white">
                                        5+
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Years Exp.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-muted-foreground">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Wordpres Developer · ReactJS
                            </span>
                        </div>

                        {/* Title */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Edkristian{" "}
                                <span className="text-primary font-serif italic font-normal">
                                    Daguit
                                </span>
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Results-driven WordPress Developer with 10+
                                years of experience building scalable websites,
                                custom plugins, SEO, QA standard and API-driven
                                systems across eCommerce, SaaS, and education
                                industries.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animation-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">
                                Find me on:{" "}
                            </span>
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors glass rounded-full px-5 py-1"
                                >
                                    {social.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-20 animate-fade-in animation-delay-500">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Skills I have:
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-8 py-4"
                                >
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                    <span className="text-xs uppercase tracking-wider">
                        Scroll
                    </span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
};
