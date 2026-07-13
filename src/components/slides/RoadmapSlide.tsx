import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'

const phases = [
  { label: '1–3 Months', borderColor: 'border-soko', labelColor: 'text-soko', dotColor: 'bg-soko',
    items: ['Integrate real price feeds (MAAIF Uganda, RATIN East Africa, WFP VAM)', 'Automate farmer payouts via MTN MoMo & Airtel Money', 'Email & phone verification at sign-up', 'Password reset and Apple Sign-In', 'Production domain & SSL', 'Google Maps API for accurate road distances', 'Farmer & buyer onboarding in 6 districts'] },
  { label: '3–6 Months', borderColor: 'border-soko-accent', labelColor: 'text-soko-accent', dotColor: 'bg-soko-accent',
    items: ['Expand to 10+ markets (Jinja, Soroti, Fort Portal, Arua)', 'Add groundnuts, simsim, sunflower (Northern Uganda crops)', 'Hybrid collaborative filtering for recommendations', 'USSD price threshold alerts', 'Escrow payment model to reduce fraud', 'CDN for static assets & horizontal scaling', 'Centralized log aggregation (ELK / Grafana)'] },
  { label: '6–18 Months', borderColor: 'border-soko-dark', labelColor: 'text-soko-dark', dotColor: 'bg-soko-dark',
    items: ['Kenya (KES) & Tanzania (TZS) expansion', 'Weather integration (Uganda Met Authority)', 'Satellite imagery for harvest yield signals', 'Group selling — village-level bulk orders', 'Credit scoring for microfinance partners', 'Logistics integration with boda-boda networks', 'Natural language farmer advisory via USSD'] },
]

export default function RoadmapSlide() {
  const ref = useRef<HTMLElement>(null)

  useInView(ref, [
    { selector: '.rm-label',   y: 20, duration: 0.5 },
    { selector: '.rm-heading', y: 40, duration: 0.7, delay: 0.05 },
    { selector: '.rm-sub',     y: 20, duration: 0.5, delay: 0.1 },
    { selector: '.rm-col',     y: 50, duration: 0.65, stagger: 0.15, delay: 0.2 },
    { selector: '.rm-item',    y: 15, x: -10, duration: 0.4, stagger: 0.04, delay: 0.1 },
  ])

  return (
    <section id="roadmap" ref={ref} className="min-h-screen flex items-center bg-white pt-24 pb-16 sm:py-20 px-6 scroll-mt-16 lg:px-16">
      <div className="max-w-6xl mx-auto w-full">
        <p className="rm-label text-soko text-xs font-bold tracking-[0.3em] uppercase mb-3">Roadmap</p>
        <h2 className="rm-heading text-4xl sm:text-5xl lg:text-6xl font-black text-soko-dark leading-tight mb-4">
          Clear milestones from launch<br className="hidden sm:block" /> to East Africa scale.
        </h2>
        <p className="rm-sub text-gray-500 text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
          Platform engineering is complete. Investment accelerates data quality, user acquisition, and geographic expansion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((p, i) => (
            <div key={i} className={`rm-col bg-gray-50 rounded-2xl p-6 border-t-4 ${p.borderColor}`}>
              <h3 className={`font-black text-sm tracking-widest uppercase mb-5 pb-3 border-b border-gray-200 ${p.labelColor}`}>
                {p.label}
              </h3>
              <ul className="space-y-3">
                {p.items.map((item, j) => (
                  <li key={j} className="rm-item flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.dotColor}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
