import { useState } from 'react'
import { motion } from 'framer-motion'

const RED = '#E8375A'
const BORDER = 'rgba(255,255,255,0.08)'

const PEOPLE = [
  { name: 'Maya Chen', role: 'Product Designer', location: 'London', skills: ['Figma', 'UX Research', 'Systems', 'Prototyping'], fit: 94, avail: true, initials: 'MC', color: '#7C3AED', collab: 'Startup / Co-founder', bio: 'Senior designer at Figma alumni. Building digital products that solve real problems.' },
  { name: 'James Obi', role: 'Frontend Engineer', location: 'Remote', skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'], fit: 89, avail: true, initials: 'JO', color: '#2563EB', collab: 'Equity / Startup', bio: 'Full-stack engineer. 5y building startups. Open to equity-based roles.' },
  { name: 'Priya Rao', role: 'UX Researcher', location: 'Berlin', skills: ['Research', 'User Testing', 'Strategy', 'Synthesis'], fit: 86, avail: false, initials: 'PR', color: '#B45309', collab: 'Freelance / Part-time', bio: 'Human-centred researcher specialising in complex B2B and platform products.' },
  { name: 'Tom Webb', role: 'Brand Designer', location: 'New York', skills: ['Branding', 'Motion', 'Art Direction', 'Figma'], fit: 82, avail: true, initials: 'TW', color: '#0E7490', collab: 'Co-founder', bio: 'Visual identity and brand systems. Ex-agency, now independent.' },
  { name: 'Aisha M.', role: 'Product Manager', location: 'Lagos', skills: ['Strategy', 'Roadmapping', 'Analytics', 'Research'], fit: 80, avail: true, initials: 'AM', color: '#BE123C', collab: 'Startup', bio: 'PM with 7y across fintech and creative tools. Comfortable in 0-to-1.' },
  { name: 'Chen Wei', role: 'Backend Engineer', location: 'Singapore', skills: ['Python', 'AWS', 'PostgreSQL', 'APIs'], fit: 77, avail: false, initials: 'CW', color: '#4338CA', collab: 'Revenue share', bio: 'Backend architect. Built scalable systems for 3 funded startups.' },
]

const IDEAS_DATA = [
  { title: 'AI Portfolio Builder', desc: 'AI-assisted portfolio platform designed specifically for creative professionals to showcase and monetise their work.', creator: 'Sarah K.', stage: 'Concept', roles: ['UX Designer', 'AI Engineer', 'Frontend Dev'], team: 1, collab: 'Equity', daysAgo: 2 },
  { title: 'Design Feedback Loop', desc: 'Real-time asynchronous peer feedback tool built for designers working across time zones.', creator: 'Marcus L.', stage: 'Prototype', roles: ['Backend Dev', 'Marketing'], team: 3, collab: 'Revenue share', daysAgo: 5 },
  { title: 'Creative Freelance OS', desc: 'An operating system for managing creative freelance work — proposals, invoices, projects, clients in one place.', creator: 'Aisha M.', stage: 'MVP', roles: ['UX Designer', 'Researcher'], team: 2, collab: 'Co-founder', daysAgo: 1 },
  { title: 'DesignDAO', desc: 'A decentralised design collective with shared IP ownership and governance for independent designers.', creator: 'Chen W.', stage: 'Concept', roles: ['Developer', 'Legal / Biz'], team: 1, collab: 'Open', daysAgo: 9 },
  { title: 'Research Repository', desc: 'A shared research commons where designers can store, tag, and search qualitative research insights.', creator: 'Priya R.', stage: 'Building', roles: ['Frontend Dev', 'Brand Designer'], team: 4, collab: 'Paid', daysAgo: 14 },
  { title: 'Motion Design School', desc: 'Community-driven motion design curriculum with project-based learning and peer critique.', creator: 'Tom W.', stage: 'Concept', roles: ['Developer', 'Researcher', 'PM'], team: 2, collab: 'Revenue share', daysAgo: 3 },
]

const STAGE_STYLE: Record<string, { bg: string; color: string }> = {
  Concept:   { bg: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' },
  Prototype: { bg: 'rgba(232,55,90,0.14)',   color: RED },
  MVP:       { bg: 'rgba(124,58,237,0.14)',  color: '#A78BFA' },
  Building:  { bg: 'rgba(37,99,235,0.14)',   color: '#60A5FA' },
}

const TABS = ['People', 'Ideas', 'Projects']
const ROLE_FILTERS = ['All Roles', 'Designer', 'Developer', 'Researcher', 'PM', 'Founder']
const AVAIL_FILTERS = ['Any', 'Available', 'Open to work']

function Ring({ pct }: { pct: number }) {
  const r = 14; const c = 2 * Math.PI * r; const offset = c - (pct / 100) * c
  return (
    <div style={{ position: 'relative', width: 38, height: 38, flexShrink: 0 }}>
      <svg width="38" height="38" viewBox="0 0 38 38" style={{ position: 'absolute' }}>
        <circle cx="19" cy="19" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" />
        <circle cx="19" cy="19" r={r} fill="none" stroke={RED} strokeWidth="2"
          strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round" transform="rotate(-90 19 19)" />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800, color: RED, fontFamily: "'DM Mono',monospace" }}>{pct}</div>
    </div>
  )
}

function PersonCard({ p, i }: { p: typeof PEOPLE[0]; i: number }) {
  return (
    <motion.div className="rounded-2xl p-5" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)', cursor: 'pointer' }}
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.038)', borderColor: 'rgba(255,255,255,0.14)' }}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="rounded-full flex items-center justify-center" style={{ width: 40, height: 40, backgroundColor: p.color, fontSize: 12, fontWeight: 800, color: '#fff', flexShrink: 0 }}>{p.initials}</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>{p.name}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)' }}>{p.role} · {p.location}</div>
          </div>
        </div>
        <Ring pct={p.fit} />
      </div>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginBottom: 12 }}>{p.bio}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {p.skills.slice(0, 3).map(s => (
          <span key={s} style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: '3px 8px', letterSpacing: '0.02em' }}>{s}</span>
        ))}
        {p.skills.length > 3 && <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', padding: '3px 8px' }}>+{p.skills.length - 3}</span>}
      </div>
      <div className="flex items-center justify-between">
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', fontFamily: "'DM Mono',monospace", letterSpacing: '0.06em' }}>{p.collab.toUpperCase()}</span>
        <div className="flex items-center gap-1.5">
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: p.avail ? '#34D399' : 'rgba(255,255,255,0.2)', display: 'inline-block' }} />
          <span style={{ fontSize: 10, color: p.avail ? '#34D399' : 'rgba(255,255,255,0.28)' }}>{p.avail ? 'Available' : 'Busy'}</span>
        </div>
      </div>
    </motion.div>
  )
}

