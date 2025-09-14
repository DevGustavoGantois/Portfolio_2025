"use client";
import { ChevronUp } from "lucide-react";

export function CustomRedirectButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={scrollToTop}
        className="bg-black/50 hover:bg-black/70 border border-white/10 rounded-full p-3 flex items-center justify-center cursor-pointer transition-colors duration-300"
      >
        <ChevronUp className="text-white" size={16} />
      </button>
    </div>
  );
}
