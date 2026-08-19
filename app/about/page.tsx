import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen px-6 py-16 sm:py-24">
      <article className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          About us
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          A small team with a clear point of view.
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600">
          We care about making useful things, communicating clearly, and
          learning in public. This space is where we collect what we discover.
        </p>
        <Link
          className="mt-10 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          href="/"
        >
          <span aria-hidden="true">&larr;&nbsp;</span> Back to home
        </Link>
      </article>
    </main>
  );
}
