import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      <div className="max-w-2xl mx-auto px-5 py-12 md:px-6 md:py-24">
        
        {/* Header */}
        <header className="mb-12 md:mb-20">
          <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">
            Alimkhan Slambek
          </h1>
          <p className="mt-3 text-base md:text-lg text-zinc-500 leading-relaxed max-w-lg text-balance">
            Product-oriented Fullstack Engineer. <br className="hidden sm:inline" />
            I build web products and internal tools that actually get used.
          </p>
          
          <div className="mt-6 md:mt-8 flex flex-wrap gap-2">
            <SocialLink href="mailto:alimkhanslambek@mail.ru" icon={<MailIcon />}>Email</SocialLink>
            <SocialLink href="https://github.com/vlimkv" icon={<GithubIcon />}>GitHub</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/alimkhan-slambek-903412332/" icon={<LinkedinIcon />}>LinkedIn</SocialLink>
          </div>
        </header>

        <div className="space-y-16 md:space-y-20">
          
          {/* About */}
          <section>
            <h2 className="sr-only">About</h2>
            <div className="prose prose-zinc prose-p:text-zinc-600 prose-p:leading-7 prose-p:text-sm md:prose-p:text-base max-w-none">
              <p className="text-balance">
                Most of my experience comes from startup and freelance work, where I take responsibility
                for the whole feature — from idea and UI to backend logic, deployment, and post-launch fixes.
                I’m comfortable working with ambiguity and owning outcomes end-to-end.
              </p>
            </div>
          </section>

          <section>
            <SectionTitle>Where I Add Most Value</SectionTitle>
            <p className="mt-4 text-sm md:text-base text-zinc-600 leading-relaxed max-w-xl text-balance">
              I’m most effective in small teams and early-stage products where speed,
              ownership, and product thinking matter.
              I’m comfortable taking a vague idea and turning it into a working system
              used by real people.
            </p>
          </section>

          {/* Work */}
          <section>
            <SectionTitle>What I Built</SectionTitle>
            
            <div className="mt-4 md:mt-8 grid gap-4 md:gap-6">
              <ProjectCard
                title="SAVOA.KZ"
                status="Production"
                link="https://savoa.kz"
                description={
                  <>
                    Web platform for offline events and course distribution.
                    Built the full system: landing pages, booking flow, custom admin panel,
                    and QR-based check-in used during live events.
                    <br /><br />
                    Used by 5,000+ participants across offline events and online course launches.
                    Product distribution handled via website, email, and an Instagram audience of ~10,000.
                    <br /><br />
                    Also shipped a companion iOS app for the SAVOA course,
                    built with Swift. Currently released via TestFlight.
                  </>
                }
                tags={[
                  "Next.js",
                  "PostgreSQL",
                  "Admin Panel",
                  "QR Check-in",
                  "Swift (iOS)",
                ]}
              />

              <ProjectCard
                title="Graff Piatto"
                status="Production"
                link="https://graffpiatto.com/en"
                description={
                  <>
                    Full-featured e-commerce and event platform built solo from scratch.
                    Implemented authentication, product catalog, checkout flow,
                    admin panel, and event booking system.
                    <br /><br />
                    Supports multiple languages (i18n), handles real orders,
                    and is actively used in production.
                  </>
                }
                tags={[
                  "Next.js",
                  "TypeScript",
                  "PostgreSQL",
                  "E-commerce",
                  "Order Management",
                ]}
              />

              <ProjectCard 
                title="Client Dashboards"
                status="Shipped"
                description={
                  <>
                    Built internal dashboards and automation tools for non-technical clients.
                    Focused on clean UI, reliable backend integrations, and pragmatic solutions
                    that reduced manual work.
                  </>
                }
                tags={[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "Automation"
                ]}
              />
            </div>
          </section>

          <section>
            <SectionTitle>Scope of Responsibility</SectionTitle>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="text-zinc-400 mt-1.5">•</span> Product decisions and trade-offs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-400 mt-1.5">•</span> Architecture and data modeling
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-400 mt-1.5">•</span> Shipping to production and post-launch fixes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-400 mt-1.5">•</span> Talking to users and iterating based on feedback
              </li>
            </ul>
          </section>

          {/* Tech */}
          <section>
            <SectionTitle>Technical Stack</SectionTitle>
            <div className="mt-4 md:mt-6 rounded-xl border border-zinc-200 bg-white p-5 md:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8">
                
                <div>
                  <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    Core & Backend
                  </h4>
                  <ul className="space-y-3">
                    <TechItem>React, Next.js, TypeScript</TechItem>
                    <TechItem>Node.js, Python</TechItem>
                    <TechItem>PostgreSQL, Supabase</TechItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    Infra & Distribution
                  </h4>
                  <ul className="space-y-3">
                    <TechItem>VPS Deployment, Domains</TechItem>
                    <TechItem>Cloudflare Stream (HLS)</TechItem>
                    <TechItem>Swift / TestFlight</TechItem>
                    <TechItem>Docker / CI/CD</TechItem>
                    <TechItem>Email Delivery (SMTP, transactional emails)</TechItem>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          <section>
            <SectionTitle>Using AI in Work</SectionTitle>
            <p className="mt-4 text-sm md:text-base text-zinc-600 leading-relaxed max-w-xl text-balance">
              I actively use AI tools to speed up development, but architecture,
              product decisions, and responsibility always stay on me.
              AI helps me ship faster — it doesn’t replace engineering judgment.
            </p>
          </section>

          {/* Philosophy */}
          <section>
            <SectionTitle>How I Work</SectionTitle>
            <ul className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <PhilosophyItem>Ship fast, improve in production</PhilosophyItem>
              <PhilosophyItem>Comfortable with ambiguity</PhilosophyItem>
              <PhilosophyItem>Code is for humans to read</PhilosophyItem>
              <PhilosophyItem>Product outcome &gt; tech purity</PhilosophyItem>
            </ul>
          </section>

          <section>
            <SectionTitle>Availability</SectionTitle>
            <p className="mt-4 text-sm md:text-base text-zinc-600 max-w-xl text-balance">
              Open to full-time roles in product-driven teams.
              Comfortable with remote-first environments and async collaboration.
            </p>
          </section>

          {/* Footer */}
          <footer className="pt-12 md:pt-16 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-zinc-400">
            <div className="flex flex-col gap-1">
              <span className="block text-zinc-900 font-medium">Alimkhan Slambek</span>
              <span>Astana, Kazakhstan · Remote-friendly</span>
            </div>
            <div className="text-xs text-zinc-300">
              Built with Next.js & Tailwind
            </div>
          </footer>

        </div>
      </div>
    </main>
  );
}

