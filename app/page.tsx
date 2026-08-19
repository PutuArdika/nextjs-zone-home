import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Welcome
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Thoughtful work, clearly shared.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Explore practical notes, ideas, and perspectives from our team.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              href="/blog"
            >
              Read the blog
            </a>
            <Link
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              href="/about"
            >
              About us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
