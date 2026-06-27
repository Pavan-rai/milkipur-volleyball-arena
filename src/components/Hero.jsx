import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";

const SLIDES = [gallery1, gallery2, gallery3];
const SLIDE_DURATION = 5000; // ms per slide

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [current]);

  const stats = [
    { icon: "🏆", value: "500+", label: "Matches Played" },
    { icon: "👥", value: "200+", label: "Active Players" },
    { icon: "🏐", value: "25+", label: "Tournaments" },
    { icon: "❤️", value: "100%", label: "Community Love" },
  ];

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section id="home" className="relative min-h-screen overflow-hidden">

        {/* ── SLIDESHOW BACKGROUNDS ── */}
        {/* Previous slide (fades out) */}
        {prev !== null && (
          <motion.div
            key={`prev-${prev}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${SLIDES[prev]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        )}

        {/* Current slide (fades in + subtle Ken Burns) */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`slide-${current}`}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.06 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: SLIDE_DURATION / 1000 + 1.2, ease: "linear" },
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${SLIDES[current]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </AnimatePresence>

        {/* Dark Overlay — heavier on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-black/25" />

        {/* Green Glow Orb */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-green-500 blur-[160px] pointer-events-none"
        />

        {/* Floating Particles */}
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.9, 0.15], y: [-18, 18, -18] }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-green-300 pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* ── HERO CONTENT ── */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-24 pb-10 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[4px] text-green-400 sm:text-sm"
            >
              <span className="h-px w-8 bg-green-400" />
              Welcome To
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl font-black uppercase leading-none text-white sm:text-6xl lg:text-8xl"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
            >
              Milkipur
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-1 text-3xl font-black uppercase text-green-400 sm:text-4xl lg:text-6xl"
            >
              Volleyball Arena
            </motion.h2>

            {/* Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 0.8, duration: 0.9 }}
              className="mt-5 h-[3px] rounded-full bg-green-400"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 max-w-lg text-sm leading-7 text-gray-300 sm:text-base sm:leading-8"
            >
              Where passion meets the court and teamwork creates champions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-md bg-green-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-green-400 hover:scale-105 active:scale-100 sm:px-7 sm:py-3.5"
              >
                Explore Ground <span aria-hidden>→</span>
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-100 sm:px-7 sm:py-3.5"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/60 text-xs">▶</span>
                View Gallery
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ── SLIDE DOTS ── */}
        <div className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPrev(current); setCurrent(i); }}
              aria-label={`Go to slide ${i + 1}`}
              className="relative h-2 overflow-hidden rounded-full transition-all duration-300 focus:outline-none"
              style={{ width: i === current ? 28 : 8, background: "rgba(255,255,255,0.35)" }}
            >
              {i === current && (
                <motion.span
                  key={`fill-${current}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  className="absolute inset-0 origin-left rounded-full bg-green-400"
                />
              )}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[4px] text-white/70">Scroll</span>
            <div className="flex h-10 w-6 justify-center rounded-full border border-white/50">
              <div className="mt-2 h-2.5 w-0.5 rounded-full bg-white/80" />
            </div>
          </div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-zinc-950 px-5 py-1 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-y divide-white/10 rounded-xl border border-white/10 bg-zinc-900 sm:grid-cols-4 sm:divide-y-0"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-5 sm:px-6 sm:py-6"
            >
              <span className="text-2xl">{s.icon}</span>
              <div>
                <p className="text-xl font-black text-green-400 sm:text-2xl">{s.value}</p>
                <p className="text-xs text-gray-400 sm:text-sm">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── MISSION SECTION ── */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20">

        {/* Volleyball silhouettes — decorative */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none text-8xl opacity-10 sm:text-[120px]"
          style={{ color: "#22c55e" }}
        >
          🏐
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-8xl opacity-10 sm:text-[120px]"
          style={{ color: "#22c55e" }}
        >
          🏐
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[5px] text-green-500">
            Our Mission
          </p>
          <h2 className="text-3xl font-black uppercase leading-tight text-black sm:text-4xl lg:text-5xl">
            We Play. We Train.{" "}
            <span className="text-green-500">We Win.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Milkipur Volleyball Arena is more than just a ground — it's a family.
            A place where every player grows, every match inspires, and every
            victory is celebrated together.
          </p>
        </motion.div>
      </section>
    </>
  );
}