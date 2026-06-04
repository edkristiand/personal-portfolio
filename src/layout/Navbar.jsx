import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import { use, useState, useEffect } from "react";

const NavLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.warn(`Element with ID "${targetId}" not found.`);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "bg-transparent py-5"}`}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a
                    href="#"
                    className="text-xl font-bold tracking-tight hover:text-primary transition-colors duration-300"
                >
                    ED<span className="text-primary">.</span>
                </a>

                {/* DESKTOP Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
                        {NavLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-full hover:bg-surface"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button
                        className="cursor-pointer"
                        size="sm"
                        onClick={handleScroll}
                    >
                        Contact Me
                    </Button>
                </div>

                {/* MOBILE Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu (hidden by default) */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto p-6 flex flex-col gap-4">
                        {NavLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-lg text-muted-foreground hover:text-foreground py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}

                        <Button onClick={() => setIsMobileMenuOpen(false)}>
                            Contact Me
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};
