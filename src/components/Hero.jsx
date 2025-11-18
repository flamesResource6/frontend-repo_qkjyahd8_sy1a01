import { Stethoscope } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-blue-50"/>
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm mb-6">
              <Stethoscope className="w-4 h-4"/>
              Board-Certified Surgeon
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Compassionate, world‑class surgical care
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Personalized treatment plans using the latest minimally invasive techniques. Your health, comfort and recovery are our top priorities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#booking" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold shadow-sm hover:bg-sky-700 transition-colors">
                Book Consultation
              </a>
              <a href="#services" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white text-sky-700 font-semibold ring-1 ring-sky-200 hover:bg-sky-50 transition-colors">
                Explore Services
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-slate-600">
              <div>
                <p className="text-2xl font-bold text-slate-900">15+ yrs</p>
                <p className="text-sm">Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">3,000+</p>
                <p className="text-sm">Successful surgeries</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4.9/5</p>
                <p className="text-sm">Patient rating</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-sky-200/40 via-transparent to-sky-100/60 rounded-3xl blur-2xl"/>
            <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1400&auto=format&fit=crop" alt="Doctor" className="rounded-3xl shadow-2xl w-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  )
}
