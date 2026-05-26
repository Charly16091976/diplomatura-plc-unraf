import GoogleForm from '../components/GoogleForm'
import Hero from '../components/Hero'
import About from '../components/About'
import Modules from '../components/Modules'
import Features from '../components/Features'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Modules />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}