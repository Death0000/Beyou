import { useState } from 'react'
import { motion } from 'framer-motion'

const RED = '#E8375A'
const BORDER = 'rgba(255,255,255,0.08)'

const SKILLS = ['Product Design', 'UX Research', 'Figma', 'Prototyping', 'Design Systems', 'User Testing', 'Product Strategy', 'AI Tools', 'Interaction Design']
const INTERESTS = ['AI', 'Creative Technology', 'SaaS', 'DesignOps', 'Entrepreneurship', 'Education']

const PROJECTS = [
  { title: 'AI Portfolio Builder', role: 'Founder · UX Lead', stage: 'Concept', desc: 'AI-assisted platform helping creative professionals adapt their portfolio for different audiences.', collab: 'Equity', team: 1, color: '#7C3AED' },
  { title: 'Design Feedback Loop', role: 'Collaborator · Designer', stage: 'Prototype', desc: 'Real-time peer feedback tool for designers working asynchronously across time zones.', collab: 'Revenue share', team: 3, color: '#2563EB' },
]

const EXPERIENCE = [
  { role: 'Senior Product Designer', company: 'Figma', period: '2022 – Present', desc: 'Leading design for core collaboration features. Shipped multiplayer cursors, branching, and new file architecture.' },
  { role: 'Product Designer', company: 'Notion', period: '2020 – 2022', desc: 'Designed the blocks system and mobile app. Built a design system from scratch across the product.' },
  { role: 'UX Designer', company: 'IDEO', period: '2018 – 2020', desc: 'Client-facing UX design across healthcare, fintech, and consumer products.' },
]

const STAGE_STYLE: Record<string, { bg: string; color: string }> = {
  Concept:  { bg: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' },
  Prototype:{ bg: 'rgba(232,55,90,0.14)',   color: RED },
}

export default function Profile() {
  const [editing, setEditing] = useState(false)
  const [available, setAvailable] = useState(true)

  return (
    <div className="p-6 lg:p-8 max-w-4xl">

      {/* Hero */}
      <motion.div className="rounded-2xl p-8 mb-6 relative overflow-hidden" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)' }}
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', backgroundColor: 'rgba(232,55,90,0.05)', filter: 'blur(50px)', pointerEvents: 'none' }} />

        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div className="rounded-2xl flex items-center justify-center" style={{ width: 80, height: 80, backgroundColor: RED, fontSize: 28, fontWeight: 800, color: '#fff' }}>A</div>
            <div className="absolute" style={{ bottom: -4, right: -4, width: 18, height: 18, borderRadius: '50%', backgroundColor: available ? '#34D399' : 'rgba(255,255,255,0.3)', border: '3px solid #050505' }} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
              <div>
                <h1 style={{ fontSize: 26, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>Alex Carter</h1>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>Product Designer · London, UK</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={() => setAvailable(!available)} className="px-3 py-2 rounded-xl flex items-center gap-1.5" style={{ fontSize: 11, fontWeight: 600, color: available ? '#34D399' : 'rgba(255,255,255,0.35)', backgroundColor: available ? 'rgba(52,211,153,0.08)' : 'rgba(255,255,255,0.05)', border: `1px solid ${available ? 'rgba(52,211,153,0.2)' : BORDER}`, cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif" }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: available ? '#34D399' : 'rgba(255,255,255,0.3)' }} />
                  {available ? 'Available' : 'Not available'}
                </button>
                <button onClick={() => setEditing(!editing)} className="px-4 py-2 rounded-xl" style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.55)', backgroundColor: 'rgba(255,255,255,0.05)', border: `1px solid ${BORDER}`, cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif" }}>
                  Edit Profile
                </button>
                <button className="px-4 py-2 rounded-xl" style={{ fontSize: 11, fontWeight: 600, color: '#fff', backgroundColor: RED, border: 'none', cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif" }}>
                  Invite to Project
                </button>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 560 }}>
              Senior product designer working at the intersection of design, product, and AI. Building tools for creative professionals.
              Open to co-founder and equity arrangements for the right project.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {[{ label: 'IDEAS POSTED', value: '2' }, { label: 'COLLABORATIONS', value: '5' }, { label: 'PROFILE VIEWS', value: '184' }].map(s => (
            <div key={s.label} className="text-center">
              <div style={{ fontSize: 24, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{s.value}</div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', fontFamily: "'DM Mono',monospace", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left column */}
        <div className="flex flex-col gap-5">

          {/* Skills */}
          <motion.div className="rounded-2xl p-5" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)' }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Skills</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(s => (
                <span key={s} style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', backgroundColor: 'rgba(255,255,255,0.05)', border: `1px solid ${BORDER}`, borderRadius: 8, padding: '5px 10px', letterSpacing: '0.02em' }}>{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div className="rounded-2xl p-5" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)' }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Interests</h3>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map(s => (
                <span key={s} style={{ fontSize: 11, color: RED, backgroundColor: 'rgba(232,55,90,0.08)', border: '1px solid rgba(232,55,90,0.18)', borderRadius: 8, padding: '5px 10px', letterSpacing: '0.02em' }}>{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Collaboration prefs */}
          <motion.div className="rounded-2xl p-5" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)' }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Collaboration</h3>
            {[{ l: 'Open to', v: 'Co-founder, Equity, Startup' }, { l: 'Availability', v: 'Part-time (≤20h/wk)' }, { l: 'Location', v: 'Remote or London' }, { l: 'Looking for', v: 'Developer, Researcher, PM' }].map(item => (
              <div key={item.l} className="py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.2em', fontFamily: "'DM Mono',monospace", marginBottom: 3 }}>{item.l.toUpperCase()}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{item.v}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: 2/3 column */}
        <div className="lg:col-span-2 flex flex-col gap-5">

          {/* What I offer / looking for */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.12 }}>
            <div className="rounded-2xl p-5" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 8 }}>What I offer</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>"Full product design capability — UX, UI, prototyping, design systems, and user research. Strong experience taking 0-to-1 products to market."</p>
            </div>
            <div className="rounded-2xl p-5" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Looking for</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>"A developer to build my MVP and/or a researcher to validate early assumptions. Open to equity for the right project."</p>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div className="rounded-2xl p-5" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)' }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 14 }}>Projects</h3>
            <div className="flex flex-col gap-4">
              {PROJECTS.map(p => {
                const s = STAGE_STYLE[p.stage] || STAGE_STYLE.Concept
                return (
                  <div key={p.title} className="rounded-xl p-4 flex gap-4" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="rounded-xl flex items-center justify-center flex-shrink-0" style={{ width: 40, height: 40, backgroundColor: p.color, fontSize: 14 }}>💡</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>{p.title}</h4>
                        <span className="rounded-full px-2 py-0.5" style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'DM Mono',monospace", ...s }}>{p.stage.toUpperCase()}</span>
                      </div>
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>{p.role} · {p.team} member{p.team > 1 ? 's' : ''}</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{p.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div className="rounded-2xl p-5" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)' }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.24 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 14 }}>Experience</h3>
            <div className="flex flex-col gap-5">
              {EXPERIENCE.map((e, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0" style={{ paddingTop: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: i === 0 ? RED : 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                    {i < EXPERIENCE.length - 1 && <div style={{ width: 1, flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', marginTop: 6 }} />}
                  </div>
                  <div className="pb-5">
                    <div className="flex items-baseline gap-3 flex-wrap mb-1">
                      <h4 style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>{e.role}</h4>
                      <span style={{ fontSize: 11, color: i === 0 ? RED : 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{e.company}</span>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', fontFamily: "'DM Mono',monospace" }}>{e.period}</span>
                    </div>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6 }}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
