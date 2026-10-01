import { Link, useLocation } from 'react-router-dom'
import { planLinks } from '../data/linkPlan.ts'

const LEAD: Record<string, string> = {
  'route-summary': 'For a managed file on this corridor, see',
  'route-cost': 'What a relocation quote includes is explained on',
  'service-process': 'The coordination sequence is on',
  'service-quote': 'Before you ask for a number, read',
  crate: 'Crate size starts when you',
  corporate: 'Employers moving staff can read about',
  'after-answer': 'When you want the move coordinated, see',
  'after-service': 'To plan the move itself, see',
  arrival: 'Arrivals are coordinated on',
  departure: 'Departures are coordinated on',
  policy: 'Questions about this page can go through',
  'final-step': 'When you are ready,',
  specialist: 'Longer explanations sit in the',
  'arrival-prep': 'An inbound move is coordinated on',
  'inbound-group': 'Pets arriving in Dubai are coordinated through',
  'outbound-group': 'Pets leaving Dubai are coordinated through',
  'owner-prep': 'Owner preparation for the arrival sits on',
}

function sentence(
  slot: string,
  links: { to: string; anchor: string }[],
  className: string,
  linkClass: string,
) {
  if (links.length === 1) {
    const link = links[0]
    return (
      <p className={className}>
        {LEAD[slot] ?? 'Related:'}{' '}
        <Link className={linkClass} to={link.to}>
          {link.anchor}
        </Link>
        .
      </p>
    )
  }
  return (
    <p className={className}>
      {LEAD[slot] ?? 'Related:'}{' '}
      {links.map((link, index) => (
        <span key={link.to}>
          {index > 0 ? (index === links.length - 1 ? ' and ' : ', ') : null}
          <Link className={linkClass} to={link.to}>
            {link.anchor}
          </Link>
        </span>
      ))}
      .
    </p>
  )
}

export default function LinkPlanSlot({
  path,
  slot,
  className = 'mt-4 leading-relaxed text-[#5A5A5A]',
  linkClass = 'font-semibold text-[#4F5BD5] hover:underline',
}: {
  path: string
  slot: string
  className?: string
  linkClass?: string
}) {
  const links = planLinks(path, slot)
  if (links.length === 0) return null

  if (slot === 'service-routes') {
    return (
      <section id="routes-we-coordinate" className="section-padding scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Routes this service coordinates</h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-[#5A5A5A]">
            Each corridor has its own preparation page. A quote uses the pet, the dates and the documents for that route.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="flex rounded-2xl bg-[#F5F6FD] px-4 py-3 text-sm font-semibold text-[#2A2A2A] hover:bg-[#E9ECFB]"
                >
                  {link.anchor}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  return sentence(slot, links, className, linkClass)
}

/** Both route-plan sentences for a custom route page, using the current URL. */
export function RoutePlanLinks({
  slots = ['route-summary', 'route-cost'],
}: {
  slots?: Array<'route-summary' | 'route-cost'>
}) {
  const path = useLocation().pathname
  return (
    <>
      {slots.map((slot) => (
        <LinkPlanSlot key={slot} path={path} slot={slot} />
      ))}
    </>
  )
}
