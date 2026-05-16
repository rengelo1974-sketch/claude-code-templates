import { useState, useEffect } from 'react'
import { MagneticButton } from './MagneticButton'

const links = ['Collection', 'Lookbook', 'About', 'Store']

export function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="px-6 md:px-12 lg:px-16 pt-6 relative z-20">
      <nav
        className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between"
        style={{
          transition: 'box-shadow 0.3s ease',
          boxShadow: scrolled
            ? 'inset 0 1px 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.4)'
            : 'inset 0 1px 1px rgba(255,255,255,0.1)',
        }}
      >
        <span className="text-2xl font-semibold tracking-tight text-white select-none">VEX</span>

        <div className="hidden md:flex items-center gap-8 text-sm text-white">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              data-hover
              className="relative py-1 transition-colors duration-200 hover:text-gray-300"
              onMouseEnter={() => setActiveLink(link)}
              onMouseLeave={() => setActiveLink(null)}
            >
              {link}
              <span
                className="absolute bottom-0 left-0 h-px bg-white transition-all duration-300"
                style={{ width: activeLink === link ? '100%' : '0%' }}
              />
            </a>
          ))}
        </div>

        <MagneticButton className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
          Shop Now
        </MagneticButton>
      </nav>
    </div>
  )
}
