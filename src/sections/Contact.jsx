import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "edkristian.daguit@gmail.com",
        href: "mailto:edkristian.daguit@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+63 916 4729660",
        href: "tel:+639164729660",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Cagayan de Oro City, Philippines",
        href: "#",
    },
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({
            type: null,
            message: "",
        });

        try {
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceID || !templateID || !publicKey) {
                throw new Error("EmailJS configuration is missing.");
            }

            await emailjs.send(
                serviceID,
                templateID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                publicKey,
            );

            setSubmitStatus({
                type: "success",
                message:
                    "Message sent successfully! I'll get back to you soon.",
            });

            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS error:", error);
            setSubmitStatus({
                type: "error",
                message:
                    error.text ||
                    "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }

        console.log(formData);
        // Reset form after submission
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute rounded-full bg-gradient-to-br from-primary/80 via-transparent to-primary/50 blur-2xl animate-pulse w-96 h-96 top-1/4 right-1/4" />
                <div className="absolute rounded-full bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse w-64 h-64 bottom-1/4 left-1/4" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-muted-foreground uppercase tracking-wider font-medium text-sm animate-fade-in">
                        Contact Me
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Get in
                        <span className="font-serif italic text-primary font-normal">
                            {" "}
                            Touch
                        </span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/50 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your name..."
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none h-32"
                                />
                            </div>

                            <Button
                                className="w-full cursor-pointer"
                                type="submit"
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </Button>

                            {submitStatus.type && (
                                <div className="flex justify-center background-muted/30 rounded-xl px-4 py-2">
                                    <p
                                        className={`text-sm ${
                                            submitStatus.type === "success"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {submitStatus.message}
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 bg-surface rounded-xl p-4 hover:bg-secondary/30 transition-all"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                                            <info.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">
                                                {info.label}
                                            </p>
                                            <p className="font-medium">
                                                {info.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
