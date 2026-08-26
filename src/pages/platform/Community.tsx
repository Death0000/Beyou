import { useState } from 'react'
import { motion } from 'framer-motion'

const RED = '#E8375A'
const BORDER = 'rgba(255,255,255,0.08)'

const CATS = ['All', 'Design', 'AI', 'Development', 'Business', 'Entrepreneurship', 'Research', 'Funding']

const POSTS = [
  { id: 1, cat: 'AI', author: 'Maya Chen', initials: 'MC', color: '#7C3AED', title: 'How AI is changing the way I prototype — a real workflow breakdown', excerpt: "I've been using Claude and Midjourney in combination for the last 6 months. Here's what actually works and what's still broken in AI-assisted design...", likes: 84, replies: 23, time: '2h ago', pinned: true },
  { id: 2, cat: 'Business', author: 'James Obi', initials: 'JO', color: '#2563EB', title: 'From freelancer to founder: what nobody tells you about the leap', excerpt: "After 4 years freelancing, I took the founder leap 8 months ago. The money stuff is complex. The psychology stuff is more complex. This is what I learned...", likes: 62, replies: 18, time: '5h ago', pinned: false },
  { id: 3, cat: 'Design', author: 'Priya Rao', initials: 'PR', color: '#B45309', title: 'Sharing 12 months of UX research findings from creative platform users', excerpt: "I've synthesised patterns from 200+ user interviews with designers, developers, and founders. The biggest takeaway? Collaboration friction is the silent killer...", likes: 128, replies: 41, time: '1d ago', pinned: false },
  { id: 4, cat: 'Entrepreneurship', author: 'Tom Webb', initials: 'TW', color: '#0E7490', title: 'What makes a design-led startup actually succeed?', excerpt: "I analysed 50 design-led startups over 3 years. The ones that grew shared 4 traits. None of them were about having the best design. Thread here...", likes: 95, replies: 37, time: '2d ago', pinned: false },
  { id: 5, cat: 'Funding', author: 'Aisha M.', initials: 'AM', color: '#BE123C', title: 'Grant programmes and alternative funding for creative founders in 2024', excerpt: "Not everyone wants VC. I compiled 40+ grants, fellowships, and alternative funding mechanisms available to creative professionals and small studios...", likes: 74, replies: 29, time: '3d ago', pinned: false },
  { id: 6, cat: 'Development', author: 'Chen Wei', initials: 'CW', color: '#4338CA', title: 'Building your first SaaS MVP as a designer with no technical background', excerpt: "You don't need to code. But you do need to understand systems. Here's how I went from Figma to a live product using no-code tools and 1 developer...", likes: 51, replies: 14, time: '4d ago', pinned: false },
  { id: 7, cat: 'Research', author: 'Sarah K.', initials: 'SK', color: '#7C3AED', title: 'A framework for validating ideas before building anything', excerpt: "After building 3 products that didn't work, I developed a 2-week validation framework. It saved me from a 4th mistake and led to the idea I'm building now...", likes: 109, replies: 46, time: '5d ago', pinned: false },
]

function PostCard({ post, i }: { post: typeof POSTS[0]; i: number }) {
  const [liked, setLiked] = useState(false)
  return (
    <motion.div className="rounded-2xl p-6" style={{ border: `1px solid ${post.pinned ? 'rgba(232,55,90,0.2)' : BORDER}`, backgroundColor: post.pinned ? 'rgba(232,55,90,0.03)' : 'rgba(255,255,255,0.02)', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.14)' }}>
      {post.pinned && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, backgroundColor: RED }} />}

      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center gap-3 flex-shrink-0 pt-1">
          <button onClick={e => { e.stopPropagation(); setLiked(!liked) }}
            className="flex flex-col items-center gap-1" style={{ background: 'none', border: 'none', cursor: 'pointer', color: liked ? RED : 'rgba(255,255,255,0.3)', transition: 'color 0.15s' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill={liked ? RED : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            <span style={{ fontSize: 10, fontFamily: "'DM Mono',monospace", fontWeight: 700 }}>{post.likes + (liked ? 1 : 0)}</span>
          </button>
          <div style={{ height: 1, width: 20, backgroundColor: 'rgba(255,255,255,0.08)' }} />
          <div className="flex flex-col items-center gap-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            <span style={{ fontSize: 10, fontFamily: "'DM Mono',monospace" }}>{post.replies}</span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <div className="rounded-full flex items-center justify-center" style={{ width: 24, height: 24, backgroundColor: post.color, fontSize: 9, fontWeight: 800, color: '#fff', flexShrink: 0 }}>{post.initials}</div>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{post.author}</span>
            <span style={{ fontSize: 9, color: RED, backgroundColor: 'rgba(232,55,90,0.08)', border: '1px solid rgba(232,55,90,0.18)', borderRadius: 5, padding: '2px 7px', letterSpacing: '0.08em', fontFamily: "'DM Mono',monospace" }}>{post.cat.toUpperCase()}</span>
            {post.pinned && <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 5, padding: '2px 7px', letterSpacing: '0.08em', fontFamily: "'DM Mono',monospace" }}>PINNED</span>}
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', fontFamily: "'DM Mono',monospace", marginLeft: 'auto' }}>{post.time}</span>
          </div>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 8 }}>{post.title}</h3>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.36)', lineHeight: 1.65 }}>{post.excerpt}</p>
          <div className="flex items-center gap-3 mt-4">
            <button style={{ fontSize: 12, color: RED, background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif", padding: 0 }}>Read more →</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Community() {
  const [cat, setCat] = useState('All')
  const filtered = POSTS.filter(p => cat === 'All' || p.cat === cat)

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>Community</h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.32)' }}>Ideas, experiments, and conversations from people building things.</p>
        </div>
        <button style={{ padding: '10px 18px', borderRadius: 12, fontSize: 12, fontWeight: 700, color: '#fff', backgroundColor: RED, border: 'none', cursor: 'pointer', letterSpacing: '0.04em', fontFamily: "'Bricolage Grotesque',sans-serif", display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
          Post
        </button>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {CATS.map(c => (
          <button key={c} onClick={() => setCat(c)}
            style={{ padding: '8px 16px', borderRadius: 10, fontSize: 12, fontWeight: c === cat ? 600 : 400, cursor: 'pointer', border: `1px solid ${c === cat ? 'rgba(232,55,90,0.4)' : BORDER}`, fontFamily: "'Bricolage Grotesque',sans-serif", backgroundColor: c === cat ? 'rgba(232,55,90,0.1)' : 'transparent', color: c === cat ? RED : 'rgba(255,255,255,0.38)', transition: 'all 0.15s', whiteSpace: 'nowrap', flexShrink: 0 }}>
            {c}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-4">
        {filtered.map((post, i) => <PostCard key={post.id} post={post} i={i} />)}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)' }}>No posts in this category yet.</p>
          <button style={{ marginTop: 12, padding: '10px 20px', borderRadius: 12, fontSize: 12, fontWeight: 600, color: '#fff', backgroundColor: RED, border: 'none', cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif" }}>Be the first to post</button>
        </div>
      )}
    </div>
  )
}
