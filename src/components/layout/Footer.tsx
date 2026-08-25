import { Link } from "react-router-dom";
import {
  LinkedinLogo,
  InstagramLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import {
  NAV_LINKS,
  LEADERSHIP,
  CONTACT_EMAIL,
  SOCIAL_LINKS,
} from "@/lib/constants";
import bexaMark from "@/assets/bexa-mark.png";
// .jpg, not .jfif: hosts serve .jfif as application/octet-stream, which
// Safari refuses to render as an image.
import headshotViktor from "@/assets/headshot-viktor.jpg";
import headshotSam from "@/assets/headshot-sam.jpg";
import headshotQuinn from "@/assets/headshot-quinn.jpg";

const HEADSHOTS: Record<string, string> = {
  "Viktor Bakhurynskyy": headshotViktor,
  "Sam Patterson": headshotSam,
  "Quinn Cohen": headshotQuinn,
};

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Column 1: Logo + Tagline + Leadership + Social */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex flex-col items-start gap-1.5 self-start">
              <img
                src={bexaMark}
                alt="BExA logo"
                width={165}
                height={42}
                loading="lazy"
                decoding="async"
                className="h-10 w-auto"
              />
              <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-text leading-none">
                Buckeye Experimental Aeronautics
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Building the next generation of engineers.
            </p>

            {/* Leadership */}
            <div className="mt-2">
              <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                Leadership
              </h4>
              <ul className="space-y-2">
                {LEADERSHIP.map((member) => (
                  <li key={member.name} className="flex items-center gap-2 text-xs text-muted">
                    {HEADSHOTS[member.name] && (
                      <img
                        src={HEADSHOTS[member.name]}
                        alt={member.name}
                        width={56}
                        height={56}
                        loading="lazy"
                        decoding="async"
                        className="w-14 h-14 rounded-full object-cover border border-border"
                      />
                    )}
                    <span>
                      {member.linkedin ? (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text/80 hover:text-primary transition-colors"
                        >
                          {member.name}
                        </a>
                      ) : (
                        <span className="text-text/80">{member.name}</span>
                      )}
                      , {member.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social icons: padded to a 44px tap target, pulled flush left */}
            <div className="flex items-center mt-2 -ml-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted hover:text-text transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} weight="duotone" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted hover:text-text transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={20} weight="duotone" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="p-3 text-muted hover:text-text transition-colors"
                aria-label="Email"
              >
                <EnvelopeSimple size={20} weight="duotone" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.filter((l) => !l.hidden).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="inline-block py-1.5 text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <p className="text-xs text-muted text-center">
            &copy; {new Date().getFullYear()} Buckeye Experimental Aeronautics.
            All rights reserved.
          </p>
          <p className="text-xs text-muted/80 text-center mt-1">
            Website design and maintenance by{" "}
            <a
              href="https://www.linkedin.com/in/jackschwendeman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/70 hover:text-primary transition-colors"
            >
              Jack Schwendeman
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
