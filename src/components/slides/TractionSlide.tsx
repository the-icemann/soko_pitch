import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'

const items = [
  { text: 'Full marketplace live',       detail: 'Farmer listings, buyer orders, PesaPal payments, order tracking, real-time notifications.' },
  { text: '48 ML price models trained',  detail: '8 crops × 6 Ugandan markets, Uganda bimodal seasonality. 4-week forecasts with confidence intervals.' },
  { text: 'AI matchmaking live',         detail: 'Buyer-to-farmer recommendations running in real time with content-based scoring.' },
  { text: 'Market routing engine live',  detail: 'Tells farmers where and when to sell, with net value calculations across all 6 markets.' },
  { text: 'USSD gateway integrated',     detail: "Africa's Talking connected. Feature-phone users browse prices and place orders at zero data cost." },
  { text: 'PWA deployed',               detail: 'React 19 Progressive Web App. Installable, offline-capable, role-personalised dashboards.' },
  { text: 'Cloud infrastructure ready',  detail: 'Terraform-provisioned AWS EC2. Docker Compose microservices. GitHub Actions CI/CD.' },
  { text: '9 backend + 5 ML services',   detail: 'Fully decoupled, independently scalable, event-driven via Apache Kafka.' },
]

export default function TractionSlide() {
  const ref = useRef<HTMLElement>(null)

  useInView(ref, [
    { selector: '.trac-label',   y: 20, duration: 0.5 },
    { selector: '.trac-heading', y: 40, duration: 0.7, delay: 0.05 },
    { selector: '.trac-sub',     y: 20, duration: 0.5, delay: 0.1 },
    { selector: '.trac-item',    y: 40, x: -20, duration: 0.55, stagger: 0.08, delay: 0.15 },
  ])

  return (
    <section id="traction" ref={ref} className="min-h-screen flex items-center bg-soko-pale pt-20 pb-12 sm:py-20 px-6 scroll-mt-16 lg:px-16">
      <div className="max-w-6xl mx-auto w-full">
        <p className="trac-label text-soko text-xs font-bold tracking-[0.3em] uppercase mb-3">What We've Built</p>
        <h2 className="trac-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-soko-dark leading-tight mb-4">
          Platform complete.<br className="hidden sm:block" /> Production-ready.
        </h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="trac-item flex items-start gap-3 bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-8 h-8 bg-soko rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-soko-dark text-sm mb-1">{item.text}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
