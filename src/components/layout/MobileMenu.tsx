import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, PROJECTS } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface border-l border-border flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="text-sm font-semibold font-heading text-text">
                Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-muted hover:text-text transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col p-4 gap-1 overflow-y-auto">
              {NAV_LINKS.filter((l) => !l.hidden).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onClose}
                  className="px-4 py-3 rounded-md text-sm font-medium text-muted hover:text-text hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Projects group */}
              <div className="mt-2 pt-3 border-t border-border">
                <span className="block px-4 pb-1 text-xs font-semibold text-muted uppercase tracking-wider">
                  Projects
                </span>
                {PROJECTS.map((project) => (
                  <Link
                    key={project.slug}
                    to={`/projects/${project.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between gap-2 px-4 py-3 rounded-md text-sm font-medium text-muted hover:text-text hover:bg-white/5 transition-colors"
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
              </div>
            </nav>

            <div className="mt-auto p-4 border-t border-border">
              <Link
                to="/join"
                onClick={onClose}
                className="flex items-center justify-center h-10 rounded-md bg-primary text-white text-sm font-medium transition-colors hover:bg-primary/90"
              >
                Join BExA
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
