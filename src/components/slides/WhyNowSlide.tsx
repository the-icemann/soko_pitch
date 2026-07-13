import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'

const reasons = [
  { icon: '📲', title: 'Mobile Money at Scale',
    body: 'Uganda has over 30 million registered mobile money accounts. MTN MoMo and Airtel Money penetration in rural areas means we can pay farmers digitally without bank accounts. The payments infrastructure we need already exists.' },
  { icon: '🏛️', title: 'Government Digital Push',
    body: "Uganda's Digital Transformation Roadmap and MAAIF agricultural data programmes create a supportive environment. NGOs like WFP and RATIN actively seek partners to distribute price intelligence to smallholder farmers." },
  { icon: '🚀', title: 'No Incumbent With This Stack',
    body: 'Existing agri-tech in Uganda addresses one problem: either a price SMS service or a basic listings board. No competitor combines AI price forecasting, a direct marketplace, market routing, and USSD access in one platform.' },
]

export default function WhyNowSlide() {
  const ref = useRef<HTMLElement>(null)

  useInView(ref, [
    { selector: '.why-label',   y: 20, duration: 0.5 },
    { selector: '.why-heading', y: 40, duration: 0.7, delay: 0.05 },
    { selector: '.why-sub',     y: 20, duration: 0.5, delay: 0.1 },
    { selector: '.why-card',    y: 50, duration: 0.65, stagger: 0.15, delay: 0.2 },
  ])

  return (
    <section id="whynow" ref={ref} className="min-h-screen flex items-center bg-soko-pale pt-20 pb-12 sm:py-20 px-6 scroll-mt-16 lg:px-16">
      <div className="max-w-6xl mx-auto w-full">
        <p className="why-label text-soko text-xs font-bold tracking-[0.3em] uppercase mb-3">Why Now</p>
        <h2 className="why-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-soko-dark leading-tight mb-4">
          East Africa's digital agriculture<br className="hidden sm:block" /> moment is here.
        </h2>
        <p className="why-sub text-gray-500 text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
          Three converging trends make 2026 the right time to scale Soko.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="why-card bg-white rounded-2xl p-7 shadow-md border-t-4 border-soko hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="font-bold text-soko-dark text-lg mb-3">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
