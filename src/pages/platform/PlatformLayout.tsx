import { Outlet, NavLink, Link } from 'react-router'
import { useState } from 'react'

function HomeIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
}
function DiscoverIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
}
function IdeaIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z"/><path d="M9 21h6"/></svg>
}
function MessageIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
}
function CommunityIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
}
function ArrowLeft() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
}
function MenuIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
}

const NAV = [
  { to: '/platform', label: 'Home', Icon: HomeIcon, end: true },
  { to: '/platform/discover', label: 'Discover', Icon: DiscoverIcon },
  { to: '/platform/ideas', label: 'Ideas', Icon: IdeaIcon },
  { to: '/platform/messages', label: 'Messages', Icon: MessageIcon, badge: 3 },
  { to: '/platform/community', label: 'Community', Icon: CommunityIcon },
]

const RED = '#E8375A'
const BORDER = 'rgba(255,255,255,0.07)'
const SURFACE = 'rgba(255,255,255,0.025)'

export default function PlatformLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-5 flex-shrink-0" style={{ borderBottom: `1px solid ${BORDER}` }}>
        <div className="flex items-center gap-2.5">
          <div className="rounded-lg flex items-center justify-center" style={{ width: 28, height: 28, backgroundColor: RED }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>B</span>
          </div>
          <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>beyou</span>
        </div>
        <Link to="/" className="flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none', fontSize: 10, letterSpacing: '0.06em', fontFamily: "'DM Mono',monospace' " }}>
          <ArrowLeft />
        </Link>
      </div>

      {/* Create button */}
      <div className="px-4 pt-4 pb-3 flex-shrink-0">
        <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl" style={{ backgroundColor: RED, color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', border: 'none', cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
          CREATE
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 overflow-y-auto">
        <div className="flex flex-col gap-0.5">
          {NAV.map(({ to, label, Icon, end, badge }) => (
            <NavLink key={to} to={to} end={end} onClick={() => setMobileOpen(false)}
              style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px',
                borderRadius: 10, textDecoration: 'none', transition: 'all 0.15s',
                backgroundColor: isActive ? 'rgba(232,55,90,0.1)' : 'transparent',
                color: isActive ? RED : 'rgba(255,255,255,0.42)',
              })}>
              <Icon />
              <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em', flex: 1 }}>{label}</span>
              {badge && <span className="rounded-full flex items-center justify-center" style={{ width: 17, height: 17, backgroundColor: RED, fontSize: 9, fontWeight: 700, color: '#fff' }}>{badge}</span>}
            </NavLink>
          ))}
        </div>

        {/* Divider */}
        <div className="my-4" style={{ height: 1, backgroundColor: BORDER }} />

        {/* Secondary */}
        <div className="px-3 mb-2">
          <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: "'DM Mono',monospace" }}>Workspace</p>
        </div>
        {[{ label: 'My Projects', count: 2 }, { label: 'Saved Ideas', count: 7 }, { label: 'Collaboration Requests', count: 3 }].map(item => (
          <button key={item.label} className="w-full flex items-center justify-between px-3 py-2 rounded-lg" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.38)', cursor: 'pointer', fontSize: 12, letterSpacing: '-0.01em', fontFamily: "'Bricolage Grotesque',sans-serif" }}>
            <span>{item.label}</span>
            <span style={{ fontSize: 9, fontFamily: "'DM Mono',monospace", backgroundColor: 'rgba(255,255,255,0.07)', padding: '2px 6px', borderRadius: 4 }}>{item.count}</span>
          </button>
        ))}
      </nav>

      {/* Profile */}
      <div className="px-3 pb-4 flex-shrink-0" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12 }}>
        <NavLink to="/platform/profile" onClick={() => setMobileOpen(false)}
          style={({ isActive }) => ({
            display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
            borderRadius: 10, textDecoration: 'none',
            backgroundColor: isActive ? 'rgba(232,55,90,0.1)' : 'transparent',
          })}>
          <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: 30, height: 30, backgroundColor: RED, fontSize: 11, fontWeight: 800, color: '#fff' }}>A</div>
          <div className="flex-1 min-w-0">
            <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Alex Carter</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.28)', fontFamily: "'DM Mono',monospace", letterSpacing: '0.04em' }}>Product Designer</div>
          </div>
          <div className="rounded-full" style={{ width: 7, height: 7, backgroundColor: '#34D399', flexShrink: 0 }} />
        </NavLink>
      </div>
    </div>
  )

  return (
    <div className="flex" style={{ height: '100svh', backgroundColor: '#050505', color: '#fff', fontFamily: "'Bricolage Grotesque',sans-serif", overflow: 'hidden' }}>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col flex-shrink-0" style={{ width: 228, backgroundColor: SURFACE, borderRight: `1px solid ${BORDER}`, height: '100svh' }}>
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="flex flex-col flex-shrink-0" style={{ width: 228, backgroundColor: '#0D0D0D', borderRight: `1px solid ${BORDER}`, height: '100svh' }}>
            {sidebarContent}
          </div>
          <div className="flex-1 bg-black bg-opacity-60" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile top bar */}
        <div className="lg:hidden flex items-center justify-between px-5 py-4 flex-shrink-0" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <div className="flex items-center gap-2">
            <div className="rounded-lg flex items-center justify-center" style={{ width: 26, height: 26, backgroundColor: RED }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: '#fff' }}>B</span>
            </div>
            <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: '-0.02em' }}>beyou</span>
          </div>
          <button onClick={() => setMobileOpen(true)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', padding: 4 }}>
            <MenuIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
