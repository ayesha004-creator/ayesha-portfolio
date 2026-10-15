import { MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" aria-label="Chat with Ayesha on WhatsApp (opens in a new tab)"
      className="fixed bottom-4 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#128C4A] text-white shadow-lg transition-transform hover:scale-105">
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}
