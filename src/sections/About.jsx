import { Code2, Headset, Lightbulb, ShieldCheck } from "lucide-react";

const hightlights = [
    {
        icon: Code2,
        title: "Web Development",
        description:
            "Create and maintain custom WordPress websites tailored to clients’ needs, ensuring they are secure, fast, and visually engaging.",
    },
    {
        icon: Headset,
        title: "Active Support",
        description:
            "Offer dedicated client website support to keep WordPress sites running smoothly, updated, and fully optimized.",
    },
    {
        icon: ShieldCheck,
        title: "Quality Assurance",
        description:
            "Perform comprehensive website QA to ensure every WordPress site is fully functional, error-free, and delivers an optimal user experience.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Innovative Web Developer focused on custom solutions, automation, and performance optimization.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-seconday-foreground uppercase tracking-wider font-medium text-sm">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic text-primary font-normal">
                                {" "}
                                one line of code at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I’m a Web Developer with 10+ years of experience
                                creating responsive WordPress websites, custom
                                themes, plugins, and web applications. I
                                specialize in performance optimization, API
                                integrations, QA testing, and building
                                user-friendly digital solutions for businesses
                                across different industries.
                            </p>

                            <p>
                                I’ve developed 50+ websites and mobile-ready
                                solutions while helping clients improve site
                                performance, automation, and overall user
                                experience. I’m passionate about clean code,
                                problem-solving, and delivering reliable,
                                high-quality work that drives results.
                            </p>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {hightlights.map((item, index) => (
                            <div
                                key={index}
                                className="glass rounded-2xl p-6 flex flex-col items-start gap-4 animate-fade-in"
                                style={{
                                    animationDelay: `${(index + 1) * 100}ms`,
                                }}
                            >
                                <div className="bg-primary text-white rounded-full p-3">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-secondary-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
