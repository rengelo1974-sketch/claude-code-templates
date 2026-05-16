import { useEffect, useRef } from 'react'

function DecoCity() {
  return (
    <svg
      viewBox="0 0 1440 360"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <filter id="glow-city">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="win-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A853" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C8860A" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id="street-light" cx="50%" cy="0%" r="50%">
          <stop offset="0%" stopColor="#D4A853" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D4A853" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Street glow at bottom */}
      <rect x="0" y="300" width="1440" height="60" fill="url(#street-light)" />

      {/* Back-layer buildings — lighter silhouette */}
      <g fill="#0d0d14" opacity="0.85">
        <rect x="0" y="240" width="60" height="120" />
        <rect x="55" y="210" width="50" height="150" />
        <rect x="95" y="190" width="30" height="170" />
        <rect x="120" y="220" width="70" height="140" />
        <rect x="185" y="200" width="40" height="160" />
        <rect x="220" y="180" width="55" height="180" />
        <rect x="270" y="230" width="45" height="130" />
        <rect x="310" y="215" width="35" height="145" />
        {/* Right side */}
        <rect x="1100" y="240" width="60" height="120" />
        <rect x="1155" y="210" width="50" height="150" />
        <rect x="1200" y="185" width="35" height="175" />
        <rect x="1230" y="220" width="70" height="140" />
        <rect x="1295" y="195" width="45" height="165" />
        <rect x="1335" y="215" width="50" height="145" />
        <rect x="1380" y="230" width="60" height="130" />
      </g>

      {/* Mid-layer Art Deco buildings */}
      <g fill="#08080f">
        {/* Left group */}
        <rect x="30" y="260" width="55" height="100" />
        <rect x="35" y="245" width="45" height="15" />
        <rect x="40" y="238" width="35" height="8" />
        <rect x="45" y="232" width="25" height="7" />
        <polygon points="57,210 70,232 44,232" />

        <rect x="140" y="250" width="75" height="110" />
        <rect x="145" y="235" width="65" height="16" />
        <rect x="152" y="225" width="51" height="11" />
        <rect x="160" y="218" width="35" height="8" />
        <polygon points="177,195 192,218 162,218" />

        {/* Right group */}
        <rect x="1260" y="250" width="75" height="110" />
        <rect x="1265" y="235" width="65" height="16" />
        <rect x="1272" y="225" width="51" height="11" />
        <rect x="1280" y="218" width="35" height="8" />
        <polygon points="1297,195 1312,218 1282,218" />

        <rect x="1355" y="260" width="55" height="100" />
        <rect x="1358" y="245" width="49" height="16" />
        <rect x="1363" y="237" width="39" height="9" />
        <polygon points="1382,215 1395,237 1369,237" />
      </g>

      {/* Front-layer main towers */}
      <g fill="#050508">
        {/* Left tower — stepped Art Deco */}
        <rect x="80" y="360" width="120" height="1" />
        <rect x="100" y="270" width="80" height="90" />
        <rect x="108" y="255" width="64" height="16" />
        <rect x="116" y="242" width="48" height="14" />
        <rect x="124" y="232" width="32" height="11" />
        <rect x="132" y="225" width="16" height="8" />
        <polygon points="140,205 148,225 132,225" />

        {/* Right tower */}
        <rect x="1240" y="270" width="80" height="90" />
        <rect x="1248" y="255" width="64" height="16" />
        <rect x="1256" y="242" width="48" height="14" />
        <rect x="1264" y="232" width="32" height="11" />
        <rect x="1272" y="225" width="16" height="8" />
        <polygon points="1280,205 1288,225 1272,225" />

        {/* Central Empire-State-style tower */}
        <rect x="660" y="160" width="120" height="200" />
        <rect x="668" y="140" width="104" height="22" />
        <rect x="678" y="122" width="84" height="20" />
        <rect x="690" y="108" width="60" height="16" />
        <rect x="700" y="96" width="40" height="13" />
        <rect x="710" y="86" width="20" height="11" />
        <rect x="718" y="50" width="4" height="37" />
        {/* Art Deco crown lines */}
        <rect x="664" y="138" width="112" height="2" fill="#1a1820" />
        <rect x="674" y="120" width="92" height="2" fill="#1a1820" />
        <rect x="686" y="106" width="68" height="2" fill="#1a1820" />

        {/* Flanking towers */}
        <rect x="560" y="200" width="80" height="160" />
        <rect x="568" y="185" width="64" height="17" />
        <rect x="578" y="172" width="44" height="14" />
        <rect x="588" y="163" width="24" height="10" />
        <polygon points="600,143 610,163 590,163" />

        <rect x="800" y="200" width="80" height="160" />
        <rect x="808" y="185" width="64" height="17" />
        <rect x="818" y="172" width="44" height="14" />
        <rect x="828" y="163" width="24" height="10" />
        <polygon points="840,143 850,163 830,163" />
      </g>

      {/* Golden windows — back layer */}
      <g fill="url(#win-glow)" filter="url(#glow-city)" opacity="0.7">
        {/* Left buildings */}
        <rect x="58" y="218" width="5" height="5" rx="0.5" />
        <rect x="67" y="218" width="5" height="5" rx="0.5" />
        <rect x="58" y="228" width="5" height="5" rx="0.5" />
        <rect x="100" y="200" width="5" height="5" rx="0.5" />
        <rect x="109" y="200" width="5" height="5" rx="0.5" />
        <rect x="100" y="210" width="5" height="5" rx="0.5" />
        <rect x="126" y="228" width="5" height="5" rx="0.5" />
        <rect x="136" y="228" width="5" height="5" rx="0.5" />
        <rect x="146" y="228" width="5" height="5" rx="0.5" />
        {/* Right buildings */}
        <rect x="1302" y="218" width="5" height="5" rx="0.5" />
        <rect x="1313" y="218" width="5" height="5" rx="0.5" />
        <rect x="1302" y="228" width="5" height="5" rx="0.5" />
        <rect x="1340" y="225" width="5" height="5" rx="0.5" />
        <rect x="1350" y="225" width="5" height="5" rx="0.5" />
        <rect x="1360" y="225" width="5" height="5" rx="0.5" />
      </g>

      {/* Main building windows */}
      <g fill="url(#win-glow)" filter="url(#glow-city)">
        {/* Central tower */}
        {[0, 1, 2, 3, 4].map((col) =>
          [0, 1, 2, 3, 4, 5, 6].map((row) => (
            <rect
              key={`ct-${col}-${row}`}
              x={672 + col * 20}
              y={180 + row * 20}
              width={6}
              height={8}
              rx="0.5"
              opacity={Math.random() > 0.3 ? 1 : 0.1}
            />
          ))
        )}
        {/* Left flanking */}
        {[0, 1, 2].map((col) =>
          [0, 1, 2, 3].map((row) => (
            <rect
              key={`lf-${col}-${row}`}
              x={568 + col * 20}
              y={215 + row * 20}
              width={6}
              height={8}
              rx="0.5"
              opacity={Math.random() > 0.4 ? 1 : 0.1}
            />
          ))
        )}
        {/* Right flanking */}
        {[0, 1, 2].map((col) =>
          [0, 1, 2, 3].map((row) => (
            <rect
              key={`rf-${col}-${row}`}
              x={808 + col * 20}
              y={215 + row * 20}
              width={6}
              height={8}
              rx="0.5"
              opacity={Math.random() > 0.4 ? 1 : 0.1}
            />
          ))
        )}
      </g>

      {/* Fog layers */}
      <rect
        x="0"
        y="200"
        width="1440"
        height="80"
        fill="rgba(8,8,15,0.35)"
        className="fog-layer"
      />
      <rect
        x="-100"
        y="260"
        width="1640"
        height="60"
        fill="rgba(8,8,15,0.25)"
        style={{ animationDelay: '3s' }}
        className="fog-layer"
      />

      {/* Street reflection */}
      <rect x="0" y="340" width="1440" height="20" fill="rgba(212,168,83,0.04)" />
    </svg>
  )
}

