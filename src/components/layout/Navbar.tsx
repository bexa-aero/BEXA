import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, CaretDown } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, PROJECTS } from "@/lib/constants";
import bexaMark from "@/assets/bexa-mark.png";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setProjectsOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    if (!projectsOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProjectsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [projectsOpen]);

  const isProjectsActive = location.pathname.startsWith("/projects");

  const renderLink = (link: (typeof NAV_LINKS)[number]) => {
    const isActive = location.pathname === link.href;
    return (
      <Link
        key={link.href}
        to={link.href}
        aria-current={isActive ? "page" : undefined}
        className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
          isActive ? "text-text" : "text-muted hover:text-text"
        }`}
      >
        {link.label}
        {isActive && (
          <span
            aria-hidden="true"
            className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full"
          />
        )}
      </Link>
    );
  };

  const visibleLinks = NAV_LINKS.filter((l) => !l.hidden);
  const beforeProjects = visibleLinks.filter((l) =>
    ["/", "/teams", "/efforts"].includes(l.href)
  );
  const afterProjects = visibleLinks.filter(
    (l) => !["/", "/teams", "/efforts"].includes(l.href)
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-200 ease-out ${
          scrolled
            ? "bg-bg/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto w-full px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center gap-1">
            <img
              src={bexaMark}
              alt="BExA logo"
              width={110}
              height={28}
              className="h-7 w-auto"
            />
            {/* Wordmark rendered as text so it stays white and legible on the dark header */}
            <span className="font-heading text-[9px] font-semibold uppercase tracking-[0.2em] text-text leading-none whitespace-nowrap">
              Buckeye Experimental Aeronautics
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {beforeProjects.map(renderLink)}

            {/* Projects dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={projectsOpen}
                aria-haspopup="menu"
                onClick={() => setProjectsOpen((o) => !o)}
                className={`relative py-1 inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isProjectsActive || projectsOpen
                    ? "text-text"
                    : "text-muted hover:text-text"
                }`}
              >
                Projects
                <CaretDown
                  size={12}
                  weight="bold"
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${
                    projectsOpen ? "rotate-180" : ""
                  }`}
                />
                {isProjectsActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>

              <AnimatePresence>
                {projectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    style={{ x: "-50%" }}
                    role="menu"
                    className="absolute top-full left-1/2 mt-3 w-64 rounded-lg bg-surface border border-border shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-1.5"
                  >
                    {PROJECTS.map((project) => (
                      <Link
                        key={project.slug}
                        to={`/projects/${project.slug}`}
                        role="menuitem"
                        className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-md text-sm text-muted hover:text-text hover:bg-white/5 transition-colors"
                      >
                        {project.name}
                        <span
                          className={`shrink-0 px-1.5 py-0.5 rounded-sm text-[10px] font-medium uppercase tracking-wider ${
                            project.status === "In Development"
                              ? "bg-success/10 text-success"
                              : "bg-neutral/10 text-neutral"
                          }`}
                        >
                          {project.status === "In Development"
                            ? "Active"
                            : "Planned"}
                        </span>
                      </Link>
                    ))}
                    <div className="px-3 py-2 border-t border-border mt-1">
                      <span className="text-xs text-muted italic">
                        More projects coming soon
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {afterProjects.map(renderLink)}
          </div>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/join"
              className="hidden md:inline-flex h-9 px-4 items-center justify-center rounded-md bg-primary text-white text-sm font-medium transition-colors hover:bg-primary/90"
            >
              Join BExA
            </Link>
            <button
              type="button"
              className="md:hidden p-2 text-text"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <List size={24} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
