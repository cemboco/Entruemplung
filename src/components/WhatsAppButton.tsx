import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/analytics';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/4915732649483"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 group"
      aria-label="WhatsApp Schnellanfrage"
      onClick={trackWhatsAppClick}
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute bottom-full mb-3 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        WhatsApp Chat
      </span>
    </a>
  );
}
