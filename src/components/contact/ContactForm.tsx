'use client'

import { useActionState, useState } from 'react'
import { submitInquiryAction, SubmissionResult } from '@/lib/actions/inquiry'
import { Service } from '@/payload-types'

interface ContactFormProps {
  services?: Service[]
}

const initialState: SubmissionResult = {
  success: false,
  message: '',
}

export default function ContactForm({ services = [] }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(submitInquiryAction, initialState)
  const [service, setService] = useState('')

  return (
    <div className="form-card">
      <div className="eyebrow">Send Us A Message</div>
      <h3 className="display sm contact-heading">Send Us a Message</h3>
      <p className="lead contact-form-lead">
        Fill out the form and we'll get back to you as soon as possible.
      </p>

      {state.message && (
        <div
          className={`status-message ${state.success ? 'status-success' : 'status-error'}`}
          style={{
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '14px',
            fontWeight: 500,
            background: state.success ? '#ecfdf5' : '#fef2f2',
            color: state.success ? '#065f46' : '#991b1b',
            border: `1px solid ${state.success ? '#a7f3d0' : '#fca5a5'}`,
          }}
        >
          {state.message}
        </div>
      )}

      <form action={formAction} className="form-grid">
        <div className="field">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="John Doe"
            required
            disabled={isPending}
          />
          {state.errors?.fullName && (
            <span className="error-text" style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
              {state.errors.fullName}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="PT ABC Marine"
            required
            disabled={isPending}
          />
          {state.errors?.company && (
            <span className="error-text" style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
              {state.errors.company}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="name@company.com"
            required
            disabled={isPending}
          />
          {state.errors?.email && (
            <span className="error-text" style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
              {state.errors.email}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="+62 1234 5678"
            required
            disabled={isPending}
          />
          {state.errors?.phone && (
            <span className="error-text" style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
              {state.errors.phone}
            </span>
          )}
        </div>

        <div className="field full">
          <label htmlFor="service">Service of Interest</label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            style={{ color: service ? 'var(--color-fg)' : 'var(--color-fg-subtle)' }}
            disabled={isPending}
            required
          >
            <option value="" disabled hidden>Select a Service</option>
            {services.map((svc) => (
              <option key={svc.id} value={svc.title}>
                {svc.title}
              </option>
            ))}
          </select>
        </div>

        <div className="field full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project, scope, or mobilisation window..."
            required
            disabled={isPending}
          />
          {state.errors?.message && (
            <span className="error-text" style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
              {state.errors.message}
            </span>
          )}
        </div>

        <div className="full">
          <button className="btn btn-primary btn-full" type="submit" disabled={isPending}>
            {isPending ? 'Sending...' : 'Send Message'} <span className="arrow">→</span>
          </button>
        </div>
      </form>
    </div>
  )
}
