import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'

const moats = [
  { title: '48 Prophet ML Models', highlight: true,
    body: "One model per crop-market combination. Each encodes Uganda's bimodal rainfall seasonality (March–May) and Aug–Nov rains, driving two distinct harvest and lean cycles per year. Calibrated to actual Ugandan price behaviour." },
  { title: 'Smart Market Routing', highlight: true,
    body: "Given a farmer's location, crop, and quantity, our engine ranks every nearby market by net value after transport. Integrates predicted price, real road distance, and sell/wait/perishable signals. No competitor in Uganda does this." },
  { title: 'Content-Based Matching', highlight: false,
    body: 'Multi-factor match score: crop overlap (40%), district proximity (25%), seller rating (20%), fulfilment reliability (10%), interaction history (5%). Designed to avoid cold-start bias for new farmers.' },
  { title: 'Event-Driven at Core', highlight: false,
    body: 'Apache Kafka backbone decouples every service. A single transaction event simultaneously triggers buyer notification and ML interaction update — no direct service-to-service coupling.' },
  { title: 'Domain-Isolated Services', highlight: false,
    body: '9 independent microservices each with its own Postgres database. Auth, users, produce, orders, payments, notifications, messaging, blog, USSD. Failure in one never cascades.' },
  { title: 'USSD: Zero Data', highlight: false,
    body: "Africa's Talking USSD gateway gives feature-phone farmers access to live price intelligence at zero data cost. Uganda has ~50% smartphone penetration — we serve the other half." },
]

const badges = [
  'FastAPI', 'React 19', 'Prophet ML', 'PostgreSQL', 'Apache Kafka',
  'Redis', 'Docker', 'AWS EC2', 'PesaPal', "Africa's Talking",
  'Terraform', 'GitHub Actions', 'Python 3.12', 'TypeScript',
]

export default function TechSlide() {
  const ref = useRef<HTMLElement>(null)

  useInView(ref, [
    { selector: '.tech-label',   y: 20, duration: 0.5 },
    { selector: '.tech-heading', y: 40, duration: 0.7, delay: 0.05 },
    { selector: '.tech-sub',     y: 20, duration: 0.5, delay: 0.1 },
    { selector: '.tech-card',    y: 45, duration: 0.55, stagger: 0.09, delay: 0.2 },
    { selector: '.tech-badge',   y: 20, duration: 0.4, stagger: 0.04, delay: 0.1 },
  ])

  return (
    <section id="tech" ref={ref} className="min-h-screen flex items-center bg-soko-dark pt-20 pb-12 sm:py-20 px-6 scroll-mt-16 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <p className="tech-label text-soko-accent text-xs font-bold tracking-[0.3em] uppercase mb-3">Technology Edge</p>
        <h2 className="tech-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
          Built for Uganda.<br className="hidden sm:block" /> Powered by AI. Designed to scale.
        </h2>
        <p className="tech-sub text-white/60 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
          Our technology stack is not generic software applied to agriculture, but intelligence engineered for Uganda's specific seasonal patterns and market realities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {moats.map((m, i) => (
            <div key={i} className={`tech-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 ${
              m.highlight ? 'bg-white/10 border border-soko-accent/40' : 'bg-white/5 border border-white/10'
            }`}>
              <h3 className={`font-bold text-base mb-3 ${m.highlight ? 'text-soko-accent' : 'text-white'}`}>{m.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {badges.map(b => (
            <span key={b} className="tech-badge bg-soko-dark border border-soko-light/40 text-soko-light text-xs font-medium px-3 py-1.5 rounded-full hover:bg-soko hover:text-white hover:border-soko transition-all duration-200 cursor-default">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
