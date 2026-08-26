import { useState } from 'react'
import { motion } from 'framer-motion'
import { Nav } from '../components/Nav'

const EASE = [0.16, 1, 0.3, 1] as const

const SOCIALS = [
  { label: 'LinkedIn',  href: '#' },
  { label: 'Behance',   href: '#' },
  { label: 'GitHub',    href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function ContactPage() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent]       = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100svh' }}>
      <Nav />

      <div
        className="flex flex-col lg:flex-row"
        style={{ minHeight: '100svh', paddingTop: 56 }}
      >
        {/* ── Left panel ── */}
        <div
          className="flex flex-col justify-between px-8 md:px-14 py-16 lg:py-24"
          style={{ flex: '0 0 42%', borderRight: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div>
            <motion.p
              className="font-mono uppercase mb-6"
              style={{ fontSize: 10, letterSpacing: '0.4em', color: 'rgba(255,255,255,0.28)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Get in touch
            </motion.p>

            <div className="overflow-hidden mb-1">
              <motion.h1
                className="font-display font-extrabold text-white"
                style={{ fontSize: 'clamp(36px, 5vw, 76px)', lineHeight: 0.93, letterSpacing: '-0.03em' }}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, ease: EASE }}
              >
                Let's talk
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="font-editorial italic"
                style={{ fontSize: 'clamp(36px, 5vw, 76px)', lineHeight: 0.93, letterSpacing: '-0.01em', color: '#C7FF4A' }}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.09, ease: EASE }}
              >
                about design.
              </motion.h1>
            </div>

            <motion.p
              className="font-mono"
              style={{ fontSize: 11, color: 'rgba(255,255,255,0.32)', lineHeight: 1.9, letterSpacing: '0.03em', marginTop: 28, maxWidth: 340 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Whether you want to collaborate, discuss the research, or just say hello — drop a message and I'll get back to you.
            </motion.p>
          </div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="font-mono uppercase mb-4" style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)' }}>
              Find me online
            </p>
            <div className="flex flex-wrap gap-4">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-mono uppercase transition-colors duration-200"
                  style={{ fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C7FF4A')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right panel: form ── */}
        <div className="flex-1 flex items-center justify-center px-8 md:px-14 py-16 lg:py-24">
          <motion.div
            style={{ width: '100%', maxWidth: 480 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sent ? (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="flex items-center justify-center mx-auto mb-6"
                  style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: 'rgba(199,255,74,0.1)', border: '1px solid rgba(199,255,74,0.3)' }}
                >
                  <span style={{ color: '#C7FF4A', fontSize: 22 }}>✓</span>
                </div>
                <h2 className="font-display font-extrabold text-white" style={{ fontSize: 28, letterSpacing: '-0.02em', marginBottom: 10 }}>
                  Message sent.
                </h2>
                <p className="font-mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.32)', lineHeight: 1.8, letterSpacing: '0.03em' }}>
                  Thanks for reaching out. I'll reply within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <Field label="Your name" value={name} onChange={setName} placeholder="e.g. Alex Rivera" />
                <Field label="Email address" value={email} onChange={setEmail} type="email" placeholder="you@studio.com" />
                <TextareaField label="Message" value={message} onChange={setMessage} placeholder="What's on your mind?" />

                <button
                  type="submit"
                  disabled={!name || !email || !message}
                  className="w-full font-display font-bold transition-all"
                  style={{
                    backgroundColor: (!name || !email || !message) ? 'rgba(199,255,74,0.25)' : '#C7FF4A',
                    color: (!name || !email || !message) ? 'rgba(5,5,5,0.4)' : '#050505',
                    border: 'none', borderRadius: 14, padding: '17px 24px',
                    fontSize: 14, letterSpacing: '0.04em',
                    cursor: (!name || !email || !message) ? 'default' : 'pointer',
                    fontFamily: "'Bricolage Grotesque',sans-serif",
                  }}
                  onMouseEnter={e => { if (name && email && message) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#b8f032' }}
                  onMouseLeave={e => { if (name && email && message) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C7FF4A' }}
                >
                  Send message →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/* ── Shared input field ── */
function Field({ label, value, onChange, type = 'text', placeholder }: {
  label: string; value: string; onChange: (v: string) => void
  type?: string; placeholder?: string
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label style={{
        display: 'block', fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase',
        color: focused ? '#C7FF4A' : 'rgba(255,255,255,0.25)',
        fontFamily: "'DM Mono',monospace", marginBottom: 10, transition: 'color 0.2s',
      }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%', background: 'transparent', border: 'none',
          borderBottom: `1px solid ${focused ? '#C7FF4A' : 'rgba(255,255,255,0.1)'}`,
          outline: 'none',
          fontSize: 'clamp(18px, 2.2vw, 28px)',
          fontFamily: "'Bricolage Grotesque',sans-serif",
          fontWeight: 700, color: '#fff',
          padding: '10px 0 12px', letterSpacing: '-0.02em',
          transition: 'border-color 0.2s',
        }}
        autoComplete="off"
      />
    </div>
  )
}

function TextareaField({ label, value, onChange, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label style={{
        display: 'block', fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase',
        color: focused ? '#C7FF4A' : 'rgba(255,255,255,0.25)',
        fontFamily: "'DM Mono',monospace", marginBottom: 10, transition: 'color 0.2s',
      }}>
        {label}
      </label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%', background: 'transparent', border: 'none',
          borderBottom: `1px solid ${focused ? '#C7FF4A' : 'rgba(255,255,255,0.1)'}`,
          outline: 'none', resize: 'none',
          fontSize: 16, fontFamily: "'Bricolage Grotesque',sans-serif",
          fontWeight: 500, color: '#fff',
          padding: '10px 0 12px', letterSpacing: '-0.01em',
          lineHeight: 1.7, transition: 'border-color 0.2s',
        }}
      />
    </div>
  )
}
