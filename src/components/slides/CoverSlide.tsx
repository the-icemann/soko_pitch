import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const pills = ['AI Price Intelligence', 'Direct Marketplace', 'USSD Feature-Phone Access', 'Uganda → East Africa']

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 47 + 13) % 100}%`,
  top: `${(i * 31 + 7) % 100}%`,
  size: ((i * 11) % 3) + 1,
  delay: (i * 0.3) % 4,
  duration: 4 + (i % 4),
}))

export default function CoverSlide() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from('.cover-particle', {
      opacity: 0,
      scale: 0,
      duration: 1.5,
      stagger: 0.04,
      ease: 'power2.out',
    })

    tl.from('.cover-letter', {
      opacity: 0,
      y: (_i: number) => [80, -80, 80, -80][_i],
      x: (_i: number) => [-60, 60, 60, -60][_i],
      duration: 0.9,
      stagger: 0.12,
      ease: 'back.out(1.7)',
    }, '-=1')

    tl.from('.cover-divider', {
      scaleX: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.3')

    tl.from('.cover-tagline', {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power2.out',
    }, '-=0.2')

    tl.from('.cover-sub', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.4')

    tl.from('.cover-pill', {
      opacity: 0,
      y: 20,
      scale: 0.8,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.4)',
    }, '-=0.3')

    tl.from('.cover-scroll', {
      opacity: 0,
      duration: 0.6,
    }, '-=0.1')

  }, { scope: containerRef })

  return (
    <section
      id="cover"
      ref={containerRef}
      // className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-soko-abyss via-soko-forest to-soko-dark"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-green-800"

    >
      {particles.map(p => (
        <div
          key={p.id}
          className="cover-particle absolute rounded-full bg-soko-light/15"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size * 12}px`,
            height: `${p.size * 12}px`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          // backgroundImage: 'linear-gradient(0deg, #4f9c31ff 1px, transparent 1px), linear-gradient(90deg, #5e5050ff 1px, transparent 1px)',
          backgroundImage: 'linear-gradient(0deg, #4d6940ff 1px, transparent 1px), linear-gradient(90deg, #5e5050ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">
        <div className="flex justify-center w-full overflow-hidden mb-4" aria-label="SOKO">
          {'SOKO'.split('').map((letter, i) => (
            <span
              key={i}
              className="cover-letter text-white/80 font-black leading-none"
              style={{
                fontSize: 'clamp(2rem, 13vw, 10rem)',
                letterSpacing: 'clamp(0.03em, 0.6vw, 0.1em)',
                textShadow: '0 0 60px rgba(36, 48, 36, 0.14), 0 0 120px rgba(78, 104, 79, 0.86)',
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="cover-divider h-0.5 bg-white/30 w-64 mx-auto mb-6 origin-left" />

        <p className="cover-tagline text-white text-base sm:text-xl md:text-2xl font-semibold tracking-wider sm:tracking-widest uppercase mb-3">
          Agricultural Marketplace Platform
        </p>
        <p className="cover-sub text-white/70 text-base sm:text-lg italic mb-10">
          Connecting Uganda's farmers and buyers through technology
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {pills.map(p => (
            <span
              key={p}
              className="cover-pill bg-white/10 border border-white/30 text-white text-xs sm:text-sm px-4 py-2 rounded-full backdrop-blur-sm"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="cover-scroll mt-16 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
