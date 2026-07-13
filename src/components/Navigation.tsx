import { useState, useEffect } from 'react'

const links = [
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'market', label: 'Market' },
  { id: 'product', label: 'Product' },
  { id: 'tech', label: 'Tech Edge' },
  { id: 'bizmodel', label: 'Revenue' },
  { id: 'traction', label: 'Traction' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'ask', label: 'The Ask' },
]

export default function Navigation() {
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setScrolled(scrollTop > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/5">
        <div
          className="h-full bg-soko-accent transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Nav bar */}
      <nav className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-green-900/95 backdrop-blur-sm shadow-xl' : 'bg-green-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white font-black text-xl tracking-[0.3em] hover:text-soko-accent transition-colors"
            >
              SOKO
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map(l => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all"
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <div className={`w-5 h-0.5 bg-white transition-all mb-1 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-5 h-0.5 bg-white transition-all mb-1 ${menuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-green-900 border-t border-white/10 px-4 pb-4">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="block w-full text-left text-white/80 hover:text-white py-2.5 text-sm font-medium border-b border-white/10 last:border-0"
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