// --- Components ---

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-bold text-zinc-900 uppercase tracking-widest pl-1">
      {children}
    </h3>
  );
}

function ProjectCard({
  title,
  status,
  description,
  tags,
  link
}: {
  title: string;
  status: string;
  description: React.ReactNode;
  tags: string[];
  link?: string;
}) {
  return (
    <div className="group rounded-xl border border-zinc-200 bg-white p-5 md:p-6 transition-all hover:border-zinc-300 hover:shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-baseline mb-4">
        <div className="flex items-center gap-2">
          {link ? (
            <a 
              href={link} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 font-medium text-zinc-900 hover:text-blue-600 transition-colors"
            >
              {title}
              <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            <h4 className="font-medium text-zinc-900">{title}</h4>
          )}
        </div>

        <span className="text-[10px] font-mono uppercase tracking-wide text-zinc-500 border border-zinc-100 bg-zinc-50 px-2 py-0.5 rounded-full">
          {status}
        </span>
      </div>

      <p className="text-sm text-zinc-600 leading-relaxed mb-6 text-balance">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-[11px] text-zinc-600 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function TechItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-sm text-zinc-700 flex items-center gap-3">
      {/* Tech "Ring" Bullet */}
      <span className="w-1.5 h-1.5 rounded-full border border-zinc-400 bg-transparent shrink-0" />
      {children}
    </li>
  );
}

function PhilosophyItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="group text-sm text-zinc-600 border-l-2 border-zinc-100 pl-4 py-2 sm:py-1 transition-colors hover:border-zinc-300 hover:text-zinc-900 cursor-default">
      {children}
    </li>
  );
}

function SocialLink({ href, icon, children }: { href: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs md:text-sm font-medium text-zinc-600 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300 active:bg-zinc-100 active:scale-95 transition-all"
    >
      {icon && <span className="w-4 h-4 text-zinc-400">{icon}</span>}
      {children}
    </a>
  );
}

// --- Icons (Simple SVGs) ---

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}