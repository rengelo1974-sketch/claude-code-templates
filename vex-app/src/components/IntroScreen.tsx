import { useState, useEffect } from 'react'

function DecoCrest() {
  return (
    <svg width="320" height="160" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top fan */}
      {[-60,-45,-30,-15,0,15,30,45,60].map((deg, i) => (
        <line
          key={i}
          x1="160" y1="80"
          x2={160 + Math.sin((deg * Math.PI) / 180) * 90}
          y2={80 - Math.cos((deg * Math.PI) / 180) * 90}
          stroke="#D4A853"
          strokeWidth="0.6"
          strokeOpacity="0.7"
        />
      ))}
      {/* Horizontal rules */}
      <line x1="60"  y1="72" x2="260" y2="72" stroke="#D4A853" strokeWidth="0.5" strokeOpacity="0.5"/>
      <line x1="80"  y1="76" x2="240" y2="76" stroke="#D4A853" strokeWidth="0.3" strokeOpacity="0.4"/>
      {/* Diamond center */}
      <polygon points="160,60 170,72 160,84 150,72" fill="none" stroke="#D4A853" strokeWidth="0.8"/>
      <polygon points="160,64 167,72 160,80 153,72" fill="rgba(212,168,83,0.1)" stroke="#D4A853" strokeWidth="0.4"/>
      {/* Side ornaments */}
      <rect x="52" y="68" width="8" height="8" fill="none" stroke="#D4A853" strokeWidth="0.5" transform="rotate(45,56,72)"/>
      <rect x="260" y="68" width="8" height="8" fill="none" stroke="#D4A853" strokeWidth="0.5" transform="rotate(45,264,72)"/>
      {/* Bottom fan (mirrored) */}
      {[-60,-45,-30,-15,0,15,30,45,60].map((deg, i) => (
        <line
          key={i}
          x1="160" y1="80"
          x2={160 + Math.sin((deg * Math.PI) / 180) * 90}
          y2={80 + Math.cos((deg * Math.PI) / 180) * 90}
          stroke="#D4A853"
          strokeWidth="0.6"
          strokeOpacity="0.7"
        />
      ))}
      <line x1="60"  y1="88" x2="260" y2="88" stroke="#D4A853" strokeWidth="0.5" strokeOpacity="0.5"/>
      <line x1="80"  y1="84" x2="240" y2="84" stroke="#D4A853" strokeWidth="0.3" strokeOpacity="0.4"/>
    </svg>
  )
}

export function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'idle' | 'logo' | 'sweep' | 'exit'>('idle')

  useEffect(() => {
    const t0 = setTimeout(() => setPhase('logo'),  80)
    const t1 = setTimeout(() => setPhase('sweep'), 1600)
    const t2 = setTimeout(() => setPhase('exit'),  2200)
    const t3 = setTimeout(onComplete,               3200)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  const exiting = phase === 'exit'
  const swept   = phase === 'sweep' || exiting

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center"
      style={{
        background: '#050403',
        transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
        transition: exiting ? 'transform 1.05s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
      }}
    >
      {/* Subtle deco grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(212,168,83,0.04) 0px, rgba(212,168,83,0.04) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(90deg, rgba(212,168,83,0.04) 0px, rgba(212,168,83,0.04) 1px, transparent 1px, transparent 80px)
          `,
        }}
      />

      {/* Corner deco marks */}
      {[
        'top-8 left-8',
        'top-8 right-8 rotate-90',
        'bottom-8 left-8 -rotate-90',
        'bottom-8 right-8 rotate-180',
      ].map((pos, i) => (
        <svg key={i} className={`absolute w-16 h-16 ${pos} opacity-30`} viewBox="0 0 64 64" fill="none">
          <path d="M 0 32 L 0 0 L 32 0" stroke="#D4A853" strokeWidth="0.8"/>
          <path d="M 0 20 L 0 0 L 20 0" stroke="#D4A853" strokeWidth="0.4"/>
          <circle cx="8" cy="8" r="2" fill="none" stroke="#D4A853" strokeWidth="0.5"/>
        </svg>
      ))}

      {/* Central content — fades out when sweep starts */}
      <div
        className="flex flex-col items-center gap-0"
        style={{
          opacity: swept ? 0 : phase === 'logo' ? 1 : 0,
          transition: swept ? 'opacity 0.35s ease' : 'opacity 0.7s ease',
        }}
      >
        <DecoCrest />

        {/* Logo */}
        <div
          className="relative px-16 py-4"
          style={{
            borderLeft: '1px solid rgba(212,168,83,0.35)',
            borderRight: '1px solid rgba(212,168,83,0.35)',
          }}
        >
          <span
            className="text-7xl font-semibold text-white"
            style={{ letterSpacing: '0.35em', fontFamily: 'Inter, sans-serif' }}
          >
            VEX
          </span>
          {/* Thin top/bottom rules */}
          <div className="absolute top-0 left-4 right-4 h-px bg-deco-gold opacity-40" />
          <div className="absolute bottom-0 left-4 right-4 h-px bg-deco-gold opacity-40" />
        </div>

        {/* Tagline */}
        <p
          className="text-xs tracking-[0.45em] text-deco-gold/60 uppercase mt-4"
          style={{ fontWeight: 300 }}
        >
          Maison de Mode
        </p>

        {/* Bottom crest (reflected) */}
        <div style={{ transform: 'scaleY(-1)', marginTop: '-8px' }}>
          <DecoCrest />
        </div>
      </div>

      {/* Sweeping horizontal gold line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #D4A853 20%, rgba(212,168,83,0.8) 50%, #D4A853 80%, transparent 100%)',
          boxShadow: '0 0 12px rgba(212,168,83,0.5)',
          transform: swept ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left center',
          transition: swept ? 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        }}
      />
    </div>
  )
}
