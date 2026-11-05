"use client";

import * as React from "react";
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Globe,
  Database,
  Layout,
  MessageCircle,
  Send,
  Mail,
  CheckCircle2,
  Sparkles,
  Menu,
  X,
  Laptop,
  Palette,
  Rocket,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// shortcut: mock kontak WhatsApp & sosial, sesuaikan nomor asli saat rilis produksi
const WHATSAPP_NUMBER = "6285385939840";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Yudha, saya tertarik untuk konsultasi proyek web / UI/UX."
)}`;

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function FigmaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

interface ProjectItem {
  id: string;
  category: "laravel-ci3" | "nextjs" | "figma";
  title: string;
  categoryLabel: string;
  problemSolving: string;
  tags: string[];
  liveUrl: string;
  figmaUrl: string;
  githubUrl: string;
  gradient: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    category: "nextjs",
    title: "Sistem Manajemen Turnamen Voli RT",
    categoryLabel: "Next.js 16",
    problemSolving:
      "Digitalisasi sistem kompetisi round-robin 5 RT, mengotomatisasi kalkulasi klasemen real-time, penjadwalan pertandingan, serta manajemen tugas panitia dan wasit lapangan.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://turnamen-voli-kaliduren.vercel.app/",
    figmaUrl: "https://figma.com/@yudha/erp-inventory",
    githubUrl: "https://github.com/Onlyudha/turnamen-voli-kaliduren/tree/main/app",
    gradient: "from-red-500/20 via-rose-500/10 to-transparent",
  },
  {
    id: "p2",
    category: "laravel-ci3",
    title: "Sistem Kasir POS Cafe & Resto",
    categoryLabel: "Laravel",
    problemSolving:
      "Membuat sistem kasir web-based dengan pemrosesan transaksi cepat, pencetakan struk otomatis, manajemen inventaris bahan baku real-time, serta kalkulasi laporan penjualan harian.",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "REST API"],
    liveUrl: "https://demo.yudha.dev/resto-pos",
    figmaUrl: "https://figma.com/@yudha/resto-pos-ui",
    githubUrl: "https://github.com/yudhasaputra/pos-resto-ci3",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "p3",
    category: "nextjs",
    title: "Enterprise SaaS Analytics & Monitoring Platform",
    categoryLabel: "Next.js 16",
    problemSolving:
      "Menggantikan dashboard legacy yang lambat dengan Server Components & Turbopack streaming, menghasilkan skor Core Web Vitals 99 dan data refresh sub-detik.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "https://demo.yudha.dev/saas-analytics",
    figmaUrl: "https://figma.com/@yudha/saas-analytics-kit",
    githubUrl: "https://github.com/yudhasaputra/next-saas-analytics",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "p4",
    category: "nextjs",
    title: "High-Converting Tech Agency & Portfolio Showcase",
    categoryLabel: "Next.js & Tailwind",
    problemSolving:
      "Merancang landing page dengan arsitektur SEO terstruktur dan micro-interaction ringan, meningkatkan conversion rate konsultasi prospek hingga 42%.",
    tags: ["Next.js", "Tailwind CSS", "SEO Meta", "App Router"],
    liveUrl: "https://demo.yudha.dev/tech-agency",
    figmaUrl: "https://figma.com/@yudha/agency-showcase-ui",
    githubUrl: "https://github.com/yudhasaputra/agency-showcase",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "p5",
    category: "figma",
    title: "Fintech Mobile Banking & Wealth Management App",
    categoryLabel: "Figma UI/UX",
    problemSolving:
      "Mengurangi gesekan alur transfer dana melalui user testing berulang dan pembuatan Design System 8-point grid dengan kepatuhan kontras WCAG AA.",
    tags: ["Figma", "Design System", "Interactive Prototype", "Fintech UX"],
    liveUrl: "https://demo.yudha.dev/fintech-preview",
    figmaUrl: "https://figma.com/@yudha/fintech-wealth-design",
    githubUrl: "https://github.com/yudhasaputra/fintech-tokens",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: "p6",
    category: "figma",
    title: "Design System & Web Portal LMS Edukasi Terpadu",
    categoryLabel: "Figma UI/UX",
    problemSolving:
      "Menyusun 140+ komponen terstandarisasi untuk multi-role portal (Siswa, Instruktur, Admin), mempercepat proses slicing frontend tim hingga 3x lipat.",
    tags: ["Figma", "Auto Layout 5.0", "Variables & Tokens", "UI Kit"],
    liveUrl: "https://demo.yudha.dev/lms-preview",
    figmaUrl: "https://figma.com/@yudha/lms-design-system",
    githubUrl: "https://github.com/yudhasaputra/lms-component-specs",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
  },
];

const SKILLS_LIST = [
  "Laravel 11",
  "CodeIgniter 3",
  "Next.js 16",
  "Tailwind CSS",
  "TypeScript",
  "MySQL Database",
  "RESTful API",
  "Figma Design System",
  "Interactive Prototype",
  "Git & GitHub",
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const baseUrl = WHATSAPP_URL.split("?")[0];

    const text = `Halo Yudha, saya ${formData.name}.\n\n ${formData.message}`;

    window.open(`${baseUrl}?text=${encodeURIComponent(text)}`, "_blank");
    // shortcut: simulasi kirim formulir instan sebelum integrasi API produksi
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
      {/* 1. NAVBAR (Sticky) */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <a
            href="#home"
            className="flex items-center gap-2 font-mono text-lg font-bold tracking-wider text-white hover:text-zinc-300 transition-colors"
          >
            <span className="text-zinc-500"></span>
            <span>YUDHA.</span>
            <span className="text-zinc-500"></span>
          </a>

          {/* Desktop Nav: Home, About, Services, Projects, Contact */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">


            <a href="#contact">
              <Button size="sm" className="bg-white text-zinc-950 hover:bg-zinc-200 font-semibold">
                Contact Me
              </Button>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-4 py-4 space-y-3">
            <div className="flex pb-2">
              <Badge
                variant="outline"
                className="border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs py-1 px-2.5 font-medium flex items-center gap-1.5"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                Available for Freelance
              </Badge>
            </div>
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-zinc-300 hover:text-white"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-zinc-300 hover:text-white"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-zinc-300 hover:text-white"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-zinc-300 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-zinc-300 hover:text-white"
            >
              Contact
            </a>
            <div className="pt-2">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full justify-center bg-white text-zinc-950 hover:bg-zinc-200 font-semibold">
                  Konsultasi Gratis
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO / HOME SECTION */}
      <section
        id="home"
        className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32 border-b border-zinc-800/60"
      >
        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-zinc-800/40 via-zinc-700/20 to-transparent blur-3xl pointer-events-none rounded-full"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <p className="mb-4 text-xs sm:text-sm font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            HELLO WORLD! I&apos;M
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]">
            Yudha <span className="text-zinc-400">Saputra.</span>
          </h1>

          <h2 className="mt-4 text-lg sm:text-2xl font-medium text-zinc-300">
            Full-Stack Web Developer & UI/UX Designer
          </h2>

          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Saya membangun website modern, responsif, dan scalable untuk membantu bisnis berkembang.
            Spesialis pengembang aplikasi web (
            <span className="text-zinc-200 font-medium">
              Laravel, CodeIgniter 3, Next.js
            </span>
            ) dan perancangan interface interaktif di{" "}
            <span className="text-zinc-200 font-medium">Figma</span>.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-zinc-500 italic max-w-xl">
            I create modern, responsive, and engaging web solutions to help businesses and startups grow.
          </p>

          {/* Dual CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#projects">
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 bg-zinc-900/70 hover:bg-zinc-800 text-zinc-100 gap-2 h-11 px-6 rounded-lg text-sm font-semibold transition-all hover:border-zinc-500"
              >
                Explore My Work &rarr;
              </Button>
            </a>

            <a href="#contact">
              <Button
                size="lg"
                className="bg-white text-zinc-950 hover:bg-zinc-200 font-semibold h-11 px-6 rounded-lg shadow-sm"
              >
                Contact Me
              </Button>
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block"></span>
            AVAILABLE FOR FREELANCE
          </div>
        </div>
      </section>

      {/* 3. ABOUT ME SECTION (GET TO KNOW ME) */}
      <section
        id="about"
        className="py-24 border-b border-zinc-800/60 bg-zinc-950/70 relative"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
              GET TO KNOW ME
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              About <span className="text-zinc-400">Me</span>
            </h2>
          </div>

          {/* Grid Konten About */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Kolom Narasi Kiri */}
            <div className="lg:col-span-6 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Halo, saya Yudha Saputra &mdash; Web Developer & UI/UX Designer.
              </h3>

              <p className="text-zinc-400">
                Saya adalah seorang pengembang yang memiliki ketertarikan mendalam terhadap dunia
                rekayasa perangkat lunak web dan perancangan antarmuka digital. Menggabungkan
                kekuatan backend yang terstruktur dengan estetika frontend modern.
              </p>

              <p className="text-zinc-400">
                Spesialisasi saya berfokus pada arsitektur sistem berbasis{" "}
                <span className="text-zinc-200 font-medium">Laravel & CodeIgniter 3</span> untuk
                kebutuhan aplikasi bisnis yang kompleks (CRUD, dashboard admin, API), serta ekosistem{" "}
                <span className="text-zinc-200 font-medium">Next.js & Tailwind CSS</span> untuk
                menghadirkan landing page dan web app dengan load time instan.
              </p>

              <p className="text-zinc-400">
                Saya percaya bahwa website yang bagus bukan hanya tentang tampilan visual, melainkan
                bagaimana solusi tersebut memecahkan masalah operasional nyata, mudah dirawat, aman,
                dan memberikan kemudahan terbaik bagi setiap penggunanya.
              </p>

              <div className="pt-2">
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white gap-2 font-medium"
                  >
                    Let&apos;s Work Together &rarr;
                  </Button>
                </a>
              </div>
            </div>

            {/* Kolom Kartu Detail Kanan */}
            <div className="lg:col-span-6 space-y-4">
              <Card className="bg-zinc-900/60 border-zinc-800 p-5 hover:border-zinc-700 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-white shrink-0">
                    <Laptop className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-white">Full-Stack Web Engineering</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Mengembangkan sistem dari backend database hingga
                      antarmuka interaktif yang scalable dan mudah di-maintain.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-zinc-900/60 border-zinc-800 p-5 hover:border-zinc-700 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-white shrink-0">
                    <Palette className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-white">UI/UX Designer</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Merancang wireframe, user flow, hingga Design System Dengan Figma.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-zinc-900/60 border-zinc-800 p-5 hover:border-zinc-700 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-white shrink-0">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-white">Countinuous Learning</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Terus mengembangkan kemampuan dan mengikuti perkembangan teknologi
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Area Technologies & Tools */}
          <div className="mt-16 pt-10 border-t border-zinc-800/80 text-center">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">
              Technologies &amp; Core Tools
            </h4>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {SKILLS_LIST.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 text-zinc-300 px-3 py-1.5 text-xs font-mono transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION (WHAT I CAN DO) */}
      <section id="services" className="py-24 border-b border-zinc-800/60 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
              WHAT I CAN DO
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Layanan &amp; Spesialisasi
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">
              Solusi website dan sistem web untuk membantu kebutuhan bisnis Anda berkembang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1 – Business Website */}
            <Card className="bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between group">
              <CardHeader className="space-y-3">
                <div className="p-3 w-fit rounded-lg bg-zinc-800/70 border border-zinc-700/50 text-zinc-200 group-hover:text-white group-hover:bg-zinc-800 transition-colors">
                  <Globe className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  Business Website
                </CardTitle>
                <CardDescription className="text-zinc-400 leading-relaxed text-sm">
                  Website profesional untuk memperkenalkan bisnis, produk, dan layanan Anda
                  kepada calon pelanggan secara online.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-xs font-semibold text-blue-400 tracking-wide uppercase">
                  Business Online Presence
                </span>
              </CardContent>
              <CardFooter className="pt-2 border-t border-zinc-800/60">
                <a href="#contact" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-xs text-zinc-300 hover:text-white"
                  >
                    <span>Konsultasi Proyek</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Service 2 – Landing Page */}
            <Card className="bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between group">
              <CardHeader className="space-y-3">
                <div className="p-3 w-fit rounded-lg bg-zinc-800/70 border border-zinc-700/50 text-zinc-200 group-hover:text-white group-hover:bg-zinc-800 transition-colors">
                  <Layout className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  Landing Page
                </CardTitle>
                <CardDescription className="text-zinc-400 leading-relaxed text-sm">
                  Halaman website menarik untuk promosi, pemasaran, dan meningkatkan
                  ketertarikan calon pelanggan terhadap produk atau layanan Anda.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-xs font-semibold text-blue-400 tracking-wide uppercase">
                  Modern Landing Page
                </span>
              </CardContent>
              <CardFooter className="pt-2 border-t border-zinc-800/60">
                <a href="#contact" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-xs text-zinc-300 hover:text-white"
                  >
                    <span>Konsultasi Proyek</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Service 3 – Responsive Website */}
            <Card className="bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between group">
              <CardHeader className="space-y-3">
                <div className="p-3 w-fit rounded-lg bg-zinc-800/70 border border-zinc-700/50 text-zinc-200 group-hover:text-white group-hover:bg-zinc-800 transition-colors">
                  <Layers className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  Responsive Website
                </CardTitle>
                <CardDescription className="text-zinc-400 leading-relaxed text-sm">
                  Website yang menyesuaikan tampilan dengan perangkat laptop, tablet,
                  maupun smartphone secara otomatis dan pixel-perfect.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-xs font-semibold text-blue-400 tracking-wide uppercase">
                  Mobile Friendly Design
                </span>
              </CardContent>
              <CardFooter className="pt-2 border-t border-zinc-800/60">
                <a href="#contact" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-xs text-zinc-300 hover:text-white"
                  >
                    <span>Konsultasi Proyek</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS SECTION (MY RECENT WORK) */}
      <section id="projects" className="py-24 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
                MY RECENT WORK
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              Beberapa proyek nyata yang saya bangun untuk memecahkan masalah operasional
              dan mengembangkan pengalaman web development modern.
            </p>
          </div>

          {/* Filter Tabs */}
          <Tabs defaultValue="all" className="w-full space-y-8">
            <div className="flex overflow-x-auto pb-2 scrollbar-none">
              <TabsList className="bg-zinc-900 border border-zinc-800 p-1 rounded-lg">
                <TabsTrigger
                  value="all"
                  className="data-active:bg-zinc-800 data-active:text-white text-zinc-400 px-4 py-1.5 text-xs font-medium"
                >
                  Semua ({PROJECTS.length})
                </TabsTrigger>
                <TabsTrigger
                  value="laravel-ci3"
                  className="data-active:bg-zinc-800 data-active:text-white text-zinc-400 px-4 py-1.5 text-xs font-medium"
                >
                  Laravel & CI3
                </TabsTrigger>
                <TabsTrigger
                  value="nextjs"
                  className="data-active:bg-zinc-800 data-active:text-white text-zinc-400 px-4 py-1.5 text-xs font-medium"
                >
                  Next.js
                </TabsTrigger>
                <TabsTrigger
                  value="figma"
                  className="data-active:bg-zinc-800 data-active:text-white text-zinc-400 px-4 py-1.5 text-xs font-medium"
                >
                  Figma UI/UX
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="focus-visible:outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="laravel-ci3" className="focus-visible:outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.filter((p) => p.category === "laravel-ci3").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="nextjs" className="focus-visible:outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.filter((p) => p.category === "nextjs").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="figma" className="focus-visible:outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.filter((p) => p.category === "figma").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 6. CONTACT & FOOTER (LET'S CONNECT) */}
      <section id="contact" className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info kolom kiri */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                LET&apos;S CONNECT
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Let&apos;s Work <span className="text-zinc-400">Together.</span>
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Punya ide website atau membutuhkan Web Developer & UI/UX Designer? Saya terbuka
                untuk berdiskusi mengenai arsitektur, estimasi pengerjaan, dan realisasi proyek Anda.
              </p>
              <p className="text-zinc-500 text-xs italic">
                Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/30 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <div className="text-sm">
                    <div className="font-semibold text-white">Let&apos;s Talk on WhatsApp</div>
                    <div className="text-xs text-emerald-400/80">
                      +62 853-8593-9840 (Usually available for discussions)
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300">
                  <Mail className="h-5 w-5 text-zinc-400 shrink-0" />
                  <div className="text-sm">
                    <div className="font-semibold text-white">Email</div>
                    <a
                      href="mailto:halo@yudha.dev"
                      className="text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      yudhasptraa00@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Tautan Sosial */}
              <div className="pt-4 border-t border-zinc-800">
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono mb-3">
                  Tautan Sosial & Repositori
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/onlyudha"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Yudha Saputra"
                    className="p-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yudha-saputra-556759311/en/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6zP2Zj%2BDTbuJRogkSDlfCA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Yudha Saputra"
                    className="p-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://figma.com/@yudhasaputra"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Figma Community Yudha Saputra"
                    className="p-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    <FigmaIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form kontak kanan */}
            <div className="lg:col-span-7">
              <Card className="bg-zinc-900/60 border-zinc-800 p-6 sm:p-8">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">Kirim Pesan Langsung</h3>
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-zinc-300">
                      Nama Lengkap
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Contoh: Budi Pratama"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white placeholder-zinc-500 focus:border-zinc-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-zinc-300">
                      Pesan & Detail Kebutuhan Proyek
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Deskripsikan fitur aplikasi, timeline, atau kebutuhan desain UI/UX Anda..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white placeholder-zinc-500 focus:border-zinc-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white text-zinc-950 hover:bg-zinc-200 font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="h-4 w-4" />
                    Kirim Pesan Sekarang
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-zinc-800/80 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; 2026 YUDHA.DEV &mdash; Yudha Saputra. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-zinc-300 transition-colors">
              Kembali ke Atas &uarr;
            </a>
          </div>
        </div>
      </section>

      {/* 7. FLOATING WHATSAPP BUTTON (seperti pada referensi) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Yudha melalui WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/60 transition-all hover:scale-105 group border border-emerald-400/30"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="h-5 w-5" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          Chat with me
        </span>
      </a>
    </div>
  );
}

// Subkomponen Project Card yang bersih dan terstandarisasi
function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Card className="bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Mockup Preview Area */}
        <div
          className={`h-40 w-full bg-gradient-to-br ${project.gradient} border-b border-zinc-800/80 p-4 flex flex-col justify-between relative overflow-hidden`}
        >
          {/* Header bar window mockup */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 inline-block" />
            </div>
            <Badge
              variant="outline"
              className="border-zinc-700/60 bg-zinc-950/60 text-zinc-300 text-[10px] font-mono"
            >
              {project.categoryLabel}
            </Badge>
          </div>

          {/* Center mock visual elements */}
          <div className="space-y-2 opacity-80 group-hover:opacity-100 transition-opacity">
            <div className="h-2 w-3/4 bg-zinc-700/60 rounded" />
            <div className="flex gap-2">
              <div className="h-8 flex-1 bg-zinc-800/80 rounded border border-zinc-700/40" />
              <div className="h-8 w-1/3 bg-zinc-800/80 rounded border border-zinc-700/40" />
            </div>
          </div>
        </div>

        <CardHeader className="space-y-2 pt-4">
          <CardTitle className="text-base sm:text-lg font-bold text-white group-hover:text-zinc-100 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {project.problemSolving}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-zinc-800/70 text-zinc-400 text-[10px] font-mono px-2 py-0.5"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>

      {/* 3 Tombol Akses: Live Demo, UI/UX Design (Figma), Source Code (GitHub) */}
      <CardFooter className="pt-3 pb-3 border-t border-zinc-800/70 bg-zinc-950/30 flex items-center justify-between gap-1.5">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button
            variant="outline"
            size="xs"
            className="w-full text-[11px] h-7 border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-zinc-600 gap-1"
          >
            <ExternalLink className="h-3 w-3" />
            Live Demo
          </Button>
        </a>

        <a
          href={project.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button
            variant="outline"
            size="xs"
            className="w-full text-[11px] h-7 border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-zinc-600 gap-1"
          >
            <FigmaIcon className="h-3 w-3" />
            UI/UX
          </Button>
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button
            variant="outline"
            size="xs"
            className="w-full text-[11px] h-7 border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-zinc-600 gap-1"
          >
            <GithubIcon className="h-3 w-3" />
            Code
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}


