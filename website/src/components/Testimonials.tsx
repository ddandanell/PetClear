import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/testimonials.ts'

// Rotating, client-focused testimonials. Renders nothing until real reviews
// are added to src/data/testimonials.ts — so no fabricated proof is ever shown.
export default function Testimonials() {
  if (!TESTIMONIALS.length) return null
  const loop = [...TESTIMONIALS, ...TESTIMONIALS] // duplicate for seamless scroll

  return (
    <section className="bg-white section-padding overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center mb-10">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Real Client Stories</span>
        <h2 className="text-section mt-3 mb-3">Pet Owners Who Trusted Us With Their Move</h2>
        <p className="text-body-large max-w-2xl mx-auto">
          Every relocation is a family reunited. Here is what owners say after their dog or cat landed safely.
        </p>
      </div>

      <div className="group relative">
        <div className="flex w-max gap-5 animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <article
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="w-[340px] shrink-0 rounded-[20px] border border-[#E6E8F5] bg-[#F8F9FE] p-6 text-left"
            >
              <div className="mb-3 flex gap-0.5 text-[#F5A623]">
                {Array.from({ length: t.rating ?? 5 }).map((_, s) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-5 leading-relaxed text-[#2A2A2A]">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4F5BD5] font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2A2A2A]">{t.name}</div>
                  <div className="text-xs text-[#7A7F9E]">{t.detail}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  )
}