export function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000 0%, #07070f 40%, #0a0a18 100%)',
      }}
    >
      {/* Art Deco top ornament */}
      <div className="flex justify-center pt-20 pb-10">
        <div className="flex items-center gap-4">
          <svg width="120" height="24" viewBox="0 0 120 24">
            <line x1="0" y1="12" x2="40" y2="12" stroke="#D4A853" strokeWidth="0.5" />
            <polygon points="44,12 50,6 56,12 50,18" fill="none" stroke="#D4A853" strokeWidth="0.5" />
            <line x1="56" y1="12" x2="64" y2="12" stroke="#D4A853" strokeWidth="0.5" />
          </svg>
          <span
            className="text-xs tracking-[0.4em] uppercase text-deco-gold"
            style={{ fontWeight: 300 }}
          >
            Our Story
          </span>
          <svg width="120" height="24" viewBox="0 0 120 24">
            <line x1="120" y1="12" x2="80" y2="12" stroke="#D4A853" strokeWidth="0.5" />
            <polygon points="76,12 70,6 64,12 70,18" fill="none" stroke="#D4A853" strokeWidth="0.5" />
            <line x1="64" y1="12" x2="56" y2="12" stroke="#D4A853" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <h2
              className="reveal text-4xl md:text-5xl font-normal text-white mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              We exist at the<br />
              <span className="text-deco-gold">intersection</span><br />
              of vision & capital.
            </h2>
            <p className="reveal text-gray-400 text-base md:text-lg leading-relaxed mb-6" style={{ transitionDelay: '0.1s' }}>
              VEX was built for a different era — one where the most consequential companies
              emerge not from spreadsheets, but from deeply held convictions about how the
              world should work.
            </p>
            <p className="reveal text-gray-500 text-sm leading-relaxed" style={{ transitionDelay: '0.2s' }}>
              We partner with founders at the earliest moments, when ideas are still raw
              and ambitions are still unbounded. We bring capital, craft, and counsel —
              the three forces that turn possibility into permanence.
            </p>

            {/* Deco stat row */}
            <div className="reveal mt-12 grid grid-cols-3 gap-8" style={{ transitionDelay: '0.3s' }}>
              {[
                { n: '47', label: 'Portfolio Co.' },
                { n: '$2B+', label: 'Total Value' },
                { n: '12', label: 'Exits' },
              ].map(({ n, label }) => (
                <div key={label} className="border-t border-deco-gold/30 pt-4">
                  <div className="text-2xl font-light text-deco-gold" style={{ letterSpacing: '-0.02em' }}>
                    {n}
                  </div>
                  <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: decorative deco panel */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div
              className="relative border border-deco-gold/20 p-8"
              style={{
                background: 'rgba(212,168,83,0.02)',
                clipPath:
                  'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
              }}
            >
              {/* Corner ornaments */}
              <svg
                className="absolute top-0 left-0"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M 0 16 L 0 0 L 16 0" fill="none" stroke="#D4A853" strokeWidth="0.8" />
              </svg>
              <svg
                className="absolute bottom-0 right-0"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M 32 16 L 32 32 L 16 32" fill="none" stroke="#D4A853" strokeWidth="0.8" />
              </svg>

              <p
                className="text-2xl font-light text-white leading-snug"
                style={{ letterSpacing: '-0.01em' }}
              >
                "The best founders don't look for investors — they look for believers."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-deco-gold/30" />
                <span className="text-xs text-deco-gold tracking-widest uppercase">
                  VEX Manifesto
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* City skyline pinned to bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[360px] pointer-events-none select-none"
        style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%)' }}
      >
        <DecoCity />
      </div>

      {/* Street glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(212,168,83,0.06) 0%, transparent 100%)',
        }}
      />
    </section>
  )
}
