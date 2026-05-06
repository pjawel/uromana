/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { 
  Facebook, 
  Instagram, 
  Music2, 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  Calendar, 
  ChevronRight,
  Star,
  Menu,
  X
} from "lucide-react";

const IMAGES = [
  "https://iili.io/BZAztUv.md.jpg",
  "https://iili.io/BZAzQfa.md.jpg",
  "https://iili.io/BZAzZ0J.md.jpg",
  "https://iili.io/BZAzsig.md.jpg",
  "https://iili.io/BZAzpON.md.jpg",
  "https://iili.io/BZAzybI.md.jpg",
  "https://iili.io/BZAIHxt.md.jpg",
  "https://iili.io/BZAIJWX.md.jpg",
  "https://iili.io/BZAIdsn.md.jpg",
  "https://iili.io/BZAI3fs.md.jpg",
  "https://iili.io/BZAIF0G.md.jpg"
];

const REELS = [
  "https://www.facebook.com/reel/1394598425490920",
  "https://www.facebook.com/reel/1322302286127627",
  "https://www.facebook.com/reel/954127160179469"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const socialLinks = {
    tiktok: "https://www.tiktok.com/@_uromana?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBEwaTJIbjlyTjIyVHZBUlVIYnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7gID9_5e1zzlrDc6I6kXwaI8nKza59cbd6WgJhG1_Af24QxLzTXHhvryo6GA_aem_dx5NKz9zoNpQfnVlEfdUBQ",
    instagram: "https://www.instagram.com/_uromana?fbclid=IwY2xjawRVT8tleHRuA2FlbQIxMABicmlkETBpMkhuOXJOMjJUdkFSVUhic3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgCOEE0aNF6m60iTwXRNGOtmdqbwqskjpwjy6XeRbXC5wJJsxk7R0eKE52Pd_aem_fGULr__WTjzp1Gq2pEbEiQ",
    facebook: "https://www.facebook.com/salabankietowauromana",
    reviews: "https://www.facebook.com/salabankietowauromana/reviews/?id=100063478933037&sk=reviews"
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal selection:bg-gold-light/30">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://iili.io/BZAwW4s.md.jpg" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gold" 
              alt="Logo" 
            />
            <h1 className="font-serif text-xl md:text-2xl tracking-tight uppercase">
              Sala Bankietowa <span className="italic font-normal">u Romana</span>
            </h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em]">
            <a href="#o-nas" className="hover:text-gold transition-colors">O nas</a>
            <a href="#galeria" className="hover:text-gold transition-colors">Galeria</a>
            <a href="#filmy" className="hover:text-gold transition-colors">Filmy</a>
            <a href="#kontakt" className="px-5 py-2 border border-black hover:bg-black hover:text-white transition-all">Kontakt</a>
          </div>

          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-black/5 p-8 flex flex-col gap-6 text-[10px] font-bold uppercase tracking-widest shadow-xl"
          >
            <a href="#o-nas" onClick={() => setIsMenuOpen(false)} className="hover:text-gold py-2">O nas</a>
            <a href="#galeria" onClick={() => setIsMenuOpen(false)} className="hover:text-gold py-2">Galeria</a>
            <a href="#filmy" onClick={() => setIsMenuOpen(false)} className="hover:text-gold py-2">Filmy</a>
            <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="bg-charcoal text-white p-4 text-center">Kontakt</a>
          </motion.div>
        )}
      </nav>

      {/* Main Hero Grid Layout */}
      <main className="max-w-[1400px] mx-auto min-h-[calc(100vh-96px)] grid grid-cols-1 lg:grid-cols-12 border-x border-black/5">
        
        {/* Sidebar content */}
        <div className="lg:col-span-4 p-8 md:p-12 lg:p-14 flex flex-col justify-between bg-white border-b lg:border-b-0 lg:border-r border-black/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] mb-8">
              Wyjątkowe <br/><span className="italic font-normal">miejsce</span> na Twoją uroczystość
            </h2>
            <p className="font-sans text-sm md:text-base leading-relaxed text-stone-500 mb-10 max-w-[320px]">
              Elegancka sala bankietowa mieszcząca <span className="font-semibold text-charcoal">160 osób</span>. Idealna przestrzeń na wesela, komunie i imprezy okolicznościowe w sercu Woźnik.
            </p>
            
            <div className="space-y-5 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gold/10 rounded flex items-center justify-center mt-0.5 text-gold">
                  <MapPin size={14} />
                </div>
                <p className="text-xs font-sans text-stone-500 uppercase tracking-widest leading-loose">
                  Cegielniana 1, <br/>42-289 Woźniki
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-gold/10 rounded flex items-center justify-center text-gold">
                  <Phone size={14} />
                </div>
                <a href="tel:343521400" className="text-xs font-sans text-stone-500 font-bold tracking-[0.2em] hover:text-gold transition-colors">
                  34 352 14 00
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Facebook size={16} />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Instagram size={16} />
              </a>
              <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Music2 size={16} />
              </a>
            </div>
          </motion.div>

          <div className="mt-16 pt-10 border-t border-black/5">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-5 text-gold">Opinie Gości</p>
            <a href={socialLinks.reviews} target="_blank" rel="noreferrer" className="group block">
              <p className="italic text-base text-stone-600 mb-3 leading-snug">
                "Przepiękna sala, obsługa na najwyższym poziomie, jedzenie wyśmienite. Gorąco polecam każdemu!"
              </p>
              <span className="text-[10px] uppercase font-bold tracking-widest group-hover:underline inline-flex items-center gap-2">
                Zobacz więcej na FB <ChevronRight size={10} />
              </span>
            </a>
          </div>
        </div>

        {/* Home/Visual content area */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Top image grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 h-auto lg:h-1/2">
            {[IMAGES[3], IMAGES[0], IMAGES[5]].map((img, i) => (
              <div key={i} className="relative aspect-square lg:aspect-auto overflow-hidden group bg-stone-200 border-b lg:border-b-0 border-black/5 last:col-span-2 md:last:col-span-1">
                <motion.img 
                  src={img} 
                  initial={{ filter: "grayscale(100%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 scale-[1.01]"
                  alt={`Hero ${i}`}
                />
              </div>
            ))}
          </div>
          
          {/* Bottom split: Map and Call to Action */}
          <div className="grid grid-cols-1 md:grid-cols-2 h-auto lg:h-1/2 min-h-[400px]">
             <div className="relative border-t lg:border-t-0 border-black/5 min-h-[300px] md:min-h-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.299752944498!2d19.046325212792738!3d50.58438167149968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710d2db6690047d%3A0xce3d1a503c7fcf9a!2sSala%20Bankietowa%20%22u%20Romana%22!5e0!3m2!1spl!2spl!4v1776840950372!5m2!1spl!2spl" 
                  className="w-full h-full grayscale contrast-125 saturate-50 brightness-110 aspect-[4/3] md:aspect-auto"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-6 left-6 bg-white px-4 py-2 text-[10px] uppercase font-bold tracking-[0.3em] shadow-sm">
                  Lokalizacja
                </div>
             </div>
             <div className="p-12 md:p-16 flex flex-col justify-center bg-stone-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full"></div>
                <h3 className="font-serif text-3xl md:text-4xl mb-6 italic font-normal">Elegancja w każdym detalu</h3>
                <div className="space-y-4 mb-8">
                  <p className="text-xs uppercase tracking-[0.4em] text-stone-400 leading-loose flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Wesela • Komunie • Chrzciny
                  </p>
                  <p className="text-xs uppercase tracking-[0.4em] text-stone-400 leading-loose flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Imprezy Firmowe • Jubileusze
                  </p>
                  <p className="text-xs uppercase tracking-[0.4em] text-stone-400 leading-loose flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Przyjęcia Okolicznościowe
                  </p>
                </div>
                <div className="h-px w-16 bg-gold mb-8"></div>
                <p className="text-[10px] font-medium text-gold uppercase tracking-[0.5em] animate-pulse">
                  Rezerwacja terminów 2026/2027
                </p>
             </div>
          </div>
        </div>
      </main>

      {/* Features - Minimalist style */}
      <section id="o-nas" className="py-32 bg-white border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid md:grid-cols-3 gap-0 border border-black/5">
            {[
              { label: "01", title: "Pojemność", value: "160 Osób", desc: "Przestronne wnętrze idealne na duże wesela." },
              { label: "02", title: "Atmosfera", value: "Elegancja", desc: "Artyzm połączony z klasycznym szykiem." },
              { label: "03", title: "Podniebienie", value: "Tradycja", desc: "Wyśmienita kuchnia polska w nowoczesnym wydaniu." }
            ].map((item, i) => (
              <div key={i} className={`p-16 ${i !== 2 ? 'md:border-r border-black/5' : ''} group hover:bg-cream transition-colors duration-500`}>
                <span className="block text-[10px] font-bold text-gold tracking-[0.4em] mb-6">{item.label}</span>
                <h4 className="font-serif text-3xl mb-4 italic">{item.value}</h4>
                <p className="text-stone-400 text-sm tracking-wide leading-relaxed uppercase">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Artistic Grid */}
      <section id="galeria" className="py-32 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="font-serif text-5xl md:text-6xl tracking-tight">Galeria <br/><span className="italic font-normal">Wspomnień</span></h2>
            <div className="h-px flex-1 mx-12 mb-4 bg-black/5 hidden md:block"></div>
            <p className="text-stone-400 uppercase tracking-[0.3em] text-[10px] font-bold">Inspiracje i Realizacje</p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {IMAGES.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="relative group overflow-hidden bg-white p-2 md:p-3 shadow-sm border border-black/5"
              >
                <motion.img 
                  src={img} 
                  initial={{ filter: "grayscale(100%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105" 
                  alt={`Galeria ${i}`}
                />
                <div className="absolute inset-x-2 md:inset-x-3 bottom-2 md:bottom-3 p-4 bg-white/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-bold tracking-widest uppercase">Sala u Romana • Woźniki</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reels - Integrated into artistic theme */}
      <section id="filmy" className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-20">
             <span className="text-gold tracking-[0.5em] text-[10px] font-bold uppercase block mb-4">Relacje Video</span>
             <h2 className="font-serif text-4xl md:text-5xl italic font-normal">Artystyczna perspektywa</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {REELS.map((reel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative block aspect-[9/16] border border-black/5 bg-stone-50 overflow-hidden shadow-2xl"
              >
                <iframe 
                  src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(reel)}&show_text=0&t=0`} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 'none', overflow: 'hidden' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
                <div className="absolute inset-0 border-[15px] border-white pointer-events-none opacity-50"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 bg-white border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-5xl md:text-6xl tracking-tight mb-12">
                Zostańmy <br/><span className="italic font-normal text-gold">w kontakcie</span>
              </h2>
              
              <div className="space-y-12">
                <div className="group cursor-default">
                  <span className="block text-[10px] font-bold text-gold tracking-[0.4em] mb-4 uppercase">Adres</span>
                  <p className="text-2xl font-serif italic text-charcoal mb-2">Cegielniana 1, Woźniki</p>
                  <p className="text-sm text-stone-400 uppercase tracking-widest">42-289, Województwo Śląskie</p>
                </div>

                <div className="group">
                  <span className="block text-[10px] font-bold text-gold tracking-[0.4em] mb-4 uppercase">Telefon</span>
                  <a href="tel:343521400" className="text-3xl font-serif text-charcoal hover:text-gold transition-colors inline-block">
                    34 352 14 00
                  </a>
                </div>

                <div className="group">
                  <span className="block text-[10px] font-bold text-gold tracking-[0.4em] mb-4 uppercase">Napisz do nas</span>
                  <a href="mailto:audi2@o2.pl" className="text-2xl font-serif text-charcoal hover:text-gold transition-colors inline-block">
                    audi2@o2.pl
                  </a>
                </div>

                <div className="pt-8 flex gap-6">
                  <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest hover:text-gold transition-colors">
                    <Facebook size={14} /> Facebook
                  </a>
                  <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest hover:text-gold transition-colors">
                    <Instagram size={14} /> Instagram
                  </a>
                  <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest hover:text-gold transition-colors">
                    <Music2 size={14} /> TikTok
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 h-[600px] bg-stone-100 relative group overflow-hidden border border-black/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.299752944498!2d19.046325212792738!3d50.58438167149968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710d2db6690047d%3A0xce3d1a503c7fcf9a!2sSala%20Bankietowa%20%22u%20Romana%22!5e0!3m2!1spl!2spl!4v1776840950372!5m2!1spl!2spl" 
                className="w-full h-full grayscale contrast-125 saturate-50 brightness-110"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-8 right-8 bg-white border border-black/5 px-6 py-4 shadow-xl shadow-black/5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-1">Odwiedź nas</p>
                <p className="text-xs font-medium text-charcoal">Zapraszamy na prezentację sali</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-10 py-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-x border-black/5">
          <div className="space-y-6">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Lokalizacja</h5>
            <p className="text-sm text-stone-500 leading-loose">
              Ul. Cegielniana 1<br/>
              42-289 Woźniki, PL
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Kontakt</h5>
            <p className="text-sm text-stone-500 leading-loose">
              T: 34 352 14 00<br/>
              E: audi2@o2.pl
            </p>
          </div>
          <div className="space-y-6 text-left">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Social</h5>
            <div className="flex gap-4">
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-black transition-colors uppercase text-[10px] font-bold tracking-widest">Facebook</a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-black transition-colors uppercase text-[10px] font-bold tracking-widest">Instagram</a>
              <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-black transition-colors uppercase text-[10px] font-bold tracking-widest">TikTok</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-10 py-10 border-t border-black/5 border-x text-center">
           <p className="text-[9px] uppercase tracking-[0.5em] text-stone-400">
             © {new Date().getFullYear()} Sala Bankietowa u Romana • Woźniki
           </p>
        </div>
      </footer>
    </div>
  );
}
