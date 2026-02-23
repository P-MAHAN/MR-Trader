import {
    Home,
    Building2,
    PaintBucket,
    ShieldCheck,
    Palette,
    Layers,
    ArrowRight,
} from 'lucide-react'

const services = [
    {
        icon: Home,
        title: 'Interior Painting',
        desc: 'Bring your interior spaces to life with smooth, vibrant finishes. We use premium paints that ensure lasting beauty and easy maintenance.',
        color: 'from-blue-500 to-blue-700',
        bg: 'bg-blue-50',
        accent: 'text-blue-600',
        border: 'border-blue-200',
    },
    {
        icon: Building2,
        title: 'Exterior Painting',
        desc: 'Protect and beautify your property with weather-resistant exterior coatings. Enhance curb appeal and long-term protection.',
        color: 'from-orange-500 to-orange-700',
        bg: 'bg-orange-50',
        accent: 'text-orange-600',
        border: 'border-orange-200',
    },
    {
        icon: PaintBucket,
        title: 'Residential Painting',
        desc: 'Personalized, detail-oriented painting services for homes of all sizes. Your home deserves nothing but the best finish.',
        color: 'from-green-500 to-green-700',
        bg: 'bg-green-50',
        accent: 'text-green-600',
        border: 'border-green-200',
    },
    {
        icon: Building2,
        title: 'Commercial Painting',
        desc: 'Efficient, high-quality painting solutions for businesses & offices. Minimal disruption with maximum professional results.',
        color: 'from-purple-500 to-purple-700',
        bg: 'bg-purple-50',
        accent: 'text-purple-600',
        border: 'border-purple-200',
    },
    {
        icon: Palette,
        title: 'Decorative Finishes',
        desc: 'Add style with custom textures, accent walls, and stunning decorative effects that make your space truly unique.',
        color: 'from-pink-500 to-pink-700',
        bg: 'bg-pink-50',
        accent: 'text-pink-600',
        border: 'border-pink-200',
    },
    {
        icon: ShieldCheck,
        title: 'Protective Coatings',
        desc: 'Durable coatings for floors, metal structures, and high-traffic areas. Industrial-grade protection with a premium finish.',
        color: 'from-sky-500 to-sky-700',
        bg: 'bg-sky-50',
        accent: 'text-sky-600',
        border: 'border-sky-200',
    },
]

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-blue-100 text-brand-blue text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                        What We Offer
                    </span>
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive painting solutions tailored to your residential and commercial needs.
                        Quality you can see, results that last.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={`group relative bg-white rounded-2xl p-7 border ${service.border} card-hover cursor-pointer overflow-hidden`}
                        >
                            {/* Background accent */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${service.bg} rounded-bl-full opacity-50 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none`} />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon size={26} className="text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-blue transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    {service.desc}
                                </p>

                                {/* Read more link */}
                                <div className={`flex items-center gap-2 ${service.accent} text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0`}>
                                    Learn More <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-14">
                    <p className="text-gray-500 mb-6">Don't see what you need? We offer custom solutions.</p>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
                        className="btn-primary"
                    >
                        Request a Custom Quote
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    )
}
