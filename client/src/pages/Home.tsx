import { ArrowUpRight, Clock3, MapPin, Menu, Phone, Send, Wrench, X } from "lucide-react";
import { useState } from "react";

const logo = "/manus-storage/nls-logo-mark_3b9c7e39.png";
const hero = "/manus-storage/nls-hero_ed71fa2e.jpg";
const galleryImages = {
  railings: "/manus-storage/nls-gallery-railings_30f7d260.jpg",
  gate: "/manus-storage/nls-gallery-gate_30ba7c56.jpg",
  furniture: "/manus-storage/nls-gallery-furniture_c2bda7a7.jpg",
};

const phone = "+91 98765 43210";
const phoneHref = "tel:+919876543210";
const whatsappHref = "https://wa.me/919876543210?text=Hello%20New%20Laxmi%20Steel%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const services = [
  { number: "01", title: "Steel Railings", copy: "Staircases, balconies, terraces, and every edge that needs a confident finish." },
  { number: "02", title: "Gates & Entrances", copy: "Sliding, swing, and statement gates built around your home's proportions." },
  { number: "03", title: "Grills & Safety", copy: "Window, balcony, and security grills that protect without feeling heavy." },
  { number: "04", title: "Glass Work", copy: "Clear, elegant glass details for brighter rooms and cleaner sightlines." },
  { number: "05", title: "Custom Furniture", copy: "Steel-and-wood pieces made for the exact corner, counter, or room." },
];

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="New Laxmi Steel home">
      <img src={logo} alt="NLS mark" className="h-11 w-11 object-contain" />
      <span className="leading-none">
        <span className="block text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-[#2f2921]">New Laxmi</span>
        <span className="mt-1 block text-[0.66rem] font-bold uppercase tracking-[0.36em] text-[#b58a55]">Steel</span>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#f7f2e9] text-[#2f2921] paper-grain">
      <header className="absolute inset-x-0 top-0 z-30 text-white">
        <div className="container flex items-center justify-between border-b border-white/20 py-5 lg:py-6">
          <Brand />
          <nav className="hidden items-center gap-8 text-[0.67rem] font-extrabold uppercase tracking-[0.2em] lg:flex" aria-label="Primary navigation">
            <a className="transition-colors hover:text-[#d8b67e]" href="#services">Services</a>
            <a className="transition-colors hover:text-[#d8b67e]" href="#projects">Projects</a>
            <a className="transition-colors hover:text-[#d8b67e]" href="#contact">Contact</a>
            <a className="btn-press flex items-center gap-2 bg-[#b58a55] px-4 py-3 text-[#211c17] hover:bg-[#d8b67e]" href={phoneHref}><Phone size={14} /> Call us</a>
          </nav>
          <button className="rounded-sm border border-white/30 p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && <nav className="container flex flex-col gap-4 bg-[#2f2921]/95 px-5 py-5 text-xs font-extrabold uppercase tracking-[0.2em] lg:hidden">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>}
      </header>

      <main>
        <section className="relative min-h-[700px] overflow-hidden bg-[#302b25] text-white lg:min-h-[780px]">
          <img src={hero} alt="Modern home entrance with a steel and glass railing" className="absolute inset-0 h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#211c17]/95 via-[#211c17]/70 to-[#211c17]/10" />
          <div className="container relative flex min-h-[700px] items-end pb-16 pt-36 lg:min-h-[780px] lg:items-center lg:pb-0">
            <div className="max-w-2xl">
              <div className="reveal flex items-center gap-4 mb-7"><span className="eyebrow text-[#d8b67e]">Fabrication / Glass / Finish</span><span className="hidden h-px w-14 bg-[#b58a55] sm:block" /></div>
              <h1 className="display reveal max-w-xl text-6xl leading-[0.92] tracking-[-0.035em] text-[#fffaf1] delay-1 sm:text-8xl">Made to<br /><em className="font-normal text-[#d8b67e]">hold the view.</em></h1>
              <p className="reveal mt-6 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-white/60 delay-1">Glass, steel railing & furniture</p>
              <p className="reveal mt-8 max-w-md text-sm leading-7 text-white/75 delay-2 sm:text-base">Thoughtful metalwork for homes and spaces that deserve a little more permanence. Measured, made, and finished with care.</p>
              <div className="reveal mt-9 flex flex-wrap items-center gap-3 delay-3">
                <a className="btn-press inline-flex items-center gap-3 bg-[#b58a55] px-5 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#211c17] hover:bg-[#d8b67e]" href={whatsappHref} target="_blank" rel="noreferrer"><Send size={15} /> WhatsApp a project</a>
                <a className="btn-press inline-flex items-center gap-3 border border-white/35 px-5 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-white hover:border-[#d8b67e] hover:text-[#d8b67e]" href="#projects">View our work <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div className="absolute bottom-10 right-6 hidden h-32 w-32 items-center justify-center rounded-full border border-[#b58a55]/70 text-center text-[0.55rem] font-extrabold uppercase leading-4 tracking-[0.16em] text-[#d8b67e] lg:flex"><div className="border-y border-[#b58a55]/50 py-3">NLS / 001<br /><span className="text-white/70">Made to last</span><br />New Laxmi Steel</div></div>
          </div>
        </section>

        <section id="services" className="container py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.4fr] lg:gap-24">
            <div>
              <div className="eyebrow">What we make</div>
              <h2 className="display mt-5 text-5xl leading-[0.95] tracking-[-0.03em] text-[#393128] sm:text-6xl">Structure with a softer edge.</h2>
              <p className="mt-7 max-w-sm text-sm leading-7 text-[#6d6254]">From a single balcony railing to a complete entrance package, we bring the same attention to proportion, material, and finish.</p>
              <div className="mt-10 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#b58a55]"><Wrench size={16} /> Built around your brief</div>
            </div>
            <div className="ledger-rule">
              {services.map((service) => <div key={service.number} className="group grid gap-4 border-b border-[#d9cdbb] py-6 sm:grid-cols-[56px_0.8fr_1.3fr] sm:items-center">
                <span className="font-mono text-xs text-[#b58a55]">{service.number}</span>
                <h3 className="display text-2xl text-[#393128] transition-colors group-hover:text-[#b58a55]">{service.title}</h3>
                <p className="max-w-sm text-sm leading-6 text-[#756b60]">{service.copy}</p>
              </div>)}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#eae1d3] py-24 lg:py-32">
          <div className="container">
            <div className="mb-6 flex items-center justify-between text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-[#8c7962]"><span>Project sheets / 2026</span><span className="hidden sm:block">NLS archive / 03</span></div>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div><div className="eyebrow">Selected projects</div><h2 className="display mt-5 text-5xl leading-none tracking-[-0.03em] text-[#393128] sm:text-6xl">Made to hold the view.</h2></div>
              <p className="max-w-xs text-sm leading-6 text-[#756b60]">A few details from recent work — profiles, edges, and finishes made for the long view.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
              <figure className="group lg:col-span-5"><div className="aspect-[4/5] overflow-hidden bg-[#cfc2af]"><img src={galleryImages.railings} alt="Steel and glass balcony railing" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div><figcaption className="flex justify-between border-b border-[#c4b49f] py-4 text-[0.65rem] font-extrabold uppercase tracking-[0.16em]"><span>01 / Glass railing</span><span className="text-[#b58a55]">Residential</span></figcaption></figure>
              <figure className="group lg:col-span-4 lg:mt-20"><div className="aspect-[4/5] overflow-hidden bg-[#cfc2af]"><img src={galleryImages.gate} alt="Custom matte black steel entrance gate" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div><figcaption className="flex justify-between border-b border-[#c4b49f] py-4 text-[0.65rem] font-extrabold uppercase tracking-[0.16em]"><span>02 / Entrance gate</span><span className="text-[#b58a55]">Exterior</span></figcaption></figure>
              <figure className="group sm:col-span-2 lg:col-span-3 lg:mt-40"><div className="aspect-[4/5] overflow-hidden bg-[#cfc2af]"><img src={galleryImages.furniture} alt="Steel and wood console furniture" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div><figcaption className="flex justify-between border-b border-[#c4b49f] py-4 text-[0.65rem] font-extrabold uppercase tracking-[0.16em]"><span>03 / Furniture</span><span className="text-[#b58a55]">Custom</span></figcaption></figure>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#302b25] py-24 text-[#fffaf1] lg:py-32">
          <div className="container grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-28">
            <div><div className="eyebrow text-[#d8b67e]">Start a conversation</div><h2 className="display mt-5 max-w-md text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl">Share your measurements. We’ll shape the right finish.</h2><p className="mt-7 max-w-sm text-sm leading-7 text-white/65">Send a site photo, rough measurements, and your preferred finish. We’ll reply with the right next step for your project.</p><div className="mt-9 flex flex-wrap gap-3"><a className="btn-press inline-flex items-center gap-3 bg-[#b58a55] px-5 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#211c17] hover:bg-[#d8b67e]" href={phoneHref}><Phone size={15} /> {phone}</a><a className="btn-press inline-flex items-center gap-3 border border-white/25 px-5 py-4 text-xs font-extrabold uppercase tracking-[0.16em] hover:border-[#d8b67e] hover:text-[#d8b67e]" href={whatsappHref} target="_blank" rel="noreferrer"><Send size={15} /> WhatsApp</a></div></div>
            <div className="ledger-rule border-[#b58a55]/55 pt-7"><div className="grid gap-9 sm:grid-cols-2"><div><MapPin className="mb-4 text-[#d8b67e]" size={20} /><div className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[#d8b67e]">Workshop address</div><p className="mt-3 text-sm leading-6 text-white/75">New Laxmi Steel Workshop<br />India · exact address to be updated</p></div><div><Clock3 className="mb-4 text-[#d8b67e]" size={20} /><div className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[#d8b67e]">Business hours</div><p className="mt-3 text-sm leading-6 text-white/75">Mon – Sat / 9:00 AM – 7:00 PM<br />Sunday / By appointment</p></div></div><div className="mt-14 border-t border-white/15 pt-6 text-xs leading-6 text-white/45"><span className="font-extrabold uppercase tracking-[0.16em] text-[#d8b67e]">What to send /</span> site photo · rough dimensions · finish reference. For quotations and site visits, WhatsApp is usually the quickest way to reach us.</div></div>
          </div>
        </section>
      </main>

      <footer className="bg-[#211c17] text-white/55"><div className="container flex flex-col gap-4 py-7 text-[0.62rem] font-bold uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><img src={logo} alt="" className="h-7 w-7 object-contain" /><span>New Laxmi Steel</span></div><span>Glass / Steel / Furniture</span></div></footer>
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:hidden"><a className="btn-press flex h-12 w-12 items-center justify-center rounded-full bg-[#b58a55] text-[#211c17] shadow-lg" href={phoneHref} aria-label="Call New Laxmi Steel"><Phone size={19} /></a><a className="btn-press flex h-12 w-12 items-center justify-center rounded-full bg-[#3d9a68] text-white shadow-lg" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp New Laxmi Steel"><Send size={19} /></a></div>
    </div>
  );
}
