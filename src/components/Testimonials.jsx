const testimonials = [
  {
    name: "Michael R.",
    text: "From consultation to recovery, I felt supported every step of the way. My recovery was faster than expected.",
  },
  {
    name: "Priya S.",
    text: "Professional, empathetic, and incredibly skilled. I’m grateful for the care I received.",
  },
  {
    name: "Daniel K.",
    text: "Clear explanations, minimal discomfort, and excellent results. Highly recommend!",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What patients say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <p className="text-slate-700">“{t.text}”</p>
              <p className="mt-4 font-semibold text-slate-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
