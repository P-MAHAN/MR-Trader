import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'S. Kumar',
        role: 'Homeowner, Mumbai',
        rating: 5,
        comment: 'MR TRADERS did an amazing job on our entire home — professional, clean, and delivered on time! The team was courteous and the quality of work is outstanding. We will definitely hire them again!',
        initials: 'SK',
        color: 'from-blue-500 to-blue-700',
    },
    {
        name: 'A. Mehta',
        role: 'Business Owner, Pune',
        rating: 5,
        comment: 'Excellent service and fantastic results for our office renovation. MR TRADERS understood our requirements perfectly and delivered a flawless finish. Highly recommend to anyone looking for quality painting!',
        initials: 'AM',
        color: 'from-orange-400 to-orange-600',
    },
    {
        name: 'R. Sharma',
        role: 'Villa Owner, Thane',
        rating: 5,
        comment: 'I was blown away by how beautifully they transformed our villa exterior. The color consultation, the prep work, and the final coat — everything was top-notch. 10/10 experience!',
        initials: 'RS',
        color: 'from-green-500 to-green-700',
    },
    {
        name: 'P. Patel',
        role: 'Restaurant Owner, Nashik',
        rating: 5,
        comment: 'Our restaurant looks brand new! MR TRADERS worked efficiently over the weekend to minimize disruption to our business. The decorative finishes they applied are truly stunning. Best painters in town!',
        initials: 'PP',
        color: 'from-purple-500 to-purple-700',
    },
    {
        name: 'N. Joshi',
        role: 'Apartment Builder, Mumbai',
        rating: 5,
        comment: 'We used MR TRADERS for a 20-unit residential project and they delivered excellence across all units. Consistent quality, clean workmanship, and they finished ahead of schedule. Truly professional!',
        initials: 'NJ',
        color: 'from-rose-500 to-rose-700',
    },
]

function StarRating({ rating }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={16}
                    className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}
                />
            ))}
        </div>
    )
}

export default function Testimonials() {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
    const next = () => setCurrent((c) => (c + 1) % testimonials.length)

    // Show 3 cards on desktop, 1 on mobile
    const visibleCount = 3
    const visible = Array.from({ length: visibleCount }, (_, i) =>
        testimonials[(current + i) % testimonials.length]
    )

    return (
        <section id="testimonials" className="py-20 bg-brand-blue">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-white/10 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide border border-white/20">
                        Customer Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        What Our Clients Say
                    </h2>
                    <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                        Over 500 happy customers can't be wrong. Read what they say about MR TRADERS.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
                    {visible.map((t, i) => (
                        <div key={i} className="bg-white rounded-2xl p-7 shadow-xl flex flex-col justify-between">
                            <div>
                                <Quote size={32} className="text-orange-400 mb-4 opacity-80" />
                                <p className="text-gray-700 text-sm leading-relaxed mb-6">"{t.comment}"</p>
                            </div>
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                <div className={`w-12 h-12 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                                    <div className="text-gray-500 text-xs">{t.role}</div>
                                    <StarRating rating={t.rating} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile: single card */}
                <div className="md:hidden bg-white rounded-2xl p-7 shadow-xl mb-8">
                    <Quote size={32} className="text-orange-400 mb-4 opacity-80" />
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">"{testimonials[current].comment}"</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <div className={`w-12 h-12 bg-gradient-to-br ${testimonials[current].color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                            {testimonials[current].initials}
                        </div>
                        <div>
                            <div className="font-bold text-gray-900 text-sm">{testimonials[current].name}</div>
                            <div className="text-gray-500 text-xs">{testimonials[current].role}</div>
                            <StarRating rating={testimonials[current].rating} />
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-6">
                    <button
                        onClick={prev}
                        className="w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    {/* Dot indicators */}
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-3 bg-orange-400' : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>
            </div>
        </section>
    )
}
