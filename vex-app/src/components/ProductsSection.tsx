import { useRef, useState, useEffect, MouseEvent } from 'react'

const products = [
  {
    code: 'VEX-FUND-001',
    label: 'VENTURE FUND',
    name: 'The Fund',
    tagline: 'Strategic Capital Deployment',
    description:
      'Deep-tech and transformative infrastructure. We write the first check and stand by founders through every inflection point.',
    stats: [
      { key: 'AUM', val: '$340M' },
      { key: 'Stage', val: 'Pre-seed → A' },
      { key: 'Sectors', val: '7 Verticals' },
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <polygon points="20,4 36,32 4,32" stroke="#D4A853" strokeWidth="1" fill="rgba(212,168,83,0.05)" />
        <circle cx="20" cy="20" r="6" stroke="#D4A853" strokeWidth="0.8" fill="none" />
        <line x1="20" y1="14" x2="20" y2="4" stroke="#D4A853" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    code: 'VEX-BUILD-002',
    label: 'VENTURE STUDIO',
    name: 'The Studio',
    tagline: 'Co-Creating From Zero',
    description:
      'We don\'t just fund companies — we build them. From thesis to team to traction, we architect ventures alongside world-class operators.',
    stats: [
      { key: 'Ventures Built', val: '23' },
      { key: 'Success Rate', val: '78%' },
      { key: 'Avg. Time to MVP', val: '90 Days' },
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="32" height="32" stroke="#D4A853" strokeWidth="1" fill="rgba(212,168,83,0.05)" />
        <rect x="12" y="12" width="16" height="16" stroke="#D4A853" strokeWidth="0.8" fill="none" />
        <line x1="4" y1="4" x2="12" y2="12" stroke="#D4A853" strokeWidth="0.8" />
        <line x1="36" y1="4" x2="28" y2="12" stroke="#D4A853" strokeWidth="0.8" />
        <line x1="4" y1="36" x2="12" y2="28" stroke="#D4A853" strokeWidth="0.8" />
        <line x1="36" y1="36" x2="28" y2="28" stroke="#D4A853" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    code: 'VEX-ADVS-003',
    label: 'STRATEGIC ADVISORY',
    name: 'The Council',
    tagline: 'Wisdom at Every Stage',
    description:
      'Battle-tested operators and domain experts embedded in your corner. Board strategy, M&A, GTM — we\'ve seen every chapter.',
    stats: [
      { key: 'Advisors', val: '31 Experts' },
      { key: 'Coverage', val: 'Global' },
      { key: 'Avg. Experience', val: '18 Years' },
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#D4A853" strokeWidth="1" fill="rgba(212,168,83,0.05)" />
        <circle cx="20" cy="20" r="8" stroke="#D4A853" strokeWidth="0.8" fill="none" />
        <line x1="20" y1="4" x2="20" y2="12" stroke="#D4A853" strokeWidth="0.8" />
        <line x1="20" y1="28" x2="20" y2="36" stroke="#D4A853" strokeWidth="0.8" />
        <line x1="4" y1="20" x2="12" y2="20" stroke="#D4A853" strokeWidth="0.8" />
        <line x1="28" y1="20" x2="36" y2="20" stroke="#D4A853" strokeWidth="0.8" />
      </svg>
    ),
  },
]

function EquipmentRack() {
  return (
    <svg
      viewBox="0 0 1440 100"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ height: 100 }}
    >
      <defs>
        <linearGradient id="rail-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a1208" />
          <stop offset="15%" stopColor="#3d2a0e" />
          <stop offset="50%" stopColor="#5a3d15" />
          <stop offset="85%" stopColor="#3d2a0e" />
          <stop offset="100%" stopColor="#1a1208" />
        </linearGradient>
        <linearGradient id="rail-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(212,168,83,0.3)" />
          <stop offset="40%" stopColor="rgba(212,168,83,0.05)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </linearGradient>
        <filter id="rail-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#D4A853" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Main rail bar */}
      <rect x="0" y="28" width="1440" height="12" fill="url(#rail-grad)" filter="url(#rail-shadow)" rx="2" />
      <rect x="0" y="28" width="1440" height="4" fill="url(#rail-shine)" rx="2" />

      {/* Bolt connectors every ~200px */}
      {[120, 320, 520, 720, 920, 1120, 1320].map((x) => (
        <g key={x}>
          <circle cx={x} cy={34} r={5} fill="#2a1e0a" stroke="#8B6914" strokeWidth="0.8" />
          <circle cx={x} cy={34} r={2} fill="#D4A853" opacity="0.4" />
        </g>
      ))}

      {/* Hanging chains/hooks at card positions */}
      {[245, 720, 1195].map((x, i) => (
        <g key={i} className="sway" style={{ animationDelay: `${i * 0.8}s` }}>
          {/* Chain links */}
          {[0, 1, 2, 3].map((link) => (
            <ellipse
              key={link}
              cx={x}
              cy={46 + link * 10}
              rx={3}
              ry={4}
              fill="none"
              stroke="#5a3d15"
              strokeWidth="1.2"
              transform={link % 2 === 0 ? '' : `rotate(90, ${x}, ${46 + link * 10})`}
            />
          ))}
          {/* Hook */}
          <path
            d={`M ${x - 4} ${88} Q ${x - 6} ${96} ${x} ${96} Q ${x + 6} ${96} ${x + 4} ${88}`}
            fill="none"
            stroke="#8B6914"
            strokeWidth="1.5"
          />
          {/* Tag */}
          <rect x={x - 20} y={90} width={40} height={10} rx={1} fill="#1a1208" stroke="#D4A853" strokeWidth="0.5" />
          <text
            x={x}
            y={98}
            textAnchor="middle"
            fill="#D4A853"
            fontSize="5"
            fontFamily="monospace"
            letterSpacing="1"
          >
            {['FUND', 'STUDIO', 'COUNCIL'][i]}
          </text>
        </g>
      ))}

      {/* Serial number plate */}
      <rect x="10" y="22" width="160" height="16" rx="2" fill="#0d0a05" stroke="#3d2a0e" strokeWidth="0.5" />
      <text x="20" y="33" fill="#8B6914" fontSize="7" fontFamily="monospace" letterSpacing="1.5">
        VEX-ARMORY // REV.III
      </text>
    </svg>
  )
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({ x: (y - 0.5) * 14, y: (x - 0.5) * -14 })
    setGlowPos({ x: x * 100, y: y * 100 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <div
      ref={cardRef}
      className="deco-card reveal"
      data-hover
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transitionDelay: `${index * 0.12}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer frame — clipped corner */}
      <div
        className="relative border border-deco-gold/20 transition-colors duration-500"
        style={{
          background: `rgba(10,8,5,0.92)`,
          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
          boxShadow: hovered
            ? '0 0 60px rgba(212,168,83,0.12), inset 0 0 40px rgba(212,168,83,0.03)'
            : '0 0 0 transparent',
          transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
          borderColor: hovered ? 'rgba(212,168,83,0.45)' : 'rgba(212,168,83,0.2)',
        }}
      >
        {/* Moving glow highlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 180px at ${glowPos.x}% ${glowPos.y}%, rgba(212,168,83,0.08) 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Header strip */}
        <div
          className="flex items-center justify-between px-4 py-2 border-b border-deco-gold/15"
          style={{ background: 'rgba(212,168,83,0.04)' }}
        >
          <span
            className="font-mono text-xs tracking-[0.25em] text-deco-gold/60"
            style={{ letterSpacing: '0.2em' }}
          >
            {product.code}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600 tracking-widest uppercase">STATUS</span>
            <div
              className="w-2 h-2 rounded-full bg-deco-gold led-active"
              style={{ boxShadow: '0 0 6px rgba(212,168,83,0.8)' }}
            />
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Icon + label */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="text-xs tracking-[0.3em] text-deco-gold/50 uppercase mb-2 font-mono">
                {product.label}
              </div>
              <h3
                className="text-2xl font-light text-white"
                style={{ letterSpacing: '-0.02em' }}
              >
                {product.name}
              </h3>
              <p className="text-xs text-deco-gold/70 mt-1 tracking-wider">{product.tagline}</p>
            </div>
            <div
              className="transition-all duration-400"
              style={{
                filter: hovered
                  ? 'drop-shadow(0 0 8px rgba(212,168,83,0.6))'
                  : 'drop-shadow(0 0 2px rgba(212,168,83,0.2))',
              }}
            >
              {product.icon}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed mb-6">{product.description}</p>

          {/* Stat grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {product.stats.map(({ key, val }) => (
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
            Access {product.name} ▶
          </button>
        </div>

        {/* Corner cut decoration */}
        <div
          className="absolute top-0 right-0 w-5 h-5 pointer-events-none"
          style={{ borderTop: '1px solid rgba(212,168,83,0.4)', borderRight: '1px solid rgba(212,168,83,0.4)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-5 h-5 pointer-events-none"
          style={{ borderBottom: '1px solid rgba(212,168,83,0.4)', borderLeft: '1px solid rgba(212,168,83,0.4)' }}
        />
      </div>
    </div>
  )
}

export function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [spotlight, setSpotlight] = useState({ x: -9999, y: -9999 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseLeave = () => setSpotlight({ x: -9999, y: -9999 })

  return (
    <section
      id="building"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ background: '#050403' }}
    >
      {/* ── Cave ceiling texture ── */}
      <div
        className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #0a0805, #2a1e0e 20%, #1a1208 50%, #2a1e0e 80%, #0a0805)' }}
      />

      {/* ── Three spotlight beams ── */}
      {[20, 50, 80].map((pct, i) => (
        <div
          key={i}
          className="absolute top-0 pointer-events-none"
          style={{
            left: `${pct}%`,
            width: '1px',
            height: '100%',
            background: `linear-gradient(180deg, rgba(212,168,83,0.18) 0%, rgba(212,168,83,0.06) 40%, transparent 70%)`,
            filter: 'blur(40px)',
            transform: 'translateX(-50%)',
          }}
        />
      ))}

      {/* ── Batman spotlight (cursor) ── */}
      <div
        className="batman-spotlight-overlay"
        style={{
          background: `radial-gradient(circle 350px at ${spotlight.x}px ${spotlight.y}px, rgba(212,168,83,0.06) 0%, transparent 70%)`,
        }}
      />

      {/* ── Deco wall pattern — subtle repeating geometry ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #D4A853 0px, #D4A853 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(90deg, #D4A853 0px, #D4A853 1px, transparent 1px, transparent 60px)
          `,
        }}
      />

      {/* ── Corner deco ornaments ── */}
      <svg className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-20" viewBox="0 0 128 128">
        <path d="M 0 64 L 0 0 L 64 0" fill="none" stroke="#D4A853" strokeWidth="0.8" />
        <path d="M 0 48 L 0 0 L 48 0" fill="none" stroke="#D4A853" strokeWidth="0.4" />
        <path d="M 20 0 L 20 20 L 0 20" fill="none" stroke="#D4A853" strokeWidth="0.6" />
      </svg>
      <svg className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20" viewBox="0 0 128 128">
        <path d="M 128 64 L 128 0 L 64 0" fill="none" stroke="#D4A853" strokeWidth="0.8" />
        <path d="M 128 48 L 128 0 L 80 0" fill="none" stroke="#D4A853" strokeWidth="0.4" />
        <path d="M 108 0 L 108 20 L 128 20" fill="none" stroke="#D4A853" strokeWidth="0.6" />
      </svg>

      {/* ── Equipment rack at top ── */}
      <div className="relative z-10 pt-8">
        <EquipmentRack />
      </div>

      {/* ── Section header ── */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 pt-6 pb-12">
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-4">
            <svg width="80" height="20" viewBox="0 0 80 20">
              <line x1="0" y1="10" x2="30" y2="10" stroke="#D4A853" strokeWidth="0.5" />
              <rect x="33" y="6" width="8" height="8" fill="none" stroke="#D4A853" strokeWidth="0.5" transform="rotate(45,37,10)" />
              <line x1="44" y1="10" x2="80" y2="10" stroke="#D4A853" strokeWidth="0.5" />
            </svg>
            <span className="text-xs tracking-[0.4em] text-deco-gold uppercase" style={{ fontWeight: 300 }}>
              The Arsenal
            </span>
            <svg width="80" height="20" viewBox="0 0 80 20">
              <line x1="80" y1="10" x2="50" y2="10" stroke="#D4A853" strokeWidth="0.5" />
              <rect x="39" y="6" width="8" height="8" fill="none" stroke="#D4A853" strokeWidth="0.5" transform="rotate(45,43,10)" />
              <line x1="36" y1="10" x2="0" y2="10" stroke="#D4A853" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        <h2
          className="reveal text-center text-4xl md:text-5xl font-normal text-white mb-4"
          style={{ letterSpacing: '-0.03em' }}
        >
          Our three instruments
        </h2>
        <p
          className="reveal text-center text-gray-500 text-base max-w-xl mx-auto mb-16"
          style={{ transitionDelay: '0.1s' }}
        >
          Each forged for a specific purpose. Deployed with precision.
        </p>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <ProductCard key={product.code} product={product} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center mt-16" style={{ transitionDelay: '0.4s' }}>
          <button
            data-hover
            className="liquid-glass border border-deco-gold/30 text-deco-gold px-10 py-3 rounded-lg text-sm tracking-[0.2em] uppercase font-mono hover:bg-deco-gold hover:text-black transition-all duration-400"
          >
            Enter the Armory
          </button>
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(5,4,3,1), transparent)' }}
      />
    </section>
  )
}
