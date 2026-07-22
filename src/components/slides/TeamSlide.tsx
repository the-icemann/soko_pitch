import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'
import teamPhoto from '../../assets/team-photo.jpg'

const team = [
  {
    name: 'Ntale Swamadu',
    role: 'Lead Front-End & Core Backend Sustainer',
    bio: 'Built the React 19 PWA end to end,designed role-personalised farmer and buyer dashboards, real-time order tracking, offline support and streamlined core backend services.',
    github: 'https://github.com/Ntale3',
    handle: '@Ntale3',
    avatar: 'https://avatars.githubusercontent.com/u/65487565?v=4',
  },
  {
    name: 'Ariel Wandera',
    role: 'Team Lead and Lead Back-End Architect',
    bio: "Designed and built Soko's 9-microservice backend: Auth, produce, orders, payments and messaging, all decoupled through Apache Kafka so every service scales independently.",
    github: 'https://github.com/ArielWandera',
    handle: '@ArielWandera',
    avatar: 'https://avatars.githubusercontent.com/u/146597279?v=4',
  },
  {
    name: 'Kasule Andrew Ssuubi',
    role: 'DevOps & ML Lead',
    bio: 'Trained and deployed the 48 Prophet pricing models, and built the cloud backbone running them on Terraform-provisioned AWS infrastructure, Docker Compose, and CI/CD.',
    github: 'https://github.com/the-icemann',
    handle: '@the-icemann',
    avatar: 'https://avatars.githubusercontent.com/u/150627446?v=4',
  },
]

export default function TeamSlide() {
  const ref = useRef<HTMLElement>(null)

  useInView(ref, [
    { selector: '.team-label',   y: 20, duration: 0.5 },
    { selector: '.team-heading', y: 40, duration: 0.7, delay: 0.05 },
    { selector: '.team-panel',   y: 30, duration: 0.6, delay: 0.1 },
    { selector: '.team-member',  y: 25, duration: 0.5, stagger: 0.1, delay: 0.1 },
  ])

  return (
    <section id="team" ref={ref} className="min-h-screen flex items-center bg-soko-dark pt-20 pb-12 sm:py-20 px-6 scroll-mt-16 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <p className="team-label text-soko-accent text-xs font-bold tracking-[0.3em] uppercase mb-3">The Team</p>
        <h2 className="team-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-10">
          The team behind Soko's Development.
        </h2>

        <div className="team-panel bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10">
          {/* Collective group photo */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <img
              src={teamPhoto}
              alt="The Soko team"
              className="rounded-2xl border border-white/10 shadow-2xl max-h-[28rem] w-auto object-contain"
            />
          </div>

          {/* Roster */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {team.map(member => (
              <div key={member.github} className="team-member flex flex-col items-center text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full border-2 border-white/20 mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="font-bold text-white text-base mb-1">{member.name}</h3>
                <p className="text-soko-accent text-xs font-semibold tracking-wide uppercase mb-3">{member.role}</p>
                <p className="text-white/50 text-xs leading-relaxed mb-4 max-w-[15rem]">{member.bio}</p>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.01-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.79.55A10.52 10.52 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                  </svg>
                  {member.handle}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-2">
            {['0 Outsourced Roles', 'Full-Stack In-House', 'Product · Backend · ML · DevOps'].map(p => (
              <span key={p} className="bg-white/10 border border-white/20 text-white/70 text-xs px-4 py-1.5 rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
