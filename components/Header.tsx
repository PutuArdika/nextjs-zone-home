export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            The Company
          </p>
          <p className="mt-1 text-sm text-slate-500">Ideas worth sharing</p>
        </div>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
          <a className="transition-colors hover:text-blue-600" href="/blog">
            Blog
          </a>
          <a className="transition-colors hover:text-blue-600" href="/about">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
