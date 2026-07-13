import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'

const problems = [
  { icon: '📉', title: 'No Price Transparency',
    body: 'Farmers sell at harvest-time lows with zero visibility into what buyers are paying. Middlemen capture 40–60% of end-market value leaving farmers with a fraction of fair price.' },
  { icon: '🗺️', title: 'Geographic Isolation',
    body: "Farmers in Mbale or Lira don't know which market offers the best net price after transport. Every kilogram sold on guesswork costs thousands of shillings." },
  { icon: '🤝', title: 'No Buyer Networks',
    body: "Small-scale buyers can't discover reliable farmers. Trust is built through expensive, slow, informal channels, limiting market depth and trade volume on both sides." },
  { icon: '📵', title: 'Digital Divide',
    body: "~50% of Uganda's population lacks smartphones. Existing agri-tech solutions exclude the farmers who need them most, the subsistence farmer with a basic feature phone." },
]

export default function ProblemSlide() {
  const ref = useRef<HTMLElement>(null)

  useInView(ref, [
    { selector: '.prob-label',   y: 20, duration: 0.5 },
    { selector: '.prob-heading', y: 40, duration: 0.7, delay: 0.05 },
    { selector: '.prob-sub',     y: 20, duration: 0.5, delay: 0.1 },
    { selector: '.prob-divider', y: 10, duration: 0.4, delay: 0.15 },
    { selector: '.prob-card',    y: 40, duration: 0.6, stagger: 0.12, delay: 0.2 },
  ])

  return (
    <section id="problem" ref={ref} className="min-h-screen flex items-center bg-white pt-24 pb-16 sm:py-20 px-6 lg:px-16 scroll-mt-16">
      <div className="max-w-6xl mx-auto w-full">
        <p className="prob-label text-soko text-xs font-bold tracking-[0.3em] uppercase mb-3">The Problem</p>
        <h2 className="prob-heading text-4xl sm:text-5xl lg:text-6xl font-black text-soko-dark leading-tight mb-4">
          Uganda's farmers are<br className="hidden sm:block" /> selling in the dark.
        </h2>
        <p className="prob-sub text-gray-500 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
          Agriculture drives ~24% of Uganda's GDP and employs over 68% of the population, yet smallholder farmers consistently lose out to information asymmetry, geographic isolation, and middlemen.
        </p>
        <div className="prob-divider h-1.5 w-16 bg-soko rounded-full mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <div key={i} className="prob-card relative flex gap-4 bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 rounded-l-2xl" />
              <div className="text-3xl mt-0.5 flex-shrink-0">{p.icon}</div>
              <div>
                <h3 className="font-bold text-red-700 text-base mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
