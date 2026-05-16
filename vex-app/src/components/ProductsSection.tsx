import { useRef, useState, useEffect, MouseEvent } from 'react'

const collections = [
  {
    code: 'SS25-NOIR-01',
    season: 'SS25',
    label: 'THE NOIR EDIT',
    name: 'Noir Collection',
    tagline: 'Shadow-cut silhouettes',
    description:
      'Structured coats and minimal suiting in deep charcoal and matte black. Geometry in motion — each piece sculpted to disappear into the night.',
    details: [
      { key: 'From', val: '€290' },
      { key: 'Sizes', val: 'XS – 2XL' },
      { key: 'Material', val: 'Wool / Silk' },
    ],
    badge: 'BESTSELLER',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        {/* Coat silhouette */}
        <path d="M 14 8 L 8 16 L 8 40 L 36 40 L 36 16 L 30 8 L 22 12 Z" stroke="#D4A853" strokeWidth="0.9" fill="rgba(212,168,83,0.04)" strokeLinejoin="round"/>
        <line x1="22" y1="12" x2="22" y2="40" stroke="#D4A853" strokeWidth="0.5" strokeDasharray="2 2"/>
        <path d="M 14 8 Q 18 6 22 8 Q 26 6 30 8" stroke="#D4A853" strokeWidth="0.7" fill="none"/>
      </svg>
    ),
  },
  {
    code: 'SS25-DECO-02',
    season: 'SS25',
    label: 'THE DECO LINE',
    name: 'Deco Collection',
    tagline: 'Geometry in fabric',
    description:
      'Art Deco patterns translated into jacquard and embroidered textiles. Chevrons, stepped forms and sunburst motifs woven into every garment.',
    details: [
      { key: 'From', val: '€450' },
      { key: 'Sizes', val: 'XS – XL' },
      { key: 'Material', val: 'Jacquard / Cotton' },
    ],
    badge: 'NEW',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        {/* Dress with deco pattern */}
        <path d="M 16 8 L 8 38 L 36 38 L 28 8 Z" stroke="#D4A853" strokeWidth="0.9" fill="rgba(212,168,83,0.04)"/>
        <line x1="16" y1="8" x2="28" y2="8" stroke="#D4A853" strokeWidth="0.9"/>
        {/* Deco chevrons */}
        <polyline points="12,20 22,16 32,20" fill="none" stroke="#D4A853" strokeWidth="0.5" strokeOpacity="0.7"/>
        <polyline points="11,26 22,22 33,26" fill="none" stroke="#D4A853" strokeWidth="0.5" strokeOpacity="0.6"/>
        <polyline points="10,32 22,28 34,32" fill="none" stroke="#D4A853" strokeWidth="0.5" strokeOpacity="0.5"/>
      </svg>
    ),
  },
  {
    code: 'SS25-EDGE-03',
    season: 'SS25',
    label: 'THE EDGE SERIES',
    name: 'Edge Collection',
    tagline: 'Avant-garde structures',
    description:
      'Deconstructed tailoring meets dark streetwear. Asymmetric hems, exaggerated shoulders and raw edges for those who rewrite the rules.',
    details: [
      { key: 'From', val: '€195' },
      { key: 'Sizes', val: 'XS – 3XL' },
      { key: 'Material', val: 'Denim / Tech' },
    ],
    badge: 'LIMITED',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        {/* Asymmetric jacket */}
        <path d="M 12 10 L 6 18 L 6 38 L 22 38 L 38 32 L 38 18 L 32 10 Z" stroke="#D4A853" strokeWidth="0.9" fill="rgba(212,168,83,0.04)" strokeLinejoin="round"/>
        <line x1="22" y1="10" x2="22" y2="38" stroke="#D4A853" strokeWidth="0.5"/>
        {/* Asymmetric collar */}
        <path d="M 12 10 L 18 16 L 22 10" stroke="#D4A853" strokeWidth="0.7" fill="none"/>
        <path d="M 32 10 L 28 14 L 22 10" stroke="#D4A853" strokeWidth="0.7" fill="none"/>
      </svg>
    ),
  },
]

