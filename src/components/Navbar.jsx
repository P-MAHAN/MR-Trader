import { useState, useEffect } from 'react'
import { Phone, Menu, X, MessageCircle } from 'lucide-react'
import logo from '../assets/logo.jpeg'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar({ scrolled }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(l => l.href.slice(1))
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(sections[i])
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNav = (href) => {
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white shadow-xl py-2'
                    : 'bg-white/95 backdrop-blur-sm shadow-md py-3'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" onClick={() => handleNav('#home')} className="flex items-center gap-3 group">
                    <img
                        src={logo}
                        alt="MR TRADERS Logo"
                        className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${activeSection === link.href.slice(1)
                                    ? 'text-orange-500 bg-orange-50'
                                    : 'text-gray-700 hover:text-brand-blue hover:bg-blue-50'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Contact Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="https://wa.me/919876543210?text=Hello%2C%20I%20need%20a%20painting%20service%20quote"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow hover:shadow-md"
                    >
                        <MessageCircle size={16} />
                        WhatsApp
                    </a>
                    <a
                        href="tel:+919876543210"
                        className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow hover:shadow-md"
                    >
                        <Phone size={16} />
                        Call Now
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden p-2 rounded-lg text-brand-blue hover:bg-blue-50 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } bg-white border-t border-gray-100`}
            >
                <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                            className={`px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${activeSection === link.href.slice(1)
                                    ? 'text-orange-500 bg-orange-50'
                                    : 'text-gray-700 hover:text-brand-blue hover:bg-blue-50'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="flex gap-3 mt-2">
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold py-3 rounded-lg"
                        >
                            <MessageCircle size={16} /> WhatsApp
                        </a>
                        <a
                            href="tel:+919876543210"
                            className="flex-1 flex items-center justify-center gap-2 bg-brand-blue text-white text-sm font-semibold py-3 rounded-lg"
                        >
                            <Phone size={16} /> Call Now
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