function IdeaCard({ idea, i }: { idea: typeof IDEAS_DATA[0]; i: number }) {
  const s = STAGE_STYLE[idea.stage] || STAGE_STYLE.Concept
  return (
    <motion.div className="rounded-2xl p-5" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)', cursor: 'pointer' }}
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.038)', borderColor: 'rgba(255,255,255,0.14)' }}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.25 }}>{idea.title}</h3>
        <span className="rounded-full px-2.5 py-1 flex-shrink-0" style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.12em', fontFamily: "'DM Mono',monospace", ...s }}>{idea.stage.toUpperCase()}</span>
      </div>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.36)', lineHeight: 1.6, marginBottom: 12 }}>{idea.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {idea.roles.map(r => (
          <span key={r} style={{ fontSize: 9, color: RED, backgroundColor: 'rgba(232,55,90,0.08)', border: '1px solid rgba(232,55,90,0.18)', borderRadius: 6, padding: '3px 8px', letterSpacing: '0.03em' }}>{r}</span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="rounded-full flex items-center justify-center" style={{ width: 20, height: 20, backgroundColor: 'rgba(255,255,255,0.08)', fontSize: 9, fontWeight: 700, color: '#fff' }}>{idea.creator[0]}</div>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)' }}>{idea.creator} · {idea.team} member{idea.team > 1 ? 's' : ''}</span>
        </div>
        <span style={{ fontSize: 10, color: RED, fontFamily: "'DM Mono',monospace", letterSpacing: '0.06em' }}>{idea.collab.toUpperCase()}</span>
      </div>
    </motion.div>
  )
}