function ClothingRack() {
  return (
    <svg viewBox="0 0 1440 110" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ height: 110 }}>
      <defs>
        <linearGradient id="rail-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a1208"/>
          <stop offset="15%" stopColor="#3d2a0e"/>
          <stop offset="50%" stopColor="#5a3d15"/>
          <stop offset="85%" stopColor="#3d2a0e"/>
          <stop offset="100%" stopColor="#1a1208"/>
        </linearGradient>
        <linearGradient id="rail-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(212,168,83,0.3)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
        </linearGradient>
        <filter id="rail-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#D4A853" floodOpacity="0.15"/>
        </filter>
      </defs>

      {/* Wall mount brackets */}
      <rect x="60"   y="18" width="16" height="22" rx="2" fill="#1a1208" stroke="#3d2a0e" strokeWidth="0.8"/>
      <rect x="1364" y="18" width="16" height="22" rx="2" fill="#1a1208" stroke="#3d2a0e" strokeWidth="0.8"/>

      {/* Main rod */}
      <rect x="60" y="30" width="1320" height="10" fill="url(#rail-grad)" filter="url(#rail-shadow)" rx="5"/>
      <rect x="60" y="30" width="1320" height="4" fill="url(#rail-shine)" rx="5"/>

      {/* Bolt rings along rod */}
      {[200, 400, 600, 720, 840, 1040, 1240].map((x) => (
        <g key={x}>
          <circle cx={x} cy={35} r={6} fill="#2a1e0a" stroke="#8B6914" strokeWidth="0.8"/>
          <circle cx={x} cy={35} r={2.5} fill="#D4A853" opacity="0.35"/>
        </g>
      ))}

      {/* Clothing hangers at the three card positions */}
      {[245, 720, 1195].map((x, i) => (
        <g key={i} className="sway" style={{ animationDelay: `${i * 1.1}s` }}>
          {/* Hanger hook */}
          <path
            d={`M ${x} 40 L ${x} 52`}
            stroke="#8B6914" strokeWidth="1.5"
          />
          {/* Hanger shape */}
          <path
            d={`M ${x - 28} 70 Q ${x - 28} 58 ${x} 52 Q ${x + 28} 58 ${x + 28} 70`}
            fill="none" stroke="#5a3d15" strokeWidth="1.8"
          />
          <line x1={x - 28} y1="70" x2={x + 28} y2="70" stroke="#5a3d15" strokeWidth="1.4"/>
          {/* Garment hanging (abstract) */}
          <path
            d={`M ${x - 26} 70 L ${x - 32} 100 L ${x + 32} 100 L ${x + 26} 70`}
            fill="rgba(10,8,5,0.9)" stroke="#3d2a0e" strokeWidth="0.8"
          />
          {/* Label tag */}
          <rect x={x - 12} y={96} width={24} height={14} rx="1" fill="#0d0a05" stroke="#D4A853" strokeWidth="0.5"/>
          <text x={x} y={106} textAnchor="middle" fill="#8B6914" fontSize="5.5" fontFamily="monospace" letterSpacing="0.5">
            {['NOIR', 'DECO', 'EDGE'][i]}
          </text>
        </g>
      ))}

      {/* Store label plate */}
      <rect x="10" y="22" width="130" height="16" rx="2" fill="#0d0a05" stroke="#3d2a0e" strokeWidth="0.5"/>
      <text x="20" y="33" fill="#8B6914" fontSize="7" fontFamily="monospace" letterSpacing="1.2">
        VEX // SS25 RACK
      </text>
    </svg>
  )
}

