import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 98765 43210',
        href: 'tel:+919876543210',
        color: 'bg-blue-100 text-brand-blue',
    },
    {
        icon: MessageCircle,
        label: 'WhatsApp',
        value: '+91 98765 43210',
        href: 'https://wa.me/919876543210',
        color: 'bg-green-100 text-green-600',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'info@mrtraders.in',
        href: 'mailto:info@mrtraders.in',
        color: 'bg-orange-100 text-orange-600',
    },
    {
        icon: MapPin,
        label: 'Address',
        value: 'MR TRADERS, Mumbai, Maharashtra, India',
        href: 'https://maps.google.com',
        color: 'bg-purple-100 text-purple-600',
    },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
        }, 1500)
    }

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-blue-100 text-brand-blue text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                        Get In Touch
                    </span>
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-subtitle">
                        Ready to start your painting project? Reach out today for a free consultation and
                        personalized quote. We're here to help!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Contact Info + Map */}
                    <div>
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {contactInfo.map((info) => (
                                <a
                                    key={info.label}
                                    href={info.href}
                                    target={info.label === 'WhatsApp' || info.label === 'Address' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-5 bg-gray-50 hover:bg-blue-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
                                >
                                    <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <info.icon size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{info.label}</div>
                                        <div className="text-sm font-semibold text-gray-700 leading-relaxed">{info.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Google Maps embed */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-64">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609949946!2d72.74109995709657!3d19.08254914778785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="MR TRADERS Location"
                            />
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={40} className="text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Message Sent!</h3>
                                <p className="text-gray-500 text-base mb-6">
                                    Thank you for reaching out. Our team will contact you within 24 hours.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                                    className="btn-primary"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Get a Free Quote</h3>
                                <p className="text-gray-500 text-sm mb-8">Fill in your details and we'll get back to you within 24 hours.</p>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your full name"
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Project Details *</label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Tell us about your painting project — type of work, area, timeline, etc."
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none transition-all"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-primary w-full justify-center text-base py-4"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send My Request
                                                <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
