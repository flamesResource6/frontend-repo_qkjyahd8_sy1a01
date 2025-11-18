import { Menu, Phone } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-sky-600"/>
          Dr. Alexandra Hayes
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#booking" className="hover:text-slate-900">Book</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="#booking" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700">
            <Phone className="w-4 h-4"/> (555) 123-4567
          </a>
        </nav>
        <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen(!open)}>
          <Menu className="w-5 h-5"/>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 grid gap-3 text-slate-700">
            <a onClick={() => setOpen(false)} href="#services">Services</a>
            <a onClick={() => setOpen(false)} href="#about">About</a>
            <a onClick={() => setOpen(false)} href="#booking">Book</a>
            <a onClick={() => setOpen(false)} href="#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