function CollectionCard({
  collection,
  index,
}: {
  collection: (typeof collections)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = cardRef.current?.getBoundingClientRect()
    if (!r) return
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    setTilt({ x: (y - 0.5) * 14, y: (x - 0.5) * -14 })
    setGlowPos({ x: x * 100, y: y * 100 })
  }

  return (
    <div
      ref={cardRef}
      className="deco-card reveal"
      data-hover
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transitionDelay: `${index * 0.12}s` }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
    >
      <div
        className="relative border transition-colors duration-500"
        style={{
          background: 'rgba(10,8,5,0.92)',
          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
          boxShadow: hovered ? '0 0 60px rgba(212,168,83,0.12), inset 0 0 40px rgba(212,168,83,0.03)' : '0 0 0 transparent',
          borderColor: hovered ? 'rgba(212,168,83,0.45)' : 'rgba(212,168,83,0.2)',
          transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* Moving glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 180px at ${glowPos.x}% ${glowPos.y}%, rgba(212,168,83,0.08) 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-deco-gold/15" style={{ background: 'rgba(212,168,83,0.04)' }}>
          <span className="font-mono text-xs tracking-[0.2em] text-deco-gold/60">{collection.code}</span>
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-mono tracking-widest px-2 py-0.5 border border-deco-gold/30 text-deco-gold/80"
              style={{ fontSize: '0.6rem' }}
            >
              {collection.badge}
            </span>
            <div className="w-2 h-2 rounded-full bg-deco-gold led-active" style={{ boxShadow: '0 0 6px rgba(212,168,83,0.8)' }} />
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="text-xs tracking-[0.3em] text-deco-gold/50 uppercase mb-2 font-mono">{collection.label}</div>
              <h3 className="text-2xl font-light text-white" style={{ letterSpacing: '-0.02em' }}>{collection.name}</h3>
              <p className="text-xs text-deco-gold/70 mt-1 tracking-wider">{collection.tagline}</p>
            </div>
            <div style={{ filter: hovered ? 'drop-shadow(0 0 8px rgba(212,168,83,0.6))' : 'drop-shadow(0 0 2px rgba(212,168,83,0.2))', transition: 'filter 0.4s' }}>
              {collection.icon}
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-6">{collection.description}</p>

          {/* Details */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {collection.details.map(({ key, val }) => (
              <div key={key} className="border-t border-deco-gold/15 pt-3">
                <div className="text-base font-light text-deco-gold/90">{val}</div>
                <div className="text-xs text-gray-600 mt-0.5 tracking-wider uppercase">{key}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            data-hover
            className="w-full py-2.5 text-sm tracking-[0.2em] uppercase font-mono border border-deco-gold/30 text-deco-gold/70 transition-all duration-300 hover:border-deco-gold hover:text-deco-gold hover:bg-deco-gold/5"
          >
            Shop {collection.name} ▶
          </button>
        </div>

        {/* Corner cuts */}
        <div className="absolute top-0 right-0 w-5 h-5 pointer-events-none" style={{ borderTop: '1px solid rgba(212,168,83,0.4)', borderRight: '1px solid rgba(212,168,83,0.4)' }} />
        <div className="absolute bottom-0 left-0 w-5 h-5 pointer-events-none" style={{ borderBottom: '1px solid rgba(212,168,83,0.4)', borderLeft: '1px solid rgba(212,168,83,0.4)' }} />
      </div>
    </div>
  )
}

export function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [spotlight, setSpotlight] = useState({ x: -9999, y: -9999 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }) },
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = sectionRef.current?.getBoundingClientRect()
    if (!r) return
    setSpotlight({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  return (
    <section
      id="collection"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      onMouseMove={onMouseMove}
      onMouseLeave={() => setSpotlight({ x: -9999, y: -9999 })}
      style={{ background: '#050403' }}
    >
      {/* Amber spotlight beams from rack */}
      {[20, 50, 80].map((pct, i) => (
        <div key={i} className="absolute top-0 pointer-events-none" style={{
          left: `${pct}%`, width: '1px', height: '100%',
          background: 'linear-gradient(180deg, rgba(212,168,83,0.18) 0%, rgba(212,168,83,0.06) 40%, transparent 70%)',
          filter: 'blur(40px)', transform: 'translateX(-50%)',
        }}/>
      ))}

      {/* Cursor spotlight */}
      <div className="batman-spotlight-overlay" style={{
        background: `radial-gradient(circle 350px at ${spotlight.x}px ${spotlight.y}px, rgba(212,168,83,0.06) 0%, transparent 70%)`,
      }}/>

      {/* Deco wall grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, #D4A853 0px, #D4A853 1px, transparent 1px, transparent 60px),
          repeating-linear-gradient(90deg, #D4A853 0px, #D4A853 1px, transparent 1px, transparent 60px)
        `,
      }}/>

      {/* Corner ornaments */}
      {['top-0 left-0', 'top-0 right-0 rotate-90', 'bottom-0 left-0 -rotate-90', 'bottom-0 right-0 rotate-180'].map((pos, i) => (
        <svg key={i} className={`absolute w-32 h-32 ${pos} pointer-events-none opacity-20`} viewBox="0 0 128 128" fill="none">
          <path d="M 0 64 L 0 0 L 64 0" stroke="#D4A853" strokeWidth="0.8"/>
          <path d="M 0 48 L 0 0 L 48 0" stroke="#D4A853" strokeWidth="0.4"/>
          <path d="M 20 0 L 20 20 L 0 20" stroke="#D4A853" strokeWidth="0.6"/>
        </svg>
      ))}

      {/* Clothing rack */}
      <div className="relative z-10 pt-8">
        <ClothingRack />
      </div>

      {/* Section header */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 pt-6 pb-12">
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-4">
            <svg width="80" height="20" viewBox="0 0 80 20">
              <line x1="0" y1="10" x2="30" y2="10" stroke="#D4A853" strokeWidth="0.5"/>
              <rect x="33" y="6" width="8" height="8" fill="none" stroke="#D4A853" strokeWidth="0.5" transform="rotate(45,37,10)"/>
              <line x1="44" y1="10" x2="80" y2="10" stroke="#D4A853" strokeWidth="0.5"/>
            </svg>
            <span className="text-xs tracking-[0.4em] text-deco-gold uppercase" style={{ fontWeight: 300 }}>
              Collections
            </span>
            <svg width="80" height="20" viewBox="0 0 80 20">
              <line x1="80" y1="10" x2="50" y2="10" stroke="#D4A853" strokeWidth="0.5"/>
              <rect x="39" y="6" width="8" height="8" fill="none" stroke="#D4A853" strokeWidth="0.5" transform="rotate(45,43,10)"/>
              <line x1="36" y1="10" x2="0" y2="10" stroke="#D4A853" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>

        <h2 className="reveal text-center text-4xl md:text-5xl font-normal text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
          Spring / Summer 2025
        </h2>
        <p className="reveal text-center text-gray-500 text-base max-w-xl mx-auto mb-16" style={{ transitionDelay: '0.1s' }}>
          Three capsules. One obsession: darkness made wearable.
        </p>

        {/* Collection cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {collections.map((col, i) => (
            <CollectionCard key={col.code} collection={col} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center mt-16" style={{ transitionDelay: '0.4s' }}>
          <button
            data-hover
            className="liquid-glass border border-deco-gold/30 text-deco-gold px-10 py-3 rounded-lg text-sm tracking-[0.2em] uppercase font-mono hover:bg-deco-gold hover:text-black transition-all duration-400"
          >
            Browse Full Collection
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(5,4,3,1), transparent)' }}/>
    </section>
  )
}
