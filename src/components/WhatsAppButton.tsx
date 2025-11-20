import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/4915732649483"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 bg-[#25D366] text-white p-4 rounded-l-2xl shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 group"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        WhatsApp Chat
      </span>
    </a>
  );
}
