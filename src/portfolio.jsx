import React, { useMemo, useState, useMemo as _useMemo } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  Sun,
  Moon,
  ArrowRight,
  Cpu,
  Smartphone,
  Database,
  Sparkles,
  Rocket,
} from "lucide-react";

// =============================
// ======  DATA SECTION  =======
// =============================
const DATA = {
  name: "Hilal Sinem Sayar",
  headline: "Computer Engineer · AI & Software",
  summary:
    "Yapay zekâ, mobil uygulama ve veri odaklı ürünler geliştiriyorum. Gerçek dünya problemlerini ölçeklenebilir, kullanıcı odaklı çözümlere dönüştürmeyi seviyorum.",
  location: "İzmir, Türkiye",
  email: "hilal.sayar@example.com", // ← değiştirin
  linkedin: "https://www.linkedin.com/in/", // ← ekleyin
  github: "https://github.com/", // ← ekleyin
  cvUrl: "#", // PDF CV linki ekleyin
  education: [
    {
      school: "İzmir Ekonomi Üniversitesi",
      degree: "B.Sc., Computer Engineering (High Honor)",
      details: "GPA 3.61",
      period: "2019 – 2025",
    },
  ],
  skills: [
    "Python",
    "Java",
    "C/C++/C#",
    "Kotlin",
    "Flutter",
    "TensorFlow",
    "NumPy / pandas",
    "Firebase",
    "Android Studio",
    "BLE / IoT",
    "Unity",
    "SQL (MySQL/SQLite)",
    "Git/GitHub",
  ],
  projects: [
    {
      title: "Tarifeni Bul – AI-Based Mobile Tariff Recommendation",
      tags: ["Python", "ML", "Flutter", "Firebase"],
      description:
        "Kullanıcıların geçmiş mobil veri kullanımını analiz edip bir sonraki ayki ihtiyacı tahmin eden; Türkiye’deki operatörlerden en uygun paketi öneren AI destekli uygulama.",
      highlights: [
        "Python ile talep tahmin modeli (time-series/ML)",
        "Flutter arayüz, Firebase entegrasyonu",
        "Gerçek zamanlı, kişiselleştirilmiş öneriler",
      ],
      links: { demo: "#", repo: "#" },
      badge: "Featured",
    },
    {
      title: "SISMOS – Emergency Bluetooth Tracker",
      tags: ["Android", "BLE", "AI", "RSSI"],
      description:
        "BLE sinyallerinden (RSSI) yapay zekâ ile mesafe tahmini yaparak afet sonrası enkaz altındaki kişilerin konumlanmasına destek veren Android çözümü.",
      highlights: [
        "Android Studio ile mobil uygulama",
        "RSSI verisi → ML ile mesafe tahmini",
        "Düşük enerji tüketimi, saha koşullarına uygun",
      ],
      links: { demo: "#", repo: "#" },
      badge: "Research",
    },
    {
      title: "Supply Chain Product Owner Case Study (Wizardio / SCW.AI)",
      tags: ["Product", "UX", "Analytics"],
      description:
        "Üretim analitik platformunda kullanılabilirlik ve izleme odaklı geliştirmeler: tooltip bilgi sistemi, dashboard filtreleme, anomali uyarıları, veri dağılım raporu.",
      highlights: [
        "User story & acceptance criteria",
        "Backlog yönetimi, sprint planlama",
        "CSM, UX ve Dev ekipleriyle çapraz çalışma",
      ],
      links: { doc: "#" },
      badge: "PO Case",
    },
  ],
  interests: ["AI in Education", "Human-centered AI", "Data-Driven Products"],
};

