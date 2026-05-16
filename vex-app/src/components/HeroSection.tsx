import { Navbar } from './Navbar'
import { AnimatedHeading } from './AnimatedHeading'
import { FadeIn } from './FadeIn'
import { MagneticButton } from './MagneticButton'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden" id="hero">
      {/* Raw video — no overlay */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />

        {/* Bottom content */}
        <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            {/* Left column */}
            <div>
              <AnimatedHeading
                text={"Wear the dark\nside of elegance."}
                className="font-normal text-white mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                style={{ letterSpacing: '-0.04em' }}
                delay={200}
                charDelay={30}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5">
                  Garments forged in Art Deco darkness. Each piece a statement for those who own the night.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000} className="flex flex-wrap gap-4">
                <MagneticButton className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  Shop Collection
                </MagneticButton>
                <MagneticButton className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
                  View Lookbook
                </MagneticButton>
              </FadeIn>
            </div>

            {/* Right column — tag */}
            <FadeIn
              delay={1400}
              duration={1000}
              className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0"
            >
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                  SS25 Collection — Now Live.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
