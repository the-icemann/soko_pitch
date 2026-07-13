import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'

const steps = [
  { n: '1', title: 'Sign Up',         body: '3-step wizard. Farmers list specialties, buyers set interests, or operate as both.' },
  { n: '2', title: 'Discover Prices', body: "Live 4-week price forecast per crop and market. Sell signal: sell now, wait, or it's perishable." },
  { n: '3', title: 'Get Matched',     body: 'AI matches buyers to farmers by crop overlap, district proximity, rating, and past fulfilment.' },
  { n: '4', title: 'Transact',        body: 'Buyer places order, inventory locked. Payment via PesaPal. Status: confirmed → dispatched → delivered.' },
  { n: '5', title: 'Get Paid',        body: 'Farmer receives payout via MTN MoMo or Airtel Money. Reviews build reputation over time.' },
]

const channels = [
  { icon: '💻', title: 'Web App (PWA)',  body: 'React 19 Progressive Web App. Works offline. Installable on Android, IOS or any Device. Role-personalised dashboards.' },
  { icon: '📱', title: 'USSD (*237#)',  body: 'Zero data cost. Any phone. Browse prices, check sell signals, and place orders through a simple menu.' },
  { icon: '🔔', title: 'Notifications', body: "Push, SMS, and email alerts for orders, price thresholds, and buyer matches via Africa's Talking." },
]

export default function ProductSlide() {
  const ref = useRef<HTMLElement>(null)

  useInView(ref, [
    { selector: '.prd-label',   y: 20, duration: 0.5 },
    { selector: '.prd-heading', y: 40, duration: 0.7, delay: 0.05 },
    { selector: '.prd-sub',     y: 20, duration: 0.5, delay: 0.1 },
    { selector: '.flow-step',   y: 40, duration: 0.55, stagger: 0.1, delay: 0.2 },
    { selector: '.ch-card',     y: 35, duration: 0.55, stagger: 0.12, delay: 0.1 },
  ])

  return (
    <section id="product" ref={ref} className="min-h-screen flex items-center bg-soko-pale pt-20 pb-12 sm:py-20 px-6 scroll-mt-16 lg:px-16">
      <div className="max-w-6xl mx-auto w-full">
        <p className="prd-label text-soko text-xs font-bold tracking-[0.3em] uppercase mb-3">The Product</p>
        <h2 className="prd-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-soko-dark leading-tight mb-4">
          One platform. Every channel.<br className="hidden sm:block" /> Every farmer.
        </h2>
        <p className="prd-sub text-gray-500 text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
          Soko handles the full agricultural commerce lifecycle... from price discovery to order fulfilment and payment.
        </p>

        <div className="relative mb-12">
          <div className="hidden lg:block absolute top-8 left-[4.5rem] right-[4.5rem] h-0.5 bg-soko-light" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="flow-step bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow relative group">
                <div className="w-10 h-10 rounded-full bg-soko text-white font-black text-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-soko-dark transition-colors">
                  {s.n}
                </div>
                <h4 className="font-bold text-soko-dark text-sm mb-2">{s.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {channels.map((c, i) => (
            <div key={i} className="ch-card bg-white rounded-2xl p-6 border-t-4 border-soko-light shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-bold text-soko-dark text-base mb-2">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
