import { useState } from 'react'
import { motion } from 'framer-motion'

const RED = '#E8375A'
const BORDER = 'rgba(255,255,255,0.08)'

const CONVOS = [
  { id: 1, name: 'Maya Chen', role: 'Product Designer', initials: 'MC', color: '#7C3AED', project: 'AI Portfolio Builder', lastMsg: "I've finished the wireframes — ready to share?", time: '2m', unread: 2, online: true },
  { id: 2, name: 'James Obi', role: 'Frontend Engineer', initials: 'JO', color: '#2563EB', project: 'Design Feedback Loop', lastMsg: 'Stack looks good, I can start Monday.', time: '1h', unread: 1, online: true },
  { id: 3, name: 'Priya Rao', role: 'UX Researcher', initials: 'PR', color: '#B45309', project: 'Direct', lastMsg: 'Can we jump on a call tomorrow?', time: '3h', unread: 0, online: false },
  { id: 4, name: 'Tom Webb', role: 'Brand Designer', initials: 'TW', color: '#0E7490', project: 'Creative Freelance OS', lastMsg: 'Just sent the brand moodboard.', time: '1d', unread: 0, online: false },
]

const MESSAGES = [
  { from: 'them', text: "Hey Alex! I just saw your idea for the AI portfolio builder. I've been thinking about exactly this problem for a while.", time: '10:12' },
  { from: 'me',   text: "That's great timing! I've been working on a rough brief. The core idea is a platform that learns from your design work and helps contextualise it for different audiences.", time: '10:14' },
  { from: 'them', text: "I love it. The 'different audiences' part is the key insight. A portfolio for a startup job vs a big agency is completely different in tone and focus.", time: '10:16' },
  { from: 'me',   text: "Exactly. And AI can help you adapt it dynamically. I think there's also a huge gap for designers who don't know how to write about their work.", time: '10:17' },
  { from: 'them', text: "100%. I've been sketching some UX flows. Would love to share them with you. I think we could prototype something quite fast if the concept holds.", time: '10:21' },
  { from: 'them', text: "I've finished the wireframes — ready to share?", time: '10:48' },
]

