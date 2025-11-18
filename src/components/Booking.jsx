import { useState } from "react"

export default function Booking() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", preferred_date: "", specialty: "", message: "", consent: false })
  const [status, setStatus] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true })
    try {
      const res = await fetch(`${baseUrl}/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          preferred_date: form.preferred_date || null,
        })
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      const data = await res.json()
      setStatus({ success: true, id: data.id })
      setForm({ full_name: "", email: "", phone: "", preferred_date: "", specialty: "", message: "", consent: false })
    } catch (err) {
      setStatus({ error: err.message })
    }
  }

  return (
    <section id="booking" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Book a consultation</h2>
            <p className="mt-3 text-slate-600">Tell us a few details and we’ll get back to you within one business day.</p>
            <form onSubmit={submit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="full_name" value={form.full_name} onChange={handleChange} placeholder="Full name" required className="col-span-1 sm:col-span-2 rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
              <input name="preferred_date" type="date" value={form.preferred_date} onChange={handleChange} className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
              <input name="specialty" value={form.specialty} onChange={handleChange} placeholder="Specialty / Procedure (optional)" className="col-span-1 sm:col-span-2 rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message (optional)" rows="4" className="col-span-1 sm:col-span-2 rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
              <label className="col-span-1 sm:col-span-2 flex items-start gap-3 text-sm text-slate-600">
                <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required className="mt-1"/>
                I agree to be contacted regarding my request.
              </label>
              <button disabled={status?.loading} className="col-span-1 sm:col-span-2 inline-flex justify-center items-center px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold shadow-sm hover:bg-sky-700 disabled:opacity-50">
                {status?.loading ? "Sending..." : "Submit Request"}
              </button>
              {status?.success && (
                <p className="col-span-2 text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">Thank you! Your request was received. Ref: {status.id}</p>
              )}
              {status?.error && (
                <p className="col-span-2 text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{status.error}</p>
              )}
            </form>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 h-fit">
            <h3 className="text-xl font-semibold text-slate-900">Clinic information</h3>
            <div className="mt-4 text-slate-600 space-y-2">
              <p>123 Health Ave, Suite 400</p>
              <p>Mon–Fri, 9:00 AM – 5:00 PM</p>
              <p>Phone: (555) 123‑4567</p>
              <p>Email: care@drhayesclinic.com</p>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop" alt="Clinic" className="w-full h-64 object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
