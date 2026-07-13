import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useInView } from '../../hooks/useInView'

const stats = [
  { value: 4,   suffix: 'B+', prefix: 'UGX', label: 'Minimum Uganda annual agricultural output' },
  { value: 3.5, suffix: 'M+', prefix: '',  label: 'Smallholder farming households' },
  { value: 68,  suffix: '%',  prefix: '',  label: "Of Uganda's workforce in agriculture" },
  { value: 40,  suffix: 'B+', prefix: '$', label: 'East Africa agritech addressable market' },
]

const opportunities = [
  { title: 'Beachhead (Uganda)',
    body: "6 major markets: Kampala, Gulu, Mbarara, Mbale, Lira, Masaka. 8 staple crops. Platform calibrated for Uganda's seasons, regulations, and UGX currency." },
  { title: 'Expansion (East Africa or even the African Continent)',
    body: 'Roadmap includes Kenya (KES) and Tanzania (TZS) with country-specific ML models and market registries. Architecture designed for many countries as well as cross-border orchestration from day one.' },

]

function AnimatedStat({ value, suffix, prefix, label }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obj = { val: 0 }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      gsap.to(obj, {
        val: value,
        duration: 2,
        ease: 'power2.out',
        onUpdate() {
          setDisplay(value % 1 !== 0 ? obj.val.toFixed(1) : Math.floor(obj.val).toString())
        },
      })
      observer.disconnect()
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="bg-soko-dark rounded-2xl p-6 sm:p-8 text-center group hover:bg-soko transition-colors duration-300">
      <div className="text-soko-accent font-black text-4xl sm:text-5xl leading-none mb-2">
        {prefix}{display}{suffix}
      </div>
      <div className="text-white/70 text-sm leading-snug">{label}</div>
    </div>
  )
}

export default function MarketSlide() {
  const ref = useRef<HTMLElement>(null)

  useInView(ref, [
    { selector: '.mkt-label',   y: 20, duration: 0.5 },
    { selector: '.mkt-heading', y: 40, duration: 0.7, delay: 0.05 },
    { selector: '.mkt-sub',     y: 20, duration: 0.5, delay: 0.1 },
    { selector: '.opp-card',    y: 40, duration: 0.6, stagger: 0.13, delay: 0.15 },
  ])

  return (
    <section id="market" ref={ref} className="min-h-screen flex items-center bg-white pt-20 pb-12 sm:py-20 px-6 scroll-mt-16 lg:px-16">
      <div className="max-w-6xl mx-auto w-full">
        <p className="mkt-label text-soko text-xs font-bold tracking-[0.3em] uppercase mb-3">Market Opportunity</p>
        <h2 className="mkt-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-soko-dark leading-tight mb-4">
          A massive, underserved market<br className="hidden sm:block" /> at a digital tipping point.
        </h2>
        <p className="mkt-sub text-gray-500 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
          Uganda's agricultural economy is large and growing. Mobile money adoption is accelerating. Digital infrastructure is reaching rural areas. The timing is right.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => <AnimatedStat key={i} {...s} />)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {opportunities.map((o, i) => (
            <div key={i} className="opp-card bg-soko-pale rounded-2xl p-6 border-t-4 border-soko hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-soko-dark text-base mb-3">{o.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
