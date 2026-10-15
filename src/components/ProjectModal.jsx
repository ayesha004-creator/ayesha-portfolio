import { useEffect, useRef } from "react";
import { X } from "lucide-react";

const sections = [
  ["Problem", "problem"],
  ["What I Did", "whatIDid"],
  ["Tools Used", "tools"],
  ["Result", "result"],
];

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    // Escape closes; the close button is the only focusable element, so Tab stays on it
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") { e.preventDefault(); closeRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-navy/70 sm:items-center sm:p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-t-xl bg-white p-6 shadow-2xl dark:bg-card sm:rounded-xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 id="modal-title" className="text-2xl font-bold">{project.title}</h2>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close project details" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 space-y-5">
          {sections.map(([label, key]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-brand dark:text-sky-accent">{label}</h3>
              <p className="mt-1">{project.details[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
