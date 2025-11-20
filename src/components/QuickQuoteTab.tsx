import { MessageSquare } from 'lucide-react';

export default function QuickQuoteTab() {
  return (
    <a
      href="#schnellanfrage"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-midnight text-white py-6 px-3 rounded-l-lg shadow-lg hover:px-6 transition-all duration-300 group flex items-center gap-2"
      aria-label="Zur Schnellanfrage"
    >
      <MessageSquare className="w-5 h-5" />
      <span className="whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 font-medium text-sm">
        Schnellanfrage
      </span>
    </a>
  );
}
