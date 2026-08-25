import { motion } from "framer-motion";

interface PageHeroProps {
  heading: string;
  subtext: string;
}

const WORD_STAGGER = 0.045;

export default function PageHero({ heading, subtext }: PageHeroProps) {
  const headingWords = heading.split(" ");
  const headingEnd = headingWords.length * WORD_STAGGER;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Scarlet ambient glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] max-w-full rounded-full bg-primary/10 blur-[130px] pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-text mb-6">
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * WORD_STAGGER,
                ease: "easeOut",
              }}
              className={`inline-block ${
                i === headingWords.length - 1 ? "" : "mr-[0.3em]"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Scarlet accent rule */}
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.4,
            delay: headingEnd + 0.1,
            ease: "easeOut",
          }}
          className="w-16 h-[3px] bg-primary rounded-full mx-auto mb-6 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: headingEnd,
            ease: "easeOut",
          }}
          className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
        >
          {subtext}
        </motion.p>
      </div>
    </section>
  );
}