export default function Discover() {
  const [tab, setTab] = useState('People')
  const [roleFilter, setRoleFilter] = useState('All Roles')
  const [availFilter, setAvailFilter] = useState('Any')
  const [search, setSearch] = useState('')

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>Discover</h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.32)' }}>Find the people and ideas worth building with.</p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <svg className="absolute" style={{ left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.28)' }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={tab === 'People' ? 'Search by name, role, skill...' : 'Search ideas by name or topic...'}
          className="platform-textarea w-full outline-none"
          style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, borderRadius: 12, padding: '11px 14px 11px 38px', fontSize: 13, color: '#fff', fontFamily: "'Bricolage Grotesque',sans-serif" }}
        />
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 p-1 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, display: 'inline-flex' }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)}
            style={{ padding: '7px 18px', borderRadius: 9, fontSize: 12, fontWeight: 600, cursor: 'pointer', border: 'none', fontFamily: "'Bricolage Grotesque',sans-serif", transition: 'all 0.15s', letterSpacing: '0.01em', color: tab === t ? '#fff' : 'rgba(255,255,255,0.38)', backgroundColor: tab === t ? RED : 'transparent' }}>
            {t}
          </button>
        ))}
      </div>

      {/* Filters */}
      {tab === 'People' && (
        <div className="flex flex-wrap gap-3 mb-7">
          <div className="flex gap-1">
            {ROLE_FILTERS.map(f => (
              <button key={f} onClick={() => setRoleFilter(f)}
                style={{ padding: '6px 12px', borderRadius: 8, fontSize: 11, cursor: 'pointer', border: `1px solid ${roleFilter === f ? 'rgba(232,55,90,0.4)' : BORDER}`, fontFamily: "'Bricolage Grotesque',sans-serif", backgroundColor: roleFilter === f ? 'rgba(232,55,90,0.1)' : 'transparent', color: roleFilter === f ? RED : 'rgba(255,255,255,0.38)', transition: 'all 0.15s' }}>
                {f}
              </button>
            ))}
          </div>
          <div className="flex gap-1">
            {AVAIL_FILTERS.map(f => (
              <button key={f} onClick={() => setAvailFilter(f)}
                style={{ padding: '6px 12px', borderRadius: 8, fontSize: 11, cursor: 'pointer', border: `1px solid ${availFilter === f ? 'rgba(232,55,90,0.4)' : BORDER}`, fontFamily: "'Bricolage Grotesque',sans-serif", backgroundColor: availFilter === f ? 'rgba(232,55,90,0.1)' : 'transparent', color: availFilter === f ? RED : 'rgba(255,255,255,0.38)', transition: 'all 0.15s' }}>
                {f}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {tab === 'People' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {PEOPLE.filter(p => !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.role.toLowerCase().includes(search.toLowerCase())).map((p, i) => (
            <PersonCard key={p.name} p={p} i={i} />
          ))}
        </div>
      )}
      {tab === 'Ideas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {IDEAS_DATA.filter(d => !search || d.title.toLowerCase().includes(search.toLowerCase())).map((idea, i) => (
            <IdeaCard key={idea.title} idea={idea} i={i} />
          ))}
        </div>
      )}
      {tab === 'Projects' && (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div style={{ fontSize: 36, marginBottom: 12 }}>🚧</div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Projects coming soon</h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.32)' }}>Discover projects already in progress and apply to join.</p>
          </div>
        </div>
      )}
    </div>
  )
}
