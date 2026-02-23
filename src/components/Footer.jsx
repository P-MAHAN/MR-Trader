import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react'
import logo from '../assets/logo.jpeg'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
]

const services = [
    'Interior Painting',
    'Exterior Painting',
    'Residential Painting',
    'Commercial Painting',
    'Decorative Finishes',
    'Protective Coatings',
]

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    const handleNav = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="bg-gray-950 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-14">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <img src={logo} alt="MR TRADERS" className="h-16 w-auto object-contain mb-5 brightness-200" />
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            MR TRADERS — your trusted partner for premium residential and commercial painting services.
                            Quality you can see, results that last.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook size={16} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={16} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-white/10 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={16} />
                            </a>
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white text-base mb-5 uppercase tracking-wide">Quick Links</h3>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                                        className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-orange-500 rounded-full group-hover:w-3 transition-all duration-300" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-white text-base mb-5 uppercase tracking-wide">Services</h3>
                        <ul className="space-y-3">
                            {services.map((svc) => (
                                <li key={svc}>
                                    <a
                                        href="#services"
                                        onClick={(e) => { e.preventDefault(); handleNav('#services') }}
                                        className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-orange-500 rounded-full group-hover:w-3 transition-all duration-300" />
                                        {svc}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-white text-base mb-5 uppercase tracking-wide">Contact Us</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:+919876543210" className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors group">
                                    <div className="w-8 h-8 bg-white/10 group-hover:bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                                        <Phone size={14} />
                                    </div>
                                    <span className="pt-1">+91 98765 43210</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors group">
                                    <div className="w-8 h-8 bg-white/10 group-hover:bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                                        <MessageCircle size={14} />
                                    </div>
                                    <span className="pt-1">WhatsApp Us</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@mrtraders.in" className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors group">
                                    <div className="w-8 h-8 bg-white/10 group-hover:bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                                        <Mail size={14} />
                                    </div>
                                    <span className="pt-1">info@mrtraders.in</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-gray-400 text-sm">
                                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin size={14} />
                                    </div>
                                    <span className="pt-1">Mumbai, Maharashtra, India</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Bottom Bar */}
            <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                <p className="text-gray-500 text-sm text-center">
                    © {new Date().getFullYear()} MR TRADERS. All Rights Reserved.
                    Built with ❤️ in India.
                </p>
                <button
                    onClick={scrollToTop}
                    className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={18} />
                </button>
            </div>
        </footer>
    )
}
