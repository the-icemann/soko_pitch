import { useEffect, RefObject } from 'react'
import gsap from 'gsap'

interface InViewOptions {
  selector: string
  y?: number
  x?: number
  stagger?: number
  duration?: number
  delay?: number
  ease?: string
}

/**
 * Animates elements into view using IntersectionObserver + gsap.to().
 * Elements are never opacity:0 — they start offset in Y/X and slide to natural position.
 * Guaranteed visible even if animation doesn't fire.
 */
export function useInView(containerRef: RefObject<HTMLElement>, animations: InViewOptions[]) {
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Pre-position each group (Y offset only — always visible)
    const allItems: HTMLElement[] = []
    animations.forEach(({ selector, y = 32, x = 0 }) => {
      const items = Array.from(el.querySelectorAll<HTMLElement>(selector))
      if (items.length) {
        gsap.set(items, { y, x, willChange: 'transform' })
        allItems.push(...items)
      }
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        let cumulativeDelay = 0
        animations.forEach(({ selector, stagger = 0.1, duration = 0.6, delay = 0, ease = 'power3.out' }) => {
          const items = Array.from(el.querySelectorAll<HTMLElement>(selector))
          if (!items.length) return
          gsap.to(items, {
            y: 0,
            x: 0,
            duration,
            stagger,
            delay: cumulativeDelay + delay,
            ease,
            clearProps: 'willChange',
          })
          // next group starts after this group ends
          cumulativeDelay += delay + duration + stagger * Math.max(items.length - 1, 0)
        })

        observer.disconnect()
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      if (allItems.length) gsap.set(allItems, { clearProps: 'all' })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
}
