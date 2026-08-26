import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'

const RED = '#E8375A'
const BORDER = 'rgba(255,255,255,0.08)'

const COLLABORATORS = [
  { name: 'Maya Chen', role: 'Product Designer', location: 'London, UK', skills: ['Figma', 'UX Research', 'Systems'], fit: 94, avail: true, initials: 'MC', color: '#7C3AED', bio: 'Building products that matter. 6y exp at Figma and startup ecosystem.' },
  { name: 'James Obi', role: 'Frontend Engineer', location: 'Remote', skills: ['React', 'TypeScript', 'Node.js'], fit: 89, avail: true, initials: 'JO', color: '#2563EB', bio: 'Full-stack, startup-focused. Open to equity and co-founder arrangements.' },
  { name: 'Priya Rao', role: 'UX Researcher', location: 'Berlin, DE', skills: ['Research', 'User Testing', 'Strategy'], fit: 86, avail: false, initials: 'PR', color: '#B45309', bio: 'Human-centred research for complex digital products and systems.' },
]

const IDEAS = [
  { title: 'AI Portfolio Builder', desc: 'AI-assisted portfolio platform designed specifically for creative professionals.', creator: 'Sarah K.', stage: 'Concept', roles: ['UX Designer', 'AI Engineer'], team: 1, daysAgo: 2 },
  { title: 'Design Feedback Loop', desc: 'Real-time peer feedback tool built by designers, for designers.', creator: 'Marcus L.', stage: 'Prototype', roles: ['Backend Dev'], team: 3, daysAgo: 5 },
]

const STAGE_STYLE: Record<string, { bg: string; color: string }> = {
  Concept:   { bg: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' },
  Prototype: { bg: 'rgba(232,55,90,0.14)',   color: RED },
  MVP:       { bg: 'rgba(124,58,237,0.14)',  color: '#A78BFA' },
  Building:  { bg: 'rgba(37,99,235,0.14)',   color: '#60A5FA' },
}

function Ring({ pct }: { pct: number }) {
  const r = 17; const c = 2 * Math.PI * r
  const offset = c - (pct / 100) * c
  return (
    <div style={{ position: 'relative', width: 46, height: 46, flexShrink: 0 }}>
      <svg width="46" height="46" viewBox="0 0 46 46" style={{ position: 'absolute' }}>
        <circle cx="23" cy="23" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2.2" />
        <circle cx="23" cy="23" r={r} fill="none" stroke={RED} strokeWidth="2.2"
          strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round" transform="rotate(-90 23 23)" />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: RED, fontFamily: "'DM Mono',monospace" }}>{pct}</div>
    </div>
  )
}

function CollabCard({ c, i }: { c: typeof COLLABORATORS[0]; i: number }) {
  return (
    <motion.div className="rounded-2xl p-5" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)', cursor: 'pointer' }}
      initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.07 }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.038)', borderColor: 'rgba(255,255,255,0.14)' }}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: 42, height: 42, backgroundColor: c.color, fontSize: 13, fontWeight: 800, color: '#fff' }}>{c.initials}</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>{c.name}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', marginTop: 1 }}>{c.role} · {c.location}</div>
          </div>
        </div>
        <Ring pct={c.fit} />
      </div>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.36)', lineHeight: 1.65, marginBottom: 14 }}>{c.bio}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {c.skills.map(s => (
          <span key={s} className="rounded-lg px-2.5 py-1" style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', letterSpacing: '0.02em' }}>{s}</span>
        ))}
        <span className="rounded-lg px-2.5 py-1 flex items-center gap-1" style={{ fontSize: 10, backgroundColor: c.avail ? 'rgba(52,211,153,0.08)' : 'rgba(255,255,255,0.04)', color: c.avail ? '#34D399' : 'rgba(255,255,255,0.28)', border: `1px solid ${c.avail ? 'rgba(52,211,153,0.18)' : 'rgba(255,255,255,0.07)'}` }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: c.avail ? '#34D399' : 'rgba(255,255,255,0.22)', display: 'inline-block' }} />
          {c.avail ? 'Available' : 'Busy'}
        </span>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 py-2 rounded-xl" style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.6)', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif" }}>View Profile</button>
        <button className="flex-1 py-2 rounded-xl" style={{ fontSize: 11, fontWeight: 600, color: '#fff', backgroundColor: RED, border: 'none', cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif" }}>Connect</button>
      </div>
    </motion.div>
  )
}

function IdeaCard({ idea, i }: { idea: typeof IDEAS[0]; i: number }) {
  const s = STAGE_STYLE[idea.stage] || STAGE_STYLE.Concept
  return (
    <motion.div className="rounded-2xl p-5" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)', cursor: 'pointer' }}
      initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.1 + 0.2 }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.038)', borderColor: 'rgba(255,255,255,0.14)' }}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{idea.title}</h3>
        <span className="rounded-full px-2.5 py-1 flex-shrink-0" style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.12em', fontFamily: "'DM Mono',monospace", ...s }}>{idea.stage.toUpperCase()}</span>
      </div>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, marginBottom: 12 }}>{idea.desc}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {idea.roles.map(r => (
            <span key={r} className="rounded-lg px-2.5 py-1" style={{ fontSize: 9, color: RED, backgroundColor: 'rgba(232,55,90,0.08)', border: '1px solid rgba(232,55,90,0.18)', letterSpacing: '0.03em' }}>{r}</span>
          ))}
        </div>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', fontFamily: "'DM Mono',monospace", whiteSpace: 'nowrap' }}>{idea.daysAgo}d ago</span>
      </div>
    </motion.div>
  )
}

