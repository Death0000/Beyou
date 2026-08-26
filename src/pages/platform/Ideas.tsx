import { useState } from 'react'
import { motion } from 'framer-motion'

const RED = '#E8375A'
const BORDER = 'rgba(255,255,255,0.08)'

const ALL_IDEAS = [
  { title: 'AI Portfolio Builder', desc: 'AI-assisted portfolio platform for creative professionals to showcase and monetise their work.', creator: 'Sarah K.', stage: 'Concept', roles: ['UX Designer', 'AI Engineer', 'Frontend Dev'], team: 1, collab: 'Equity', daysAgo: 2, color: '#7C3AED' },
  { title: 'Design Feedback Loop', desc: 'Real-time asynchronous peer feedback tool built by designers, for designers working across time zones.', creator: 'Marcus L.', stage: 'Prototype', roles: ['Backend Dev', 'Marketing'], team: 3, collab: 'Revenue share', daysAgo: 5, color: '#2563EB' },
  { title: 'Creative Freelance OS', desc: 'An operating system for managing creative freelance work — proposals, invoices, projects, and clients in one place.', creator: 'Aisha M.', stage: 'MVP', roles: ['UX Designer', 'Researcher'], team: 2, collab: 'Co-founder', daysAgo: 1, color: '#B45309' },
  { title: 'DesignDAO', desc: 'A decentralised design collective with shared IP ownership and community governance for independent designers.', creator: 'Chen W.', stage: 'Concept', roles: ['Developer', 'Legal / Biz'], team: 1, collab: 'Open', daysAgo: 9, color: '#4338CA' },
  { title: 'Research Repository', desc: 'A shared research commons where designers can store, tag, and search qualitative research insights across teams.', creator: 'Priya R.', stage: 'Building', roles: ['Frontend Dev', 'Brand Designer'], team: 4, collab: 'Paid', daysAgo: 14, color: '#0E7490' },
  { title: 'Motion Design School', desc: 'Community-driven motion design curriculum with project-based learning and asynchronous peer critique.', creator: 'Tom W.', stage: 'Concept', roles: ['Developer', 'Researcher', 'PM'], team: 2, collab: 'Revenue share', daysAgo: 3, color: '#BE123C' },
  { title: 'Indie SaaS Launchpad', desc: 'A platform helping independent developers launch micro-SaaS products faster with templates, checklists and community.', creator: 'Ryan D.', stage: 'MVP', roles: ['Designer', 'Marketing'], team: 1, collab: 'Equity', daysAgo: 6, color: '#7C3AED' },
  { title: 'Brand Archive', desc: 'A curated archive of brand identities, campaigns, and design systems from global creative studios.', creator: 'Lena M.', stage: 'Concept', roles: ['Frontend Dev', 'PM'], team: 2, collab: 'Open', daysAgo: 11, color: '#B45309' },
]

