/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
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
  Star
} from "lucide-react";

const IMAGES = [
  "https://scontent-waw2-2.xx.fbcdn.net/v/t51.82787-15/588205910_18333192532300056_1402526639891845763_n.jpg?stp=dst-jpegr_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=WqfV1CXLS8sQ7kNvwHA95rN&_nc_oc=Adr1g2H7oqdvlwxULOcLJE2I8lOlL0Hj2Xt7HDG3XWhNcPeMNW3kzf2L3S47jm8XVkI&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=rDsSnDcU_KAQXtHrbo8MsQ&_nc_ss=7a3a8&oh=00_Af2THaovIEkLd82FP_wPKwmLiPoGQW2Z4Zh4iZds8wNINg&oe=69EE57CD",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t51.82787-15/590870341_18333192556300056_909553236966355963_n.jpg?stp=dst-jpegr_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=JAcKK-3oDocQ7kNvwEJmsO7&_nc_oc=AdpgIpms3hzY3kKHuoEnVNg16CTnZCLM79kueg9mHoPjRRU1VkGwQsbrGuhkyZmUXBA&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-1.xx&_nc_gid=ylNTiDemiD-1MbocS9Pd0g&_nc_ss=7a3a8&oh=00_Af3JPC67-VsY15yXh6KNWSpPWkwdpLDSTzhoC_K0ZCV1GQ&oe=69EE3293",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/534452157_1350669303725688_256292278279285732_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=5Ag7HUqKNv0Q7kNvwHKovKL&_nc_oc=AdrhpalGlWhBla2h7vKIhXHCfLbMgOXp0VVa6Rl3Zj36ffIagwuuntSYXWrU4K7bIzY&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=TaC7nGgUgI5jYar_o1ZTFg&_nc_ss=7a3a8&oh=00_Af0tILEbC0jXPmAzIOhFVUjDiUD3zKeaETFGlXQkPmpXnA&oe=69EE4B53",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/536132268_1350669260392359_3960099269995837992_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=HFh6kCqePJ0Q7kNvwGYRgzK&_nc_oc=AdpzvQ-DfKKZi82_0TnE2vIvPsB47CYd6x2Ww3eFgPgawD7h3VSMQ0gpgO-hyQdKiDc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=o-cIeGifES13Zeb4rAfggQ&_nc_ss=7a3a8&oh=00_Af3zUXV8ZKpm91wDsWpeAofJyRxuDDRgaV3PWKefuw5Uig&oe=69EE5A7A",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t51.75761-15/476999255_18295686490300056_8047921598735495050_n.jpg?stp=dst-jpegr_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=yf3sP3iEZWEQ7kNvwFfQZH4&_nc_oc=AdoUsIeYzqnocvZ02J-CmvatHVvGGl7rNMOkn9JKBuDIj6WCoYAHrQg83q6gGKbjQWQ&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=MfrS5BBygmPLiMel3hdewA&_nc_ss=7a3a8&oh=00_Af2SHtVja-uGlck7aaTP7IYxICzi5mjRT5SDdVwgYhEB7Q&oe=69EE4061",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/485765351_1212880427504577_5230304127349910161_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=b895b5&_nc_ohc=MpMD-JqM1-8Q7kNvwHyxOKU&_nc_oc=AdpO3248nzDOXHG1z6e697lA2_Qbj7Gea_HvFituRik7zupZstd7SvuonaLCSmCTfp0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=fNHAzwDr3XbV5ToLLXsCmg&_nc_ss=7a3a8&oh=00_Af0Zwaev8PzF6FxrhlbpmmsD0Znz0C_Pr4Sj89S6ijYF3g&oe=69EE37EF",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t1.6435-9/162853992_2950404355282206_5786862904603253542_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ExOuqTwa404Q7kNvwFb6TgS&_nc_oc=AdqU3C5AgZVeJsbE5oFPI-G0KVR52phuyfHp0xsmt-L_poLUAx4DySlVvLbturCSqg0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=cdEOV-9Eb5v5e5Kbt-nuhQ&_nc_ss=7a3a8&oh=00_Af2ZMORyBndQJoXLejH2btXBNIeULVerWEHunrH6-K5bhg&oe=6A0FE04D",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t1.6435-9/123718785_2843885715934071_235369433209316663_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=ymyv5FsdOF8Q7kNvwGXcfv5&_nc_oc=AdolRsv0GF9Gat2HrIYJ3kPFJRaXFPhLa_G-LwXVrH2yowUvz1_S3yC_sN74Gq13B7w&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=pRT5DDMSm4yIQu1WZ2dlOg&_nc_ss=7a3a8&oh=00_Af3uHyAUS7B_E1xQBwvTOUwvbN6bzVKTKhrk4t9ddd-HTg&oe=6A0FD7E5",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t1.6435-9/141470209_2908767009445941_7135102122294129464_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=06a7ca&_nc_ohc=IOTVEIZPiFsQ7kNvwEhZm-3&_nc_oc=AdrZ21qC7TqEKsXS4EofKYOK-Phy5RKy7-EiiEKHGxXv4VAyrel6h2mbxHM0iuxd4yc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=o7161hMinR6GcxSpmZkTGA&_nc_ss=7a3a8&oh=00_Af00kzCMpBHhFrjwzP0po7vFT1UxDSdKmzjPWrEHdrRG5Q&oe=6A0FF693"
];

