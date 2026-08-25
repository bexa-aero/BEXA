import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bexaMark from "@/assets/bexa-mark.png";

const headlineWords1 = "We are building more than aircraft.".split(" ");
const headlineWords2 =
  "We are building the next generation of engineers.".split(" ");

// Words that receive the scarlet accent + underline draw
const ACCENT_WORDS = new Set(["next", "generation"]);

const WORD_STAGGER = 0.045;
const WORDS_START = 0.25;
const headlineEnd =
  WORDS_START + (headlineWords1.length + headlineWords2.length) * WORD_STAGGER;

export default function HeroSection() {
  const totalWords1 = headlineWords1.length;

  const wordClass = (isLast: boolean) =>
    `inline-block ${isLast ? "" : "mr-[0.3em]"}`;

  return (
    <section className="hero-viewport relative flex items-center justify-center overflow-hidden">
      {/* CSS Dot Grid Background, faded toward the edges */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 100%)",
        }}
      />

      {/* Scarlet ambient glow behind the headline */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] max-w-full rounded-full bg-primary/15 blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        {/* Logo */}
        <motion.img
          src={bexaMark}
          alt="BExA logo"
          width={80}
          height={80}
          className="h-20 w-auto mx-auto mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Full name: the version baked into the logo art is too dark to read */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="font-heading text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-text mb-6"
        >
          Buckeye Experimental Aeronautics
        </motion.p>

        {/* Pre-headline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-white/5 border border-white/10 text-xs font-medium text-muted tracking-wider uppercase mb-8"
        >
          College of Engineering
        </motion.div>

        {/* Headline - Word by Word Reveal */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="block">
            {headlineWords1.map((word, i) => (
              <motion.span
                key={`l1-${i}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: WORDS_START + i * WORD_STAGGER,
                  ease: "easeOut",
                }}
                className={wordClass(i === headlineWords1.length - 1)}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block mt-1">
            {headlineWords2.map((word, i) => {
              const isAccent = ACCENT_WORDS.has(word);
              const isLast = i === headlineWords2.length - 1;
              return (
                <motion.span
                  key={`l2-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: WORDS_START + (totalWords1 + i) * WORD_STAGGER,
                    ease: "easeOut",
                  }}
                  className={`${wordClass(isLast)} ${
                    isAccent ? "relative text-primary" : ""
                  }`}
                >
                  {word}
                  {isAccent && (
                    <motion.span
                      aria-hidden="true"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: headlineEnd + 0.15,
                        ease: "easeOut",
                      }}
                      className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary origin-left rounded-full"
                    />
                  )}
                </motion.span>
              );
            })}
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: headlineEnd - 0.15,
            ease: "easeOut",
          }}
          className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Six engineering teams. Three prototypes. Current Goal: the Guinness
          World Record for the fastest unmanned aircraft, built entirely by
          students.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: headlineEnd,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/join"
            className="inline-flex h-11 px-6 items-center justify-center rounded-md bg-primary text-white text-sm font-medium transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(187,0,0,0.3)] active:scale-[0.98]"
          >
            Join BExA
          </Link>
          <Link
            to="/sponsor"
            className="inline-flex h-11 px-6 items-center justify-center rounded-md border border-primary text-white text-sm font-medium transition-all hover:bg-primary/10 active:scale-[0.98]"
          >
            Become a Sponsor
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
