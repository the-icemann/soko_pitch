import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'

const pills = ['8 Crops', '6 Markets', '48 ML Models', 'USSD + Web PWA', 'Production Ready']

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 53 + 17) % 100}%`,
  top: `${(i * 37 + 11) % 100}%`,
  size: ((i * 7) % 3) + 1,
  delay: (i * 0.4) % 5,
  duration: 5 + (i % 4),
}))

export default function ClosingSlide() {
  const ref = useRef<HTMLElement>(null)

  // Letters render statically — no animation offset that could cause clipping
  useInView(ref, [
    { selector: '.cl-particle', y: 20, duration: 0.8, stagger: 0.04 },
    { selector: '.cl-body',     y: 30, duration: 0.7, delay: 0.1 },
    { selector: '.cl-pill',     y: 20, duration: 0.4, stagger: 0.1, delay: 0.05, ease: 'back.out(1.4)' },
    { selector: '.cl-cta',      y: 20, duration: 0.5, delay: 0.05 },
  ])

  return (
    <section
      id="closing"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-green-800 overflow-hidden py-20 px-6"
    >
      {particles.map(p => (
        <div
          key={p.id}
          className="cl-particle absolute rounded-full bg-soko-light/15"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size * 10}px`,
            height: `${p.size * 10}px`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(0deg, #4d6940ff 1px, transparent 1px), linear-gradient(90deg, #5e5050ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        {/* Static — no GSAP offset so letters are always visible */}
        <div className="flex justify-center w-full mb-6" aria-label="SOKO">
          {'SOKO'.split('').map((letter, i) => (
            <span
              key={i}
              className="text-white/80 font-black leading-none"
              style={{
                fontSize: 'clamp(2.5rem, 16vw, 10rem)',
                letterSpacing: 'clamp(0.03em, 0.8vw, 0.12em)',
                textShadow: '0 0 60px rgba(36, 48, 36, 0.14), 0 0 120px rgba(78, 104, 79, 0.86)',
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="h-0.5 bg-white/30 w-64 mx-auto mb-6" />

        <p className="cl-body text-white/80 text-base sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto">
          Uganda's smallholder farmers produce enough food to feed East Africa. They just need the intelligence to sell it at the right price, to the right buyer, at the right time.
          <br /><br />
          <strong className="text-white">That is what Soko does.</strong>
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {pills.map(p => (
            <span key={p} className="cl-pill bg-white/10 border border-white/20 text-white text-xs sm:text-sm px-4 py-1.5 rounded-full backdrop-blur-sm">
              {p}
            </span>
          ))}
        </div>

        <a
          href="mailto:andrewssuubi@gmail.com"
          className="cl-cta inline-block bg-soko-accent text-soko-dark font-bold text-base sm:text-lg px-8 py-4 rounded-xl hover:bg-yellow-400 hover:scale-105 transition-all duration-200 shadow-xl"
        >
          Get in Touch →
        </a>

        <p className="cl-cta mt-6 text-white/40 text-xs">
          Confidential · This content, software as well as developmental rights are owned, patented and copyrighted by <b>Angel Agencies Limited</b> and is intended for investor use only. Soko Agricultural Marketplace · 2026

        </p>

      </div>
    </section>
  )
}
