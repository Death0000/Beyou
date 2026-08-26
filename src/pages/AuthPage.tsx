import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router'
import ImageStreamHero from '../components/ImageStreamHero'

/* ── Corridor images ── */
const CORRIDOR_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1643320477860-e903e4af260b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: '' },
  { src: 'https://images.unsplash.com/photo-1631477076114-9123f721b9dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: '' },
  { src: 'https://images.unsplash.com/photo-1536303158031-c868b371399f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: '' },
  { src: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: '' },
  { src: 'https://images.unsplash.com/photo-1779912217723-73b7cb98c0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: '' },
  { src: 'https://images.unsplash.com/photo-1536311312982-31ed42ebc0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: '' },
  { src: 'https://images.unsplash.com/photo-1620938289449-98879e017b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: '' },
  { src: 'https://images.unsplash.com/photo-1651746605872-66fec1defdb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: '' },
  { src: 'https://images.unsplash.com/photo-1675830028194-02f405ff664b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: '' },
]

/* ── Role options ── */
const ROLES = [
  { id: 'ux-designer',   label: 'UX Designer',        glyph: '◈' },
  { id: 'product',       label: 'Product Designer',    glyph: '⬡' },
  { id: 'developer',     label: 'Developer',           glyph: '⌥' },
  { id: 'creative-dir',  label: 'Creative Director',   glyph: '✦' },
  { id: 'founder',       label: 'Founder',             glyph: '◎' },
  { id: 'photographer',  label: 'Photographer',        glyph: '◉' },
  { id: 'illustrator',   label: 'Illustrator',         glyph: '◇' },
  { id: 'researcher',    label: 'Researcher',          glyph: '⊹' },
]

/* ── Interest options ── */
const INTERESTS = [
  { id: 'showcase',     label: 'Showcase my work' },
  { id: 'collaborate',  label: 'Find collaborators' },
  { id: 'startup',      label: 'Build a startup' },
  { id: 'inspired',     label: 'Get inspired' },
  { id: 'hire',         label: 'Hire creatives' },
  { id: 'learn',        label: 'Learn from others' },
]

/* ── Animation variants ── */
const slide = {
  enter: (d: number) => ({ x: d > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.38, ease: [0.32, 0, 0.18, 1] as [number, number, number, number] } },
  exit: (d: number) => ({ x: d > 0 ? -48 : 48, opacity: 0, transition: { duration: 0.28, ease: [0.32, 0, 0.18, 1] as [number, number, number, number] } }),
}

/* ── Shared premium input ── */
function PremiumInput({
  label, value, onChange, type = 'text', placeholder, autoFocus,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string; autoFocus?: boolean }) {
  const [focused, setFocused] = useState(false)
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => { if (autoFocus) ref.current?.focus() }, [autoFocus])

  return (
    <div className="w-full">
      <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.32em', color: focused ? '#E8375A' : 'rgba(255,255,255,0.28)', fontFamily: "'DM Mono',monospace", textTransform: 'uppercase', marginBottom: 10, transition: 'color 0.2s' }}>
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          borderBottom: `1px solid ${focused ? '#E8375A' : 'rgba(255,255,255,0.12)'}`,
          outline: 'none',
          fontSize: 'clamp(22px, 2.8vw, 36px)',
          fontFamily: "'Bricolage Grotesque',sans-serif",
          fontWeight: 700,
          color: '#fff',
          padding: '10px 0 14px',
          letterSpacing: '-0.02em',
          transition: 'border-color 0.2s',
        }}
        placeholder-style="color: rgba(255,255,255,0.14)"
        autoComplete="off"
        spellCheck={false}
      />
    </div>
  )
}

/* ── Main page ── */
type Flow = 'entry' | 'signup' | 'signin'

export default function AuthPage() {
  const navigate = useNavigate()
  const [flow, setFlow] = useState<Flow>('entry')
  const [signupStep, setSignupStep] = useState(1) // 1–4
  const [signinStep, setSigninStep] = useState(1) // 1–2
  const [dir, setDir] = useState(1)

  /* form state */
  const [name, setName]           = useState('')
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const [role, setRole]           = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [siEmail, setSiEmail]     = useState('')
  const [siPass, setSiPass]       = useState('')

  function advance(d = 1) { setDir(d) }

  function goToPlatform() { navigate('/platform') }

  /* ── entry handlers ── */
  function startSignup() { advance(1); setFlow('signup'); setSignupStep(1) }
  function startSignin() { advance(1); setFlow('signin'); setSigninStep(1) }

  /* ── signup navigation ── */
  function nextSignup() {
    advance(1)
    if (signupStep < 4) setSignupStep(s => s + 1)
    else goToPlatform()
  }
  function backSignup() {
    advance(-1)
    if (signupStep > 1) setSignupStep(s => s - 1)
    else { setFlow('entry') }
  }

  /* ── signin navigation ── */
  function nextSignin() {
    advance(1)
    if (signinStep < 2) setSigninStep(2)
    else goToPlatform()
  }
  function backSignin() {
    advance(-1)
    if (signinStep > 1) setSigninStep(1)
    else { setFlow('entry') }
  }

  /* ── interest toggle ── */
  function toggleInterest(id: string) {
    setInterests(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  /* ── key for AnimatePresence ── */
  const stepKey = `${flow}-${flow === 'signup' ? signupStep : signinStep}`

  /* ── progress % ── */
  const progress = flow === 'signup' ? (signupStep / 4) * 100 : flow === 'signin' ? (signinStep / 2) * 100 : 0

  const canGoBack = flow !== 'entry'
  const canSkip = flow === 'signup' && (signupStep === 3 || signupStep === 4)

  return (
    <div className="flex overflow-hidden" style={{ height: '100svh', backgroundColor: '#050505' }}>

      {/* ── Left panel: corridor ── */}
      <div className="hidden lg:block relative" style={{ width: '44%', flexShrink: 0 }}>
        <ImageStreamHero
          images={CORRIDOR_IMAGES}
          cards={9}
          speed={22}
          axis={58}
          className="absolute inset-0"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Overlay gradients */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.55) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.6) 0%, transparent 30%, transparent 65%, rgba(5,5,5,0.85) 100%)' }} />

        {/* Brand content */}
        <div className="absolute inset-0 flex flex-col justify-between p-10" style={{ zIndex: 10 }}>
          <div className="flex items-center gap-2">
            <div className="rounded-full" style={{ width: 8, height: 8, backgroundColor: '#E8375A' }} />
            <span className="font-mono uppercase" style={{ fontSize: 11, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.5)' }}>Beyou</span>
          </div>
          <div>
            <p className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(26px, 2.4vw, 40px)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 12 }}>
              Where designers<br />become builders.
            </p>
            <p className="font-mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.28)', lineHeight: 1.8 }}>
              MA Interaction Design · Dissertation 2024
            </p>
          </div>
        </div>
      </div>

      {/* ── Right panel: form ── */}
      <div className="flex flex-col flex-1 relative overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center justify-between flex-shrink-0" style={{ padding: '20px 32px 0' }}>
          {canGoBack ? (
            <button
              onClick={flow === 'signup' ? backSignup : backSignin}
              className="flex items-center gap-2 transition-colors"
              style={{ color: 'rgba(255,255,255,0.28)', fontSize: 13, fontFamily: "'DM Mono',monospace", letterSpacing: '0.06em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
            >
              ← back
            </button>
          ) : (
            <div />
          )}

          {canSkip ? (
            <button
              onClick={nextSignup}
              className="transition-colors"
              style={{ color: 'rgba(255,255,255,0.28)', fontSize: 12, fontFamily: "'DM Mono',monospace", letterSpacing: '0.1em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
            >
              skip for now →
            </button>
          ) : (
            <div />
          )}
        </div>

        {/* Progress bar */}
        {flow !== 'entry' && (
          <div className="flex-shrink-0 mx-8 mt-5" style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 1 }}>
            <motion.div
              style={{ height: '100%', backgroundColor: '#E8375A', borderRadius: 1 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.32, 0, 0.18, 1] }}
            />
          </div>
        )}

        {/* Step content */}
        <div className="flex-1 flex items-center justify-center overflow-y-auto" style={{ padding: '20px 32px 40px' }}>
          <div style={{ width: '100%', maxWidth: 440 }}>
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={stepKey}
                custom={dir}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
              >

                {/* ── ENTRY ── */}
                {flow === 'entry' && (
                  <div className="flex flex-col">
                    {/* Mobile brand mark */}
                    <div className="flex items-center gap-2 mb-12 lg:hidden">
                      <div className="rounded-full" style={{ width: 8, height: 8, backgroundColor: '#E8375A' }} />
                      <span className="font-mono uppercase" style={{ fontSize: 11, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)' }}>Beyou</span>
                    </div>

                    <p className="font-mono uppercase mb-4" style={{ fontSize: 10, letterSpacing: '0.36em', color: 'rgba(255,255,255,0.28)' }}>
                      Welcome
                    </p>
                    <h1 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: 8 }}>
                      The platform for
                    </h1>
                    <h1 className="font-editorial italic" style={{ fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 0.95, letterSpacing: '-0.01em', color: '#E8375A', marginBottom: 40 }}>
                      designers who build.
                    </h1>

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={startSignup}
                        className="w-full font-display font-bold transition-all"
                        style={{ backgroundColor: '#E8375A', color: '#fff', border: 'none', borderRadius: 14, padding: '17px 24px', fontSize: 15, letterSpacing: '0.01em', cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif" }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d42d4e')}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#E8375A')}
                      >
                        Create your account →
                      </button>
                      <button
                        onClick={startSignin}
                        className="w-full font-display font-bold transition-all"
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '17px 24px', fontSize: 15, letterSpacing: '0.01em', cursor: 'pointer', fontFamily: "'Bricolage Grotesque',sans-serif" }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#fff' }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
                      >
                        Sign in
                      </button>
                    </div>

                    <p className="font-mono text-center" style={{ fontSize: 10, color: 'rgba(255,255,255,0.16)', letterSpacing: '0.08em', marginTop: 28, lineHeight: 1.8 }}>
                      By continuing you agree to Beyou's Terms of Service<br />and Privacy Policy.
                    </p>
                  </div>
                )}

                {/* ── SIGNUP STEP 1: Name ── */}
                {flow === 'signup' && signupStep === 1 && (
                  <div className="flex flex-col gap-10">
                    <div>
                      <StepLabel step={1} total={4} />
                      <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(26px, 3.2vw, 44px)', lineHeight: 1.0, letterSpacing: '-0.03em', marginTop: 10 }}>
                        What's your name?
                      </h2>
                      <p className="font-mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em', marginTop: 8 }}>
                        This is how the community will know you.
                      </p>
                    </div>
                    <PremiumInput label="Full name" value={name} onChange={setName} placeholder="e.g. Aria Chen" autoFocus />
                    <PrimaryButton onClick={nextSignup} disabled={name.trim().length < 2}>
                      Continue →
                    </PrimaryButton>
                  </div>
                )}

                {/* ── SIGNUP STEP 2: Email + Password ── */}
                {flow === 'signup' && signupStep === 2 && (
                  <div className="flex flex-col gap-10">
                    <div>
                      <StepLabel step={2} total={4} />
                      <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(26px, 3.2vw, 44px)', lineHeight: 1.0, letterSpacing: '-0.03em', marginTop: 10 }}>
                        Your email<br />and password
                      </h2>
                    </div>
                    <div className="flex flex-col gap-8">
                      <PremiumInput label="Email address" value={email} onChange={setEmail} type="email" placeholder="you@studio.com" autoFocus />
                      <PremiumInput label="Password" value={password} onChange={setPassword} type="password" placeholder="8+ characters" />
                    </div>
                    <PrimaryButton onClick={nextSignup} disabled={email.length < 4 || password.length < 6}>
                      Continue →
                    </PrimaryButton>
                  </div>
                )}

                {/* ── SIGNUP STEP 3: Role ── */}
                {flow === 'signup' && signupStep === 3 && (
                  <div className="flex flex-col gap-8">
                    <div>
                      <StepLabel step={3} total={4} />
                      <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(26px, 3.2vw, 44px)', lineHeight: 1.0, letterSpacing: '-0.03em', marginTop: 10 }}>
                        What describes<br />you best?
                      </h2>
                      <p className="font-mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em', marginTop: 8 }}>
                        Pick one — you can always change it later.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {ROLES.map(r => (
                        <button
                          key={r.id}
                          onClick={() => setRole(r.id)}
                          className="flex flex-col items-start transition-all"
                          style={{
                            border: `1px solid ${role === r.id ? '#E8375A' : 'rgba(255,255,255,0.08)'}`,
                            borderRadius: 12,
                            padding: '14px 16px',
                            backgroundColor: role === r.id ? 'rgba(232,55,90,0.08)' : 'rgba(255,255,255,0.025)',
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                        >
                          <span style={{ fontSize: 18, marginBottom: 8, color: role === r.id ? '#E8375A' : 'rgba(255,255,255,0.4)', lineHeight: 1 }}>{r.glyph}</span>
                          <span className="font-display font-semibold" style={{ fontSize: 12.5, color: role === r.id ? '#fff' : 'rgba(255,255,255,0.55)', letterSpacing: '-0.01em', lineHeight: 1.2, fontFamily: "'Bricolage Grotesque',sans-serif" }}>{r.label}</span>
                        </button>
                      ))}
                    </div>
                    <PrimaryButton onClick={nextSignup} disabled={!role}>
                      Continue →
                    </PrimaryButton>
                  </div>
                )}

                {/* ── SIGNUP STEP 4: Interests ── */}
                {flow === 'signup' && signupStep === 4 && (
                  <div className="flex flex-col gap-8">
                    <div>
                      <StepLabel step={4} total={4} />
                      <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(26px, 3.2vw, 44px)', lineHeight: 1.0, letterSpacing: '-0.03em', marginTop: 10 }}>
                        What are you<br />here to do?
                      </h2>
                      <p className="font-mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em', marginTop: 8 }}>
                        Select everything that applies.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {INTERESTS.map(it => {
                        const active = interests.includes(it.id)
                        return (
                          <button
                            key={it.id}
                            onClick={() => toggleInterest(it.id)}
                            className="transition-all"
                            style={{
                              border: `1px solid ${active ? '#E8375A' : 'rgba(255,255,255,0.1)'}`,
                              borderRadius: 999,
                              padding: '10px 20px',
                              backgroundColor: active ? 'rgba(232,55,90,0.1)' : 'rgba(255,255,255,0.03)',
                              color: active ? '#fff' : 'rgba(255,255,255,0.45)',
                              fontSize: 13,
                              fontFamily: "'Bricolage Grotesque',sans-serif",
                              fontWeight: 600,
                              letterSpacing: '-0.01em',
                              cursor: 'pointer',
                            }}
                          >
                            {active && <span style={{ marginRight: 6, color: '#E8375A' }}>✓</span>}
                            {it.label}
                          </button>
                        )
                      })}
                    </div>
                    <PrimaryButton onClick={goToPlatform}>
                      Enter Beyou →
                    </PrimaryButton>
                  </div>
                )}

                {/* ── SIGN IN STEP 1: Email ── */}
                {flow === 'signin' && signinStep === 1 && (
                  <div className="flex flex-col gap-10">
                    <div>
                      <p className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: '0.36em', color: 'rgba(255,255,255,0.28)', marginBottom: 10 }}>Sign in</p>
                      <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(26px, 3.2vw, 44px)', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
                        Welcome back.
                      </h2>
                    </div>
                    <PremiumInput label="Email address" value={siEmail} onChange={setSiEmail} type="email" placeholder="you@studio.com" autoFocus />
                    <PrimaryButton onClick={nextSignin} disabled={siEmail.length < 4}>
                      Continue →
                    </PrimaryButton>
                    <div className="text-center">
                      <button
                        onClick={startSignup}
                        style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, fontFamily: "'DM Mono',monospace", letterSpacing: '0.06em', background: 'none', border: 'none', cursor: 'pointer' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                      >
                        Don't have an account? Join →
                      </button>
                    </div>
                  </div>
                )}

                {/* ── SIGN IN STEP 2: Password ── */}
                {flow === 'signin' && signinStep === 2 && (
                  <div className="flex flex-col gap-10">
                    <div>
                      <p className="font-mono" style={{ fontSize: 11, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>
                        Signing in as <span style={{ color: 'rgba(255,255,255,0.6)' }}>{siEmail}</span>
                      </p>
                      <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(26px, 3.2vw, 44px)', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
                        Enter your<br />password.
                      </h2>
                    </div>
                    <PremiumInput label="Password" value={siPass} onChange={setSiPass} type="password" placeholder="••••••••" autoFocus />
                    <PrimaryButton onClick={nextSignin} disabled={siPass.length < 1}>
                      Sign in →
                    </PrimaryButton>
                    <div className="text-center">
                      <button
                        style={{ color: 'rgba(255,255,255,0.22)', fontSize: 11, fontFamily: "'DM Mono',monospace", letterSpacing: '0.06em', background: 'none', border: 'none', cursor: 'pointer' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.22)')}
                      >
                        Forgot your password?
                      </button>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom watermark */}
        <div className="flex-shrink-0 text-center pb-6">
          <span className="font-mono" style={{ fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.1)', textTransform: 'uppercase' }}>
            MA IxD · Dissertation 2024 · Beyou Platform
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── Shared: step label ── */
function StepLabel({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          style={{
            width: i === step - 1 ? 20 : 6,
            height: 4,
            borderRadius: 9999,
            backgroundColor: i < step ? '#E8375A' : 'rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
          }}
        />
      ))}
      <span className="font-mono" style={{ fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.25)', marginLeft: 4 }}>
        {step} / {total}
      </span>
    </div>
  )
}

/* ── Shared: primary button ── */
function PrimaryButton({ onClick, disabled, children }: { onClick: () => void; disabled?: boolean; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full font-display font-bold transition-all"
      style={{
        backgroundColor: disabled ? 'rgba(232,55,90,0.3)' : '#E8375A',
        color: disabled ? 'rgba(255,255,255,0.4)' : '#fff',
        border: 'none',
        borderRadius: 14,
        padding: '17px 24px',
        fontSize: 15,
        letterSpacing: '0.01em',
        cursor: disabled ? 'default' : 'pointer',
        fontFamily: "'Bricolage Grotesque',sans-serif",
        transition: 'background-color 0.2s, color 0.2s',
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.backgroundColor = '#d42d4e' }}
      onMouseLeave={e => { if (!disabled) e.currentTarget.style.backgroundColor = '#E8375A' }}
    >
      {children}
    </button>
  )
}