// =============================
// ====  HELPERS & PIECES  =====
// =============================
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <motion.div {...fadeUp}>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center gap-3">
          <Sparkles className="h-6 w-6" /> {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        )}
      </motion.div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Chip({ children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded-2xl border px-3 py-1 text-sm leading-6 transition ${
        active ? "bg-black text-white dark:bg-white dark:text-black" : "hover:bg-black/5 dark:hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border p-5 md:p-6 shadow-sm bg-white/60 dark:bg-zinc-900/60">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border p-2"><Icon className="h-5 w-5"/></div>
        <div>
          <div className="text-xs text-zinc-500">{label}</div>
          <div className="text-xl font-bold tracking-tight">{value}</div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="rounded-2xl border p-5 md:p-6 shadow-sm bg-white/70 dark:bg-zinc-900/60">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
        <div className="flex gap-2 flex-wrap">
          {p.tags.map((t) => (
            <span key={t} className="inline-flex items-center rounded-xl border px-2 py-0.5 text-xs">{t}</span>
          ))}
        </div>
      </div>
      {p.badge && (
        <div className="mt-2 inline-flex text-[10px] uppercase tracking-wider rounded-full border px-2 py-0.5">
          {p.badge}
        </div>
      )}
      <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">{p.description}</p>
      <ul className="mt-3 space-y-1 text-sm list-disc pl-5">
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3 text-sm">
        {p.links?.demo && p.links.demo !== "#" && (
          <a className="underline" href={p.links.demo} target="_blank" rel="noreferrer">Demo</a>
        )}
        {p.links?.repo && p.links.repo !== "#" && (
          <a className="underline" href={p.links.repo} target="_blank" rel="noreferrer">Repo</a>
        )}
        {p.links?.doc && (
          <a className="underline" href={p.links.doc} target="_blank" rel="noreferrer">Doc</a>
        )}
      </div>
    </motion.div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
      <Sparkles className="h-3 w-3" /> {children}
    </span>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">
      {children}
    </a>
  );
}

// =============================
// ======  MAIN COMPONENT  =====
// =============================
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [activeTag, setActiveTag] = useState("All");
  const yearsOfExp = useMemo(() => new Date().getFullYear() - 2019, []);

  const tags = ["All", ...Array.from(new Set(DATA.projects.flatMap((p) => p.tags)))];
  const filtered = DATA.projects.filter((p) =>
    activeTag === "All" ? true : p.tags.includes(activeTag)
  );

  return (
    <div className={dark ? "dark" : ""}>
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25),rgba(255,255,255,0)_70%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25),rgba(0,0,0,0)_70%)]"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[80rem] rounded-full blur-3xl bg-gradient-to-r from-indigo-400/30 via-sky-400/20 to-fuchsia-400/30"
        />
      </div>

      <div className="min-h-screen text-zinc-900 dark:text-zinc-100">
        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/40 border-b">
          <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
            <div className="font-black tracking-tight">{DATA.name}</div>
            <nav className="hidden md:flex items-center gap-1 text-sm">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="rounded-xl border px-3 py-1 text-sm hover:shadow inline-flex items-center gap-2"
            >
              {dark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-12 items-center gap-10">
            <motion.div {...fadeUp} className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-4">
                <Rocket className="h-3 w-3"/> Building AI‑powered products
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                {DATA.headline}
              </h1>
              <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl">
                {DATA.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#projects" className="rounded-2xl bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 font-medium inline-flex items-center gap-2">
                  Explore Projects <ArrowRight className="h-4 w-4"/>
                </a>
                {DATA.cvUrl !== "#" && (
                  <a href={DATA.cvUrl} className="rounded-2xl border px-5 py-2.5 font-medium inline-flex items-center gap-2" target="_blank" rel="noreferrer">
                    <Download className="h-4 w-4"/> CV’yi İndir
                  </a>
                )}
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <Badge>AI/ML</Badge>
                <Badge>Mobile</Badge>
                <Badge>Product Thinking</Badge>
              </div>
              <div className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
                {yearsOfExp}+ yıl yazılım/AI deneyimi • {DATA.location}
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="md:col-span-5">
              <div className="grid grid-cols-3 gap-4">
                <Stat icon={Cpu} label="AI/ML" value="Time‑series, RSSI ML" />
                <Stat icon={Smartphone} label="Mobile" value="Android, Flutter" />
                <Stat icon={Database} label="Data" value="Firebase, SQL" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About" subtitle="Kısa profil ve iletişim">
          <div className="grid md:grid-cols-12 gap-6">
            <motion.div {...fadeUp} className="md:col-span-7 leading-relaxed">
              <p>
                Merhaba! {DATA.name}. Ürün odaklı bir yazılım/AI mühendisi olarak; veri analizi, 
                makine öğrenimi ve mobil geliştirme alanlarında uçtan uca projeler yürütüyorum. 
                Kullanıcı ihtiyaçları ile iş hedeflerini dengeleyen yalın ve etkili deneyimler tasarlıyorum.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="md:col-span-5">
              <div className="rounded-2xl border p-5 md:p-6 shadow-sm bg-white/60 dark:bg-zinc-900/60">
                <div className="font-semibold mb-3">İletişim</div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a className="underline inline-flex items-center gap-2" href={`mailto:${DATA.email}`}><Mail className="h-4 w-4"/> {DATA.email}</a>
                  <a className="underline inline-flex items-center gap-2" href={DATA.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4"/> LinkedIn</a>
                  <a className="underline inline-flex items-center gap-2" href={DATA.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4"/> GitHub</a>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" subtitle="Filtrelenebilir kartlar ve öne çıkanlar">
          <motion.div {...fadeUp} className="flex flex-wrap gap-2 mb-6">
            {tags.map((t) => (
              <Chip key={t} onClick={() => setActiveTag(t)} active={t === activeTag}>{t}</Chip>
            ))}
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" subtitle="Teknoloji bulutu ve yetkinlikler">
          <motion.div {...fadeUp} className="flex flex-wrap gap-2">
            {DATA.skills.map((s) => (
              <span key={s} className="inline-flex items-center rounded-2xl border px-3 py-1 text-sm leading-6 hover:translate-y-[-2px] transition">
                {s}
              </span>
            ))}
          </motion.div>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <Stat icon={Cpu} label="ML/AI" value="TensorFlow, NumPy, pandas" />
            <Stat icon={Smartphone} label="Mobile" value="Android, Flutter" />
            <Stat icon={Database} label="Backend/Data" value="Firebase, SQL" />
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" subtitle="Akademik geçmiş">
          <div className="grid gap-4">
            {DATA.education.map((e) => (
              <motion.div {...fadeUp} key={e.school} className="rounded-2xl border p-5 md:p-6 shadow-sm bg-white/60 dark:bg-zinc-900/60">
                <div className="font-semibold">{e.school}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">{e.degree}</div>
                <div className="text-sm mt-1">{e.details}</div>
                <div className="text-sm mt-1">{e.period}</div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" subtitle="Projeler, iş fırsatları veya işbirlikleri için">
          <motion.div {...fadeUp} className="rounded-2xl border p-6 shadow-sm bg-white/60 dark:bg-zinc-900/60">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">Beraber çalışalım mı?</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Hızlı bir mesaj bırakın; uygun zamanda dönüş yapayım.
                </p>
              </div>
              <div className="flex gap-3">
                <a href={`mailto:${DATA.email}`} className="rounded-2xl bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 font-medium inline-flex items-center gap-2"><Mail className="h-4 w-4"/> E‑posta</a>
                {DATA.linkedin && (
                  <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="rounded-2xl border px-5 py-2.5 font-medium inline-flex items-center gap-2"><Linkedin className="h-4 w-4"/> LinkedIn</a>
                )}
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Footer */}
        <footer className="py-10 text-center text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} {DATA.name}. All rights reserved.
        </footer>
      </div>

      {/* Tiny CSS helpers for marquee/experimental (kept minimal) */}
      <style>{`
        /* You can extend with keyframes if you add marquees later */
      `}</style>
    </div>
  );
}
