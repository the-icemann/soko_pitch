import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'

const streams = [
  { icon: '🛒', title: 'Transaction Fee',
    body: 'Commission on every completed order processed through the platform.', rate: '2–5%', rateLabel: 'per order' },
  { icon: '⭐', title: 'Premium Farmer',
    body: 'Verified badge, priority listing placement, advanced analytics dashboard.', rate: 'UGX 25k', rateLabel: 'per month' },
  { icon: '📊', title: 'Data & Insights API',
    body: 'Price feeds and trade flow data licensed to NGOs, microfinance, and government.', rate: 'B2B SaaS', rateLabel: 'annual contracts' },
  { icon: '🔔', title: 'Price Alert SMS',
    body: 'Farmers subscribe to alerts when a crop price crosses their threshold in a chosen market.', rate: 'UGX 5k', rateLabel: 'per crop / month' },
]

export default function BizModelSlide() {
  const ref = useRef<HTMLElement>(null)

  useInView(ref, [
    { selector: '.biz-label',   y: 20, duration: 0.5 },
    { selector: '.biz-heading', y: 40, duration: 0.7, delay: 0.05 },
    { selector: '.biz-sub',     y: 20, duration: 0.5, delay: 0.1 },
    { selector: '.biz-card',    y: 50, duration: 0.6, stagger: 0.12, delay: 0.2 },
    { selector: '.biz-extra',   y: 30, duration: 0.5, delay: 0.1 },
  ])

  return (
    <section id="bizmodel" ref={ref} className="min-h-screen flex items-center bg-white pt-24 pb-16 sm:py-20 px-6 scroll-mt-16 lg:px-16">
      <div className="max-w-6xl mx-auto w-full">
        <p className="biz-label text-soko text-xs font-bold tracking-[0.3em] uppercase mb-3">Business Model</p>
        <h2 className="biz-heading text-4xl sm:text-5xl lg:text-6xl font-black text-soko-dark leading-tight mb-4">
          Multiple revenue streams<br className="hidden sm:block" /> from day one.
        </h2>
        <p className="biz-sub text-gray-500 text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
          Soko's model is transactional at its core with high-margin data and subscription products layered on top.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {streams.map((s, i) => (
            <div key={i} className="biz-card bg-white rounded-2xl p-6 shadow-md border border-gray-100 border-b-4 border-b-soko-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-soko-dark text-base mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{s.body}</p>
              <div>
                <div className="text-2xl font-black text-soko">{s.rate}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.rateLabel}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="biz-extra bg-amber-50 border-l-4 border-soko-accent rounded-r-2xl p-6">
          <h3 className="font-bold text-soko-dark text-base mb-2">🏦 Long-Term: Credit Scoring</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Soko's transaction history becomes a creditworthiness signal for agricultural microfinance partners — enabling smallholder farmers who have never had bank accounts to access credit. Revenue model: referral fee per loan originated. This positions Soko as financial infrastructure, not just a marketplace.
          </p>
        </div>
      </div>
    </section>
  )
}
