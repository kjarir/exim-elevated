import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { company } from "@/data/site";

export function FloatingWidgets() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp Green Floating Button matching Screenshot */}
      <a
        href={`https://wa.me/919898789831?text=Hi%20Horizon%20Exim,%20I%20am%20interested%20in%20importing%20agri-commodities.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          stroke="currentColor"
          strokeWidth="0"
          fill="currentColor"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84-1.56 1.56-3.64 2.42-5.84 2.42-1.44 0-2.86-.38-4.11-1.11l-.29-.17-3.12.82.83-3.04-.19-.3a8.16 8.16 0 0 1-1.25-4.46c0-4.54 3.7-8.24 8.24-8.24zm4.56 11.66c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.65.81-.79.98-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.49-.07 1.48-.61 1.69-1.2.21-.58.21-1.08.15-1.2-.06-.13-.23-.2-.48-.32z" />
        </svg>
      </a>

      {/* Scroll-to-Top Dark Floating Button matching Screenshot */}
      {showScroll && (
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="grid size-11 place-items-center rounded-full bg-[#1e293b] text-white shadow-xl transition-all duration-300 hover:bg-[#0f172a] hover:scale-105"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </div>
  );
}
