export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <p className="text-white font-semibold">Dr. Alexandra Hayes</p>
          <p className="mt-2 text-sm text-slate-400">Board‑certified surgeon providing compassionate, evidence‑based care.</p>
        </div>
        <div>
          <p className="text-white font-semibold">Contact</p>
          <p className="mt-2 text-sm">123 Health Ave, Suite 400</p>
          <p className="text-sm">care@drhayesclinic.com</p>
          <p className="text-sm">(555) 123‑4567</p>
        </div>
        <div>
          <p className="text-white font-semibold">Hours</p>
          <p className="mt-2 text-sm">Mon–Fri: 9:00 AM – 5:00 PM</p>
          <p className="text-sm">Sat: By appointment</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Dr. Hayes Clinic. All rights reserved.</div>
    </footer>
  )
}
