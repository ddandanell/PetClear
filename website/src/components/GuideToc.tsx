/** Short on-page contents for long guides. Targets must already exist as fragment IDs. */
export default function GuideToc({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="mb-8 rounded-2xl bg-[#F5F6FD] p-5">
      <p className="mb-2 text-sm font-semibold text-[#2A2A2A]">On this page</p>
      <ul className="space-y-1 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <a className="font-semibold text-[#4F5BD5] hover:underline" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