const REELS = [
  "https://www.facebook.com/reel/1394598425490920",
  "https://www.facebook.com/reel/1322302286127627",
  "https://www.facebook.com/reel/954127160179469"
];

export default function App() {
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
              src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/583887942_1436637161795568_4997951726368584406_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=Uxmue95JEG8Q7kNvwG9wDQc&_nc_oc=AdrSWlQJ7BcAvR5_Ji3NPM3QvWeKNB7QgrQsiCfo8eoWrYqV21TK_7y4Pyw-H_5m94U&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-1.xx&_nc_gid=j_spm-z9sanWaT7bk2hHPQ&_nc_ss=7a3a8&oh=00_Af0YcG6EZ7MR8Erq_PwZd2C7cQfvl0ka9hSxk1rfIT6J7g&oe=69EE45E8" 
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
        </div>
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
          <div className="grid grid-cols-2 md:grid-cols-3 h-auto md:h-1/2">
            {[IMAGES[3], IMAGES[0], IMAGES[5]].map((img, i) => (
              <div key={i} className="relative aspect-square md:aspect-auto overflow-hidden group">
                <img 
                  src={img} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  alt={`Hero ${i}`}
                />
                <div className="absolute inset-0 border-[0.5px] border-black/5 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
          {/* Bottom split: Map and Call to Action */}
          <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-1/2 min-h-[400px]">
             <div className="relative border-t border-black/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.299752944498!2d19.046325212792738!3d50.58438167149968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710d2db6690047d%3A0xce3d1a503c7fcf9a!2sSala%20Bankietowa%20%22u%20Romana%22!5e0!3m2!1spl!2spl!4v1776840950372!5m2!1spl!2spl" 
                  className="w-full h-full grayscale contrast-125 saturate-50"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-6 left-6 bg-white px-4 py-2 text-[10px] uppercase font-bold tracking-[0.3em] shadow-sm">
                  Strona Główna Woźnik
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
                  Rezerwacja terminów 2024/2025
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
                <img 
                  src={img} 
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
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

      {/* Final Contact / Footer */}
      <footer id="kontakt" className="bg-white border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-10 py-24 grid md:grid-cols-3 gap-12 border-x border-black/5">
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
          <div className="space-y-6 text-right md:text-left">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Social</h5>
            <div className="flex gap-4">
              <a href={socialLinks.facebook} className="text-stone-400 hover:text-black transition-colors uppercase text-[10px] font-bold tracking-widest">Facebook</a>
              <a href={socialLinks.instagram} className="text-stone-400 hover:text-black transition-colors uppercase text-[10px] font-bold tracking-widest">Instagram</a>
              <a href={socialLinks.tiktok} className="text-stone-400 hover:text-black transition-colors uppercase text-[10px] font-bold tracking-widest">TikTok</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-10 py-10 border-t border-black/5 border-x text-center">
           <p className="text-[9px] uppercase tracking-[0.5em] text-stone-400">
             © {new Date().getFullYear()} Sala Bankietowa u Romana • Est. Woźniki
           </p>
        </div>
      </footer>
    </div>
  );
}
