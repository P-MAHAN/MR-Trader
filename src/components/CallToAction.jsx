import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import heroBg from '../assets/image3.jpeg'

export default function CallToAction() {
    return (
        <section id="cta" className="relative py-24 overflow-hidden">
            {/* BG Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-orange-700/85 to-brand-blue/90" />

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                {/* Top badge */}
                <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-sm font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Free Consultation Available
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 max-w-3xl mx-auto leading-tight text-shadow">
                    Ready to Transform Your Space?
                </h2>

                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-shadow-sm">
                    Get a free consultation and personalized quote from MR TRADERS' expert team.
                    No obligation — just a conversation about your dream space.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
                        className="flex items-center gap-2 bg-white text-orange-600 hover:text-orange-700 font-bold text-base px-10 py-4 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Request a Free Consultation
                        <ArrowRight size={20} />
                    </a>
                    <a
                        href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20a%20free%20painting%20consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-base px-10 py-4 rounded-xl shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <MessageCircle size={20} />
                        Chat on WhatsApp
                    </a>
                    <a
                        href="tel:+919876543210"
                        className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border-2 border-white/40 hover:bg-white/25 text-white font-bold text-base px-10 py-4 rounded-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <Phone size={20} />
                        Call Us Now
                    </a>
                </div>
            </div>
        </section>
    )
}
