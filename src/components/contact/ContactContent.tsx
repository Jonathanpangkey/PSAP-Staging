'use client'

import { useState } from 'react'

export default function ContactContent() {
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: 'Blasting & Painting',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // wire to Payload API later
    console.log(form)
  }

  return (
    <section className="sec">
      <div className="container">
        <div className="contact-grid">

          {/* Left — contact info */}
          <div>
            <h3 className="display sm contact-heading">
              PT Perintis Sarana Astra
            </h3>
            <p className="lead contact-lead">
              Marine Oil and Gas contractor serving operators across the Asia-Pacific.
            </p>

            {/* Email */}
            <div className="contact-card contact-card--mb">
              <h4>Email</h4>
              <div className="row">
                <div className="ico">@</div>
                <div>
                  <div className="label">
                    <a href="mailto:info@perintissaranaastra.com">
                      info@perintissaranaastra.com
                    </a>
                  </div>
                  <div className="sub">Replies within 1 business day</div>
                </div>
              </div>
              <div className="row">
                <div className="ico">@</div>
                <div>
                  <div className="label">
                    <a href="mailto:tender@perintissaranaastra.com">
                      tender@perintissaranaastra.com
                    </a>
                  </div>
                  <div className="sub">Tender, RFQ, &amp; pre-qualification</div>
                </div>
              </div>
            </div>

            {/* WhatsApp · Phone */}
            <div className="contact-card contact-card--mb">
              <h4>WhatsApp · Phone</h4>
              <div className="row">
                <div className="ico">☎</div>
                <div>
                  <div className="label">+62 811-2111-1681</div>
                  <div className="sub">Mon–Sat · 08:00–17:00 WIB</div>
                </div>
              </div>
              <div className="row">
                <div className="ico">☎</div>
                <div>
                  <div className="label">+62 778 555 0188 (office)</div>
                  <div className="sub">Office reception · weekday operating hours</div>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="contact-card">
              <h4>Office Location</h4>
              <div className="row">
                <div className="ico">⌖</div>
                <div>
                  <div className="label">PT Perintis Sarana Astra HQ</div>
                  <div className="sub">
                    Bintang Industrial Park II D10/3AB<br />
                    Batam, Indonesia<br />
                    1.0902° N · 103.9532° E
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="ico">⤤</div>
                <div>
                  <div className="label">
                    <a href="https://maps.google.com/?q=1.0902,103.9532" target="_blank" rel="noopener noreferrer">
                      Open in Maps
                    </a>
                  </div>
                  <div className="sub">
                    Field-service teams dispatch from Batam HQ across the Asia-Pacific region.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className="form-card">
              <div className="eyebrow">Send Us A Message</div>
              <h3 className="display sm contact-heading">
                Send Us a Message
              </h3>
              <p className="lead contact-form-lead">
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              <form className="form-grid" onSubmit={handleSubmit}>
                <div className="field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="PT ABC Marine"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+62 1234 5678"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="field full">
                  <label>Service of Interest</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option>Blasting &amp; Painting</option>
                    <option>Manpower Supply</option>
                    <option>Scaffolding</option>
                    <option>Equipment Supply</option>
                    <option>HVAC / Mechanical-Electrical</option>
                    <option>Custom Scope</option>
                  </select>
                </div>
                <div className="field full">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project, scope, or mobilisation window..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="full">
                  <button className="btn btn-primary btn-full" type="submit">
                    Send Message <span className="arrow">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}