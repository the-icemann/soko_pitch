import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'

const solutions = [
  { num: '01', title: 'AI Price Intelligence',
    body: '48 ML models trained on 4 years of Ugandan price data deliver real-time crop forecasts across 8 crops and 6 markets(for now), with Uganda-specific bimodal seasonal patterns (March–May and Aug–Nov rains) built in.',
    color: 'bg-soko' },
  { num: '02', title: 'Direct Marketplace',
    body: 'Farmers list produce with photos, quantities and pricing. Buyers discover AI-matched farmers by crop and location. Orders, PesaPal payments, and delivery tracking, all in one platform.',
    color: 'bg-soko-light' },
  { num: '03', title: 'Smart Market Routing',
    body: "Tell Soko what you have and where you are. Our routing engine calculates net value at every nearby market, factoring in predicted price, transport cost, and a sell/wait signal.",
    color: 'bg-soko-dark' },
  { num: '04', title: 'USSD (No Data or Internet Needed)',
    body: 'Dial a short code on any feature phone(kamapesa). Browse live crop prices, check market recommendations, and place orders with zero data cost through any mobile network. We reach the 50% of farmers smartphone-only apps leave behind.',
    color: 'bg-soko-accent' },
]

export default function SolutionSlide() {
  const ref = useRef<HTMLElement>(null)

  useInView(ref, [
    { selector: '.sol-label',   y: 20, duration: 0.5 },
    { selector: '.sol-heading', y: 40, duration: 0.7, delay: 0.05 },
    { selector: '.sol-item',    y: 50, x: -30, duration: 0.65, stagger: 0.13, delay: 0.15 },
  ])

  return (
    <section id="solution" ref={ref} className="min-h-screen flex items-center bg-soko-pale pt-24 pb-16 sm:py-20 px-6 scroll-mt-16 lg:px-16">
      <div className="max-w-6xl mx-auto w-full">
        <p className="sol-label text-soko text-xs font-bold tracking-[0.3em] uppercase mb-3">The Solution</p>
        <h2 className="sol-heading text-4xl sm:text-5xl lg:text-6xl font-black text-soko-dark leading-tight mb-12">
          Soko puts market intelligence<br className="hidden sm:block" /> in every farmer's hands.
        </h2>

        <div className="space-y-5">
          {solutions.map((s, i) => (
            <div key={i} className="sol-item flex gap-5 sm:gap-8 items-start bg-white rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-default">
              <div className={`${s.color} text-white font-black text-xl sm:text-2xl w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {s.num}
              </div>
              <div>
                <h3 className="text-soko-dark font-bold text-lg sm:text-xl mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