export default function Dashboard() {
  const [ideaText, setIdeaText] = useState('')
  const h = new Date().getHours()
  const greeting = h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="p-6 lg:p-8 max-w-6xl mx-auto">

      {/* Greeting */}
      <motion.div className="mb-8" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', fontFamily: "'DM Mono',monospace", textTransform: 'uppercase', marginBottom: 6 }}>{greeting}, Alex.</p>
        <h1 style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.05 }}>What are you building today?</h1>
      </motion.div>

      {/* Idea Input */}
      <motion.div className="rounded-2xl p-6 mb-10" style={{ border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.025)', position: 'relative', overflow: 'hidden' }}
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top left, rgba(232,55,90,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <textarea
          value={ideaText}
          onChange={e => setIdeaText(e.target.value)}
          placeholder="Describe your idea… What do you want to build? Who is it for? What problem does it solve?"
          className="platform-textarea w-full bg-transparent outline-none resize-none"
          style={{ fontSize: 14, color: '#fff', lineHeight: 1.75, letterSpacing: '-0.005em', fontFamily: "'Bricolage Grotesque',sans-serif", position: 'relative', zIndex: 1 }}
          rows={4}
        />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.18)', fontFamily: "'DM Mono',monospace", letterSpacing: '0.12em' }}>
            {ideaText.length > 0 ? `${ideaText.length} chars · AI ready` : 'YOUR IDEA STARTS HERE'}
          </span>
          <div className="flex gap-2">
            <Link to="/platform/discover" style={{ padding: '8px 16px', borderRadius: 10, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', textDecoration: 'none', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
              Find Collaborators
            </Link>
            <button style={{ padding: '8px 20px', borderRadius: 10, fontSize: 12, fontWeight: 700, color: '#fff', backgroundColor: RED, border: 'none', cursor: 'pointer', letterSpacing: '0.04em', whiteSpace: 'nowrap', fontFamily: "'Bricolage Grotesque',sans-serif" }}>
              Start an Idea →
            </button>
          </div>
        </div>
      </motion.div>

      {/* Content grid */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">

        {/* Collaborators */}
        <div className="xl:col-span-3">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>People you might build with</h2>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', marginTop: 2 }}>Based on your profile and idea history</p>
            </div>
            <Link to="/platform/discover" style={{ fontSize: 11, color: RED, textDecoration: 'none', fontWeight: 600, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>See all →</Link>
          </div>
          <div className="flex flex-col gap-3">
            {COLLABORATORS.map((c, i) => <CollabCard key={c.name} c={c} i={i} />)}
          </div>
        </div>

        {/* Right column */}
        <div className="xl:col-span-2 flex flex-col gap-6">

          {/* Ideas */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>Ideas looking for you</h2>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', marginTop: 2 }}>Matched to your skill set</p>
              </div>
              <Link to="/platform/ideas" style={{ fontSize: 11, color: RED, textDecoration: 'none', fontWeight: 600, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>See all →</Link>
            </div>
            <div className="flex flex-col gap-3">
              {IDEAS.map((idea, i) => <IdeaCard key={idea.title} idea={idea} i={i} />)}
            </div>
          </div>

          {/* AI Assistant */}
          <motion.div className="rounded-2xl p-5" style={{ border: '1px solid rgba(232,55,90,0.18)', backgroundColor: 'rgba(232,55,90,0.04)', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}>
            <div style={{ position: 'absolute', top: -24, right: -24, width: 80, height: 80, borderRadius: '50%', backgroundColor: 'rgba(232,55,90,0.1)', filter: 'blur(24px)', pointerEvents: 'none' }} />
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 rounded-xl flex items-center justify-center" style={{ width: 34, height: 34, backgroundColor: 'rgba(232,55,90,0.15)', border: '1px solid rgba(232,55,90,0.28)', fontSize: 16 }}>✦</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>AI Project Assistant</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Analyse ideas · find gaps · get guidance</div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              {['Analyse my idea', 'Find my missing skills', 'Review project health', 'Suggest collaborators'].map(action => (
                <button key={action} className="w-full text-left px-3 py-2.5 rounded-xl" style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer', letterSpacing: '0.02em', fontFamily: "'Bricolage Grotesque',sans-serif" }}>
                  {action} →
                </button>
              ))}
            </div>
          </motion.div>

          {/* Activity */}
          <motion.div className="rounded-2xl p-5" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)' }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}>
            <div className="flex items-center justify-between mb-4">
              <h3 style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Recent Activity</h3>
              <span className="rounded-full px-2 py-0.5" style={{ fontSize: 9, fontWeight: 700, backgroundColor: RED, color: '#fff', fontFamily: "'DM Mono',monospace" }}>3</span>
            </div>
            {[
              { text: 'Maya Chen wants to collaborate on your idea', time: '2m ago', hot: true },
              { text: 'Your idea viewed by 12 people this week', time: '1h ago', hot: false },
              { text: '94% compatible collaborator discovered', time: '3h ago', hot: true },
              { text: 'James Obi accepted your connection', time: '1d ago', hot: false },
            ].map((n, i) => (
              <div key={i} className="flex items-start gap-3 py-2.5" style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: n.hot ? RED : 'rgba(255,255,255,0.2)', flexShrink: 0, marginTop: 5 }} />
                <div>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.45 }}>{n.text}</p>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', fontFamily: "'DM Mono',monospace", marginTop: 2 }}>{n.time}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
