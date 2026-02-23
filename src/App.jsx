import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="font-sans">
            <Navbar scrolled={scrolled} />
            <main>
                <Hero />
                <About />
                <Services />
                <WhyChooseUs />
                <Gallery />
                <Testimonials />
                <CallToAction />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
