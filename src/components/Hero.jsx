import { ChevronDown, ArrowRight } from 'lucide-react'
import heroBg from '../assets/image1.jpeg'

export default function Hero() {
    const handleScroll = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            {/* Dark + Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 via-brand-blue-dark/80 to-black/70" />

            {/* Decorative shapes */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand-blue-light/10 rounded-full blur-3xl animate-pulse" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white pt-24 pb-16">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm animate-fade-in">
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                    Trusted Professional Painters
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight text-shadow">
                    Premium Painting Services
                    <br />
                    <span className="text-orange-400">for Homes & Businesses</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto font-light text-shadow-sm">
                    Transforming spaces with color, quality, and care.
                </p>
                <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto text-shadow-sm">
                    🔥 Beautifying Homes & Businesses with Professional Painting Solutions.
                    Precision, Protection & Performance in Every Brush Stroke.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
                        className="btn-primary text-base px-10 py-4 shadow-2xl shadow-orange-500/30"
                    >
                        Get a Free Quote
                        <ArrowRight size={20} />
                    </a>
                    <a
                        href="#services"
                        onClick={(e) => { e.preventDefault(); handleScroll('#services') }}
                        className="btn-secondary text-base px-10 py-4"
                    >
                        View Our Services
                    </a>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                    {[
                        { number: '500+', label: 'Projects Completed' },
                        { number: '10+', label: 'Years Experience' },
                        { number: '98%', label: 'Satisfied Clients' },
                        { number: '100%', label: 'Quality Guaranteed' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                            <div className="text-2xl md:text-3xl font-black text-orange-400">{stat.number}</div>
                            <div className="text-xs md:text-sm text-gray-300 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 cursor-pointer animate-bounce"
                onClick={() => handleScroll('#about')}
            >
                <span className="text-xs font-medium tracking-wider uppercase">Scroll Down</span>
                <ChevronDown size={20} />
            </div>
        </section>
    )
}
