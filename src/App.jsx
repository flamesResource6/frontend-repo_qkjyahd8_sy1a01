import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Booking from "./components/Booking"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  )
}

export default App
