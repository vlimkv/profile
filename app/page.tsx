export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-gray-900">
      <h1 className="text-3xl font-semibold">Alimkhan Slambek</h1>
      <p className="mt-2 text-lg text-gray-700">
        Product-Oriented Fullstack Engineer
      </p>
      <p className="mt-4 text-gray-700">
        I build and ship real products end-to-end. From zero to production.
      </p>

      <div className="mt-6 flex gap-3 flex-wrap">
        <a className="underline" href="mailto:alimkhanslambek@mail.ru">Email</a>
        <a className="underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a className="underline" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>

      <section className="mt-12">
        <h2 className="font-semibold">About</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {/* вставь сюда свой “builder profile” текст */}
          I’m a fullstack developer who builds and ships production products fast.
          I’m comfortable owning the whole workflow: UI, backend logic, database,
          deployment, and post-launch fixes.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-semibold">What I Built</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Production web platform for offline events:
          booking flow, admin panel, auth, and QR-based check-in used during real events.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-semibold">How I Work</h2>
        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
          <li>Comfortable with ambiguity</li>
          <li>Ship fast, improve in production</li>
          <li>Prefer simple, pragmatic solutions</li>
          <li>Use AI as a tool, not a decision-maker</li>
          <li>Own outcomes end-to-end</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-semibold">Tech</h2>
        <p className="mt-4 text-gray-700">
          React, Next.js, TypeScript, Node.js, Python, PostgreSQL, Supabase, VPS, HLS
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-semibold">Contact</h2>
        <p className="mt-4 text-gray-700">alimkhanslambek@mail.ru</p>
      </section>
    </main>
  );
}
