import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full backdrop-blur-md bg-card/80 border border-primary/20 text-primary hover-elevate active-elevate-2 transition-all duration-300 flex items-center justify-center shadow-lg shadow-primary/10"
      aria-label="Back to top"
      data-testid="button-back-to-top"
      style={{
        filter: "drop-shadow(0 0 12px rgba(92, 99, 200, 0.3))",
      }}
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
}
