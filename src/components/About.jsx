import aboutImg from '../assets/image2.jpeg'
import { CheckCircle, Award, Users, Sparkles } from 'lucide-react'

const highlights = [
    { icon: Award, title: 'Years of Excellence', desc: 'Over a decade of transforming spaces with premium painting solutions.' },
    { icon: Users, title: 'Trusted by 500+', desc: 'Hundreds of satisfied homeowners and businesses trust our craftsmanship.' },
    { icon: CheckCircle, title: 'Quality Guarantee', desc: 'Every project is backed by our 100% satisfaction guarantee.' },
    { icon: Sparkles, title: 'Premium Materials', desc: 'We use only top-grade paints and materials for lasting finishes.' },
]

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                        About MR TRADERS
                    </span>
                    <h2 className="section-title">Who We Are</h2>
                    <p className="section-subtitle">
                        A trusted name in professional painting services, dedicated to quality and customer satisfaction.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    {/* Image Side */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-orange-400/30 to-brand-blue/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={aboutImg}
                                alt="MR TRADERS Professional Painting Team"
                                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Floating badge */}
                            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
                                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md">
                                    10+
                                </div>
                                <div>
                                    <div className="font-bold text-gray-800 text-sm">Years Experience</div>
                                    <div className="text-gray-500 text-xs">Professional Painters</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                            Your Trusted Partner in{' '}
                            <span className="text-orange-500">Premium Painting Services</span>
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed mb-4">
                            MR TRADERS is a trusted painting services company with years of experience transforming
                            residential and commercial spaces. We use premium paints and proven techniques to deliver
                            stunning, long-lasting finishes. From color consultation to flawless application, our team
                            ensures a seamless, stress-free experience.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-8">
                            Our team of skilled painters brings exceptional craftsmanship and meticulous attention to
                            detail to every project—whether it's a cozy home interior or a large commercial facility.
                            We believe that a great paint job is more than just color; it's an investment in your space.
                        </p>

                        {/* Highlight Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {highlights.map((item) => (
                                <div key={item.title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group/item">
                                    <div className="w-10 h-10 bg-brand-blue/10 group-hover/item:bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                        <item.icon size={18} className="text-brand-blue group-hover/item:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                                        <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
                                className="btn-primary"
                            >
                                Get a Free Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