export default function Messages() {
  const [active, setActive] = useState(1)
  const [newMsg, setNewMsg] = useState('')
  const convo = CONVOS.find(c => c.id === active)!

  return (
    <div className="flex h-full" style={{ height: 'calc(100svh - 0px)' }}>

      {/* Conversation list */}
      <div className="flex-shrink-0 flex flex-col" style={{ width: 280, borderRight: `1px solid ${BORDER}`, backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="px-5 py-5 flex-shrink-0" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', marginBottom: 12 }}>Messages</h2>
          <div className="relative">
            <svg className="absolute" style={{ left: 11, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.28)' }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input placeholder="Search conversations..." className="platform-textarea w-full outline-none"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '8px 12px 8px 32px', fontSize: 12, color: '#fff', fontFamily: "'Bricolage Grotesque',sans-serif" }} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          {CONVOS.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)} className="w-full text-left"
              style={{ padding: '12px 16px', backgroundColor: active === c.id ? 'rgba(232,55,90,0.07)' : 'transparent', borderTop: 'none', borderRight: 'none', borderBottom: 'none', borderLeft: active === c.id ? `2px solid ${RED}` : '2px solid transparent', transition: 'all 0.15s', cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif" }}>
              <div className="flex items-start gap-3">
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <div className="rounded-full flex items-center justify-center" style={{ width: 38, height: 38, backgroundColor: c.color, fontSize: 12, fontWeight: 800, color: '#fff' }}>{c.initials}</div>
                  {c.online && <div style={{ position: 'absolute', bottom: 1, right: 1, width: 8, height: 8, borderRadius: '50%', backgroundColor: '#34D399', border: '2px solid #050505' }} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span style={{ fontSize: 13, fontWeight: c.unread > 0 ? 700 : 500, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', fontFamily: "'DM Mono',monospace", flexShrink: 0 }}>{c.time}</span>
                  </div>
                  {c.project !== 'Direct' && (
                    <div className="mb-1">
                      <span style={{ fontSize: 9, color: RED, backgroundColor: 'rgba(232,55,90,0.1)', border: '1px solid rgba(232,55,90,0.2)', borderRadius: 4, padding: '2px 6px', letterSpacing: '0.04em', fontFamily: "'DM Mono',monospace" }}>{c.project}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-2">
                    <p style={{ fontSize: 12, color: c.unread > 0 ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.lastMsg}</p>
                    {c.unread > 0 && <span className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: 17, height: 17, backgroundColor: RED, fontSize: 9, fontWeight: 700, color: '#fff' }}>{c.unread}</span>}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Conversation */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 flex-shrink-0" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <div className="flex items-center gap-3">
            <div style={{ position: 'relative' }}>
              <div className="rounded-full flex items-center justify-center" style={{ width: 36, height: 36, backgroundColor: convo.color, fontSize: 11, fontWeight: 800, color: '#fff' }}>{convo.initials}</div>
              {convo.online && <div style={{ position: 'absolute', bottom: 0, right: 0, width: 9, height: 9, borderRadius: '50%', backgroundColor: '#34D399', border: '2px solid #050505' }} />}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>{convo.name}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{convo.role} · {convo.online ? 'Online' : 'Offline'}</div>
            </div>
          </div>
          {convo.project !== 'Direct' && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}` }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: RED }} />
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.02em' }}>{convo.project}</span>
            </div>
          )}
        </div>

        {/* Project context banner */}
        {convo.project !== 'Direct' && (
          <div className="mx-6 mt-4 px-4 py-3 rounded-xl flex items-center gap-3" style={{ backgroundColor: 'rgba(232,55,90,0.05)', border: '1px solid rgba(232,55,90,0.15)' }}>
            <span style={{ fontSize: 14 }}>💡</span>
            <div>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Collaboration Request · </span>
              <span style={{ fontSize: 12, color: RED, fontWeight: 600 }}>{convo.project}</span>
            </div>
            <button className="ml-auto rounded-lg px-3 py-1.5" style={{ fontSize: 11, fontWeight: 600, color: '#fff', backgroundColor: RED, border: 'none', cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif" }}>View Workspace</button>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="flex flex-col gap-4 max-w-2xl">
            {MESSAGES.map((msg, i) => (
              <motion.div key={i} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: i * 0.04 }}>
                <div style={{ maxWidth: '75%' }}>
                  <div className="rounded-2xl px-4 py-3" style={{ backgroundColor: msg.from === 'me' ? RED : 'rgba(255,255,255,0.07)', border: msg.from === 'them' ? `1px solid ${BORDER}` : 'none' }}>
                    <p style={{ fontSize: 13, color: '#fff', lineHeight: 1.6, letterSpacing: '-0.005em' }}>{msg.text}</p>
                  </div>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', fontFamily: "'DM Mono',monospace", marginTop: 4, textAlign: msg.from === 'me' ? 'right' : 'left' }}>{msg.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="px-6 pb-6 pt-3 flex-shrink-0">
          <div className="flex items-end gap-3 rounded-2xl p-4" style={{ border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
            <textarea
              value={newMsg}
              onChange={e => setNewMsg(e.target.value)}
              placeholder="Write a message…"
              className="platform-textarea flex-1 bg-transparent outline-none resize-none"
              style={{ fontSize: 13, color: '#fff', lineHeight: 1.6, fontFamily: "'Bricolage Grotesque',sans-serif", maxHeight: 120, minHeight: 24 }}
              rows={1}
            />
            <button style={{ padding: '8px 18px', borderRadius: 12, fontSize: 12, fontWeight: 700, color: '#fff', backgroundColor: newMsg.trim() ? RED : 'rgba(255,255,255,0.08)', border: 'none', cursor: newMsg.trim() ? 'pointer' : 'default', transition: 'all 0.15s', fontFamily: "'Bricolage Grotesque',sans-serif", flexShrink: 0 }}
              onClick={() => setNewMsg('')}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
