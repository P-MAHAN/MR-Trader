import { BadgeCheck, PaintBucket, Clock, ThumbsUp, Star, Shield, Headphones, Leaf } from 'lucide-react'

const features = [
    {
        icon: BadgeCheck,
        title: 'Licensed & Experienced Painters',
        desc: 'Our certified professionals bring years of hands-on experience to every project.',
        gradient: 'from-blue-500 to-blue-700',
    },
    {
        icon: PaintBucket,
        title: 'Quality Paints & Materials',
        desc: 'We exclusively use premium, durable paints from top brands for stunning results.',
        gradient: 'from-orange-400 to-orange-600',
    },
    {
        icon: Clock,
        title: 'On-Time & On-Budget',
        desc: 'Strict project timelines and transparent pricing — no hidden costs, ever.',
        gradient: 'from-green-500 to-green-700',
    },
    {
        icon: ThumbsUp,
        title: 'Satisfaction Guaranteed',
        desc: 'We don\'t rest until you\'re 100% happy with the outcome. Your approval is our priority.',
        gradient: 'from-purple-500 to-purple-700',
    },
    {
        icon: Shield,
        title: 'Safe & Clean Work Process',
        desc: 'We protect your furnishings, keep your home clean, and follow all safety protocols.',
        gradient: 'from-sky-500 to-sky-700',
    },
    {
        icon: Headphones,
        title: 'Dedicated Support',
        desc: 'From the first consultation through project completion and beyond — we\'re here for you.',
        gradient: 'from-rose-500 to-rose-700',
    },
    {
        icon: Star,
        title: 'Free Color Consultation',
        desc: 'Our experts help you choose the perfect color palette to match your vision and space.',
        gradient: 'from-amber-500 to-amber-700',
    },
    {
        icon: Leaf,
        title: 'Eco-Friendly Options',
        desc: 'Low-VOC and eco-friendly paint options available for a healthier home environment.',
        gradient: 'from-teal-500 to-teal-700',
    },
]

export default function WhyChooseUs() {
    return (
        <section id="why" className="py-20 bg-white">
            {/* Top wave */}
            <div className="relative -mt-1">
                <svg viewBox="0 0 1440 60" className="w-full text-gray-50 fill-current" preserveAspectRatio="none" style={{ height: 60 }}>
                    <path d="M0,60 C480,0 960,0 1440,60 L1440,0 L0,0 Z" />
                </svg>
            </div>

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                        Why MR TRADERS
                    </span>
                    <h2 className="section-title">Why Choose Us?</h2>
                    <p className="section-subtitle">
                        We go beyond just painting — we deliver a complete, professional experience
                        from consultation to completion.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-transparent hover:shadow-2xl transition-all duration-400 card-hover text-center"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon size={24} className="text-white" />
                            </div>
                            <h3 className="text-base font-bold text-gray-800 mb-2 leading-tight">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