const STAGE_STYLE: Record<string, { bg: string; color: string }> = {
  Concept:  { bg: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' },
  Prototype:{ bg: 'rgba(232,55,90,0.14)',   color: RED },
  MVP:      { bg: 'rgba(124,58,237,0.14)',  color: '#A78BFA' },
  Building: { bg: 'rgba(37,99,235,0.14)',   color: '#60A5FA' },
}

const STAGES = ['All', 'Concept', 'Prototype', 'MVP', 'Building']

const JOURNEY = ['IDEA', 'VALIDATE', 'TEAM', 'DESIGN', 'BUILD', 'TEST', 'LAUNCH', 'GROW']

function IdeaCard({ idea, i }: { idea: typeof ALL_IDEAS[0]; i: number }) {
  const s = STAGE_STYLE[idea.stage] || STAGE_STYLE.Concept
  const stageIdx = ['Concept', 'Prototype', 'MVP', 'Building'].indexOf(idea.stage)
  return (
    <motion.div className="rounded-2xl p-6 flex flex-col" style={{ border: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.02)', cursor: 'pointer', height: '100%' }}
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.038)', borderColor: 'rgba(255,255,255,0.14)' }}>

      {/* Stage bar */}
      <div className="flex items-center justify-between mb-5">
        <span className="rounded-full px-2.5 py-1" style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.12em', fontFamily: "'DM Mono',monospace", ...s }}>{idea.stage.toUpperCase()}</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', fontFamily: "'DM Mono',monospace" }}>{idea.daysAgo}d ago</span>
      </div>

      {/* Title + desc */}
      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: 8 }}>{idea.title}</h3>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.36)', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{idea.desc}</p>

      {/* Journey progress */}
      <div className="flex items-center gap-1 mb-5">
        {JOURNEY.slice(0, 4).map((stage, idx) => (
          <div key={stage} className="flex items-center gap-1 flex-1">
            <div className="flex-1 h-px" style={{ backgroundColor: idx <= stageIdx ? RED : 'rgba(255,255,255,0.1)' }} />
            {idx === 0 && <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />}
          </div>
        ))}
      </div>

      {/* Looking for */}
      <div className="mb-4">
        <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.18em', fontFamily: "'DM Mono',monospace", marginBottom: 6 }}>LOOKING FOR</p>
        <div className="flex flex-wrap gap-1.5">
          {idea.roles.map(r => (
            <span key={r} style={{ fontSize: 10, color: RED, backgroundColor: 'rgba(232,55,90,0.08)', border: '1px solid rgba(232,55,90,0.18)', borderRadius: 6, padding: '3px 8px', letterSpacing: '0.03em' }}>{r}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-2">
          <div className="rounded-full flex items-center justify-center" style={{ width: 22, height: 22, backgroundColor: idea.color, fontSize: 9, fontWeight: 800, color: '#fff' }}>{idea.creator[0]}</div>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)' }}>{idea.creator}</span>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', fontFamily: "'DM Mono',monospace" }}>· {idea.team} member{idea.team > 1 ? 's' : ''}</span>
        </div>
        <button style={{ padding: '6px 14px', borderRadius: 8, fontSize: 11, fontWeight: 600, color: '#fff', backgroundColor: RED, border: 'none', cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif" }}>
          Explore →
        </button>
      </div>
    </motion.div>
  )
}

export default function Ideas() {
  const [stageFilter, setStageFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = ALL_IDEAS.filter(idea => {
    const matchStage = stageFilter === 'All' || idea.stage === stageFilter
    const matchSearch = !search || idea.title.toLowerCase().includes(search.toLowerCase()) || idea.desc.toLowerCase().includes(search.toLowerCase())
    return matchStage && matchSearch
  })

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>Ideas</h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.32)' }}>Projects looking for collaborators like you.</p>
        </div>
        <button style={{ padding: '10px 20px', borderRadius: 12, fontSize: 12, fontWeight: 700, color: '#fff', backgroundColor: RED, border: 'none', cursor: 'pointer', letterSpacing: '0.04em', fontFamily: "'Bricolage Grotesque',sans-serif", display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
          Post an Idea
        </button>
      </div>

      {/* Search + stage filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-7">
        <div className="relative flex-1">
          <svg className="absolute" style={{ left: 13, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.28)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search ideas..." className="platform-textarea w-full outline-none"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, borderRadius: 12, padding: '10px 14px 10px 36px', fontSize: 13, color: '#fff', fontFamily: "'Bricolage Grotesque',sans-serif" }} />
        </div>
        <div className="flex gap-1.5">
          {STAGES.map(s => (
            <button key={s} onClick={() => setStageFilter(s)}
              style={{ padding: '10px 14px', borderRadius: 10, fontSize: 11, fontWeight: 500, cursor: 'pointer', border: `1px solid ${stageFilter === s ? 'rgba(232,55,90,0.4)' : BORDER}`, fontFamily: "'Bricolage Grotesque',sans-serif", backgroundColor: stageFilter === s ? 'rgba(232,55,90,0.1)' : 'transparent', color: stageFilter === s ? RED : 'rgba(255,255,255,0.38)', transition: 'all 0.15s', whiteSpace: 'nowrap' }}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', fontFamily: "'DM Mono',monospace", letterSpacing: '0.1em', marginBottom: 20 }}>
        {filtered.length} IDEA{filtered.length !== 1 ? 'S' : ''} {stageFilter !== 'All' ? `· ${stageFilter.toUpperCase()}` : ''}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((idea, i) => <IdeaCard key={idea.title} idea={idea} i={i} />)}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)' }}>No ideas match your search.</p>
        </div>
      )}
    </div>
  )
}
