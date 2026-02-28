import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/engineering', label: 'Engineering' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className="border-b border-slate-200">
      <nav className="container-page flex items-center justify-between py-5">
        <Link href="/" className="font-semibold text-accent">
          Linshengyi Sun
        </Link>
        <ul className="flex gap-5 text-sm text-slate-700">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
