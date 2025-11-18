import { HeartPulse, Bone, Activity, Syringe } from "lucide-react"

const services = [
  {
    icon: HeartPulse,
    title: "Minimally Invasive Surgery",
    desc: "Faster recovery and less discomfort using advanced laparoscopic techniques.",
  },
  {
    icon: Bone,
    title: "Orthopedic Procedures",
    desc: "Comprehensive care for fractures, joint issues, and sports injuries.",
  },
  {
    icon: Activity,
    title: "General Surgery",
    desc: "Expertise across hernia repair, gallbladder, appendectomy, and more.",
  },
  {
    icon: Syringe,
    title: "Pre & Post‑operative Care",
    desc: "Personalized plans to ensure comfort, safety, and optimal recovery.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">Evidence‑based treatments tailored to your needs</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
