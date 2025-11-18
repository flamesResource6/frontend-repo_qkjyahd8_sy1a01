export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Meet Dr. Alexandra Hayes</h2>
          <p className="mt-4 text-slate-600 leading-7">
            Dr. Hayes is a board‑certified surgeon with extensive training from leading institutions.
            She combines precise clinical expertise with a warm, patient‑centered approach. Her practice focuses on
            minimally invasive techniques that reduce downtime and deliver excellent outcomes.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Fellowship‑trained in minimally invasive surgery</li>
            <li>• Member, American College of Surgeons</li>
            <li>• Published in peer‑reviewed journals</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 bg-sky-200/30 rounded-3xl blur-2xl"/>
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop" alt="About the surgeon" className="rounded-3xl shadow-xl w-full object-cover"/>
        </div>
      </div>
    </section>
  )
}
