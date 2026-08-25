import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface JetStreakProps {
  /** Direction the jet travels as the divider scrolls through the viewport */
  direction?: "ltr" | "rtl";
}

/** Small delta-wing vehicle with a centerline turbojet, drawn nose-right */
function DeltaJet({ flipped }: { flipped: boolean }) {
  return (
    <svg
      width="44"
      height="20"
      viewBox="0 0 44 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-[0_0_10px_rgba(187,0,0,0.7)] ${
        flipped ? "-scale-x-100" : ""
      }`}
    >
      {/* Delta airframe */}
      <path d="M42 10 L12 2.5 L17.5 10 L12 17.5 Z" fill="#d8d8de" />
      {/* Canopy hint */}
      <path d="M33 8.9 L27 7.6 L27 9.4 Z" fill="#0d0d0f" opacity="0.55" />
      {/* Centerline turbojet nozzle */}
      <path d="M17 8.3 L9 8.3 L10.6 10 L9 11.7 L17 11.7 Z" fill="#BB0000" />
      {/* Exhaust flame */}
      <path d="M9.6 9 L3 10 L9.6 11 Z" fill="#ff5533" />
      <circle cx="8.6" cy="10" r="1.6" fill="#ffb199" opacity="0.9" />
    </svg>
  );
}

/**
 * Decorative scroll-linked divider: a jet streaks across the page
 * leaving a scarlet exhaust trail, driven by scroll position (not time),
 * so it dashes exactly as fast as the user scrolls.
 */
export default function JetStreak({ direction = "ltr" }: JetStreakProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ltr = direction === "ltr";
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ltr ? ["-45vw", "102vw"] : ["102vw", "-45vw"]
  );

  // Static divider for users who prefer reduced motion
  if (reduced) {
    return (
      <div
        aria-hidden="true"
        className="h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent"
      />
    );
  }

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative h-16 md:h-20 overflow-hidden pointer-events-none"
    >
      <motion.div
        style={{ x, y: "-50%" }}
        className={`absolute top-1/2 left-0 flex items-center ${
          ltr ? "" : "flex-row-reverse"
        }`}
      >
        {/* Jet trail: soft outer glow */}
        <div className="relative h-[10px] w-[38vw] flex items-center">
          <div
            className={`absolute inset-y-0 inset-x-0 ${
              ltr ? "bg-gradient-to-r" : "bg-gradient-to-l"
            } from-transparent via-primary/10 to-primary/30 blur-[3px]`}
          />
          {/* Main trail */}
          <div
            className={`relative h-[2px] w-full rounded-full ${
              ltr ? "bg-gradient-to-r" : "bg-gradient-to-l"
            } from-transparent via-primary/50 to-primary`}
          />
          {/* Hot core right behind the nozzle */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 h-px w-[7vw] ${
              ltr
                ? "right-0 bg-gradient-to-r from-transparent to-[#ff6644]"
                : "left-0 bg-gradient-to-l from-transparent to-[#ff6644]"
            }`}
          />
        </div>
        <DeltaJet flipped={!ltr} />
      </motion.div>
    </div>
  );
}
