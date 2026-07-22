import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useInView } from '../../hooks/useInView'

const uses = [
  { title: 'Real Price Data Partnerships', body: 'MAAIF, RATIN, WFP VAM integrations, the single highest-value ML improvement available.' },
  { title: 'Farmer & Buyer Acquisition',   body: 'Field team in 6 districts. Agent onboarding via SACCOs, co-operatives, and input suppliers.' },
  { title: 'Production Infrastructure',    body: 'Domain, SSL, CDN, monitoring, Google Maps API for accurate transport routing.' },
  { title: 'Core Team Buildout',           body: 'Field ops lead, growth/partnerships manager, and backend engineering for mobile money payout.' },
]

export default function AskSlide() {
  const ref = useRef<HTMLElement>(null)
  const [amount, setAmount] = useState('0')

  useInView(ref, [
    { selector: '.ask-label',   y: 20, duration: 0.5 },
    { selector: '.ask-heading', y: 40, duration: 0.7, delay: 0.05 },
    { selector: '.ask-sub',     y: 20, duration: 0.5, delay: 0.1 },
    { selector: '.ask-box',     y: 30, duration: 0.7, delay: 0.2 },
    { selector: '.use-card',    y: 30, duration: 0.5, stagger: 0.1, delay: 0.1 },
  ])

  // Separate counter animation via IO
  useEffect(() => {
    const box = ref.current?.querySelector('.ask-box')
    if (!box) return
    const obj = { val: 0 }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      gsap.to(obj, {
        val: 85, duration: 2, ease: 'power2.out',
        onUpdate() { setAmount(Math.floor(obj.val).toLocaleString()) },
      })
      observer.disconnect()
    }, { threshold: 0.3 })
    observer.observe(box)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="ask" ref={ref} className="min-h-screen flex items-center bg-white pt-20 pb-12 sm:py-20 px-6 scroll-mt-16 lg:px-16">
      <div className="max-w-6xl mx-auto w-full">
        <p className="ask-label text-soko text-xs font-bold tracking-[0.3em] uppercase mb-3">The Ask</p>
        <h2 className="ask-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-soko-dark leading-tight mb-4">
          Join us in building East Africa's<br className="hidden sm:block" /> agricultural intelligence layer.
        </h2>
        <p className="ask-sub text-gray-500 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
          We are raising a seed round to take Soko from a production-ready platform to a market-leading network.
        </p>

        <div className="ask-box bg-gradient-to-br from-soko-dark to-soko rounded-3xl p-8 sm:p-12 text-center mb-8 shadow-2xl">
          <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-3">Seed Round Target</p>
          <div className="text-soko-accent font-black text-6xl sm:text-8xl leading-none mb-3">
            {amount}M UGX
          </div>
          <p className="text-white/70 text-base mb-1">Estimated to approximately $23,000 USD</p>
        
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {uses.map((u, i) => (
            <div key={i} className="use-card bg-soko-pale rounded-2xl p-5 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-soko-dark text-sm mb-2">{u.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{u.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
