import { useEffect, useState } from 'react';
import { Phone, X } from 'lucide-react';

export default function CallToActionPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenCTAPopup');

    if (hasSeenPopup) {
      return;
    }

    const aboutSection = document.getElementById('about');

    if (!aboutSection) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => {
              setIsVisible(true);
              setTimeout(() => {
                setIsAnimating(true);
              }, 100);
            }, 1000);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(aboutSection);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('hasSeenCTAPopup', 'true');
    }, 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-out ${
        isAnimating
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm relative border border-gray-100">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Popup schließen"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <div className="flex items-start gap-4 pr-6">
          <div className="flex-shrink-0 bg-midnight p-3 rounded-full">
            <Phone className="text-white" size={24} strokeWidth={1.5} />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-medium text-midnight mb-2">
              Jetzt anrufen!
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Ruf uns jetzt für ein unverbindliches Angebot an
            </p>

            <a
              href="tel:+491234567890"
              className="inline-flex items-center gap-2 bg-midnight text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
            >
              <Phone size={18} strokeWidth={1.5} />
              <span>0123 456 7890</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
