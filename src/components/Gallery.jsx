import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import img1 from '../assets/image1.jpeg'
import img2 from '../assets/image2.jpeg'
import img3 from '../assets/image3.jpeg'

const galleryItems = [
    { src: img1, title: 'Modern Living Room', category: 'Interior', desc: 'Elegant interior painting with premium satin finish' },
    { src: img2, title: 'Exterior Transformation', category: 'Exterior', desc: 'Weather-resistant coating with vibrant color palette' },
    { src: img3, title: 'Commercial Space', category: 'Commercial', desc: 'Professional commercial painting with seamless finish' },
    { src: img1, title: 'Bedroom Makeover', category: 'Interior', desc: 'Warm, inviting tones for a perfect bedroom retreat' },
    { src: img2, title: 'Villa Exterior', category: 'Exterior', desc: 'Complete exterior renovation with protective coatings' },
    { src: img3, title: 'Office Interior', category: 'Commercial', desc: 'Corporate office painting with brand-compliant colors' },
]

const categories = ['All', 'Interior', 'Exterior', 'Commercial']

export default function Gallery() {
    const [active, setActive] = useState('All')
    const [lightboxIndex, setLightboxIndex] = useState(null)

    const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active)

    const openLightbox = (idx) => setLightboxIndex(idx)
    const closeLightbox = () => setLightboxIndex(null)
    const prevImage = () => setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
    const nextImage = () => setLightboxIndex((prev) => (prev + 1) % filtered.length)

    return (
        <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                        Our Portfolio
                    </span>
                    <h2 className="section-title">Our Projects</h2>
                    <p className="section-subtitle">
                        Every project tells a story of transformation. Browse our portfolio to see the
                        quality and care we put into every brush stroke.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${active === cat
                                    ? 'bg-brand-blue text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer card-hover"
                            onClick={() => openLightbox(idx)}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                                <span className="inline-block bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2 w-fit">
                                    {item.category}
                                </span>
                                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                                    <ZoomIn size={18} className="text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 z-10 transition-colors"
                        onClick={closeLightbox}
                    >
                        <X size={24} />
                    </button>
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 z-10 transition-colors"
                        onClick={(e) => { e.stopPropagation(); prevImage() }}
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 z-10 transition-colors"
                        onClick={(e) => { e.stopPropagation(); nextImage() }}
                    >
                        <ChevronRight size={28} />
                    </button>

                    <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={filtered[lightboxIndex].src}
                            alt={filtered[lightboxIndex].title}
                            className="w-full h-full max-h-[75vh] object-contain rounded-2xl"
                        />
                        <div className="text-center mt-4">
                            <h3 className="text-white font-bold text-xl">{filtered[lightboxIndex].title}</h3>
                            <p className="text-gray-400 text-sm mt-1">{filtered[lightboxIndex].desc}</p>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="absolute bottom-6 flex gap-2">
                        {filtered.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                                className={`w-2 h-2 rounded-full transition-all ${i === lightboxIndex ? 'bg-white w-6' : 'bg-white/40'}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}
