import { useEffect, useState, useRef } from 'react';
import { Phone, X } from 'lucide-react';

export default function CallToActionPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const aboutSection = document.getElementById('about');

    if (!aboutSection) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true;
            setTimeout(() => {
              setIsVisible(true);
              setTimeout(() => {
                setIsAnimating(true);
              }, 100);
            }, 500);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(aboutSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-8 sm:right-8 z-[100] transition-all duration-500 ease-out ${
        isAnimating
          ? 'translate-y-0 sm:translate-x-0 opacity-100'
          : 'translate-y-full sm:translate-y-0 sm:translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md mx-auto relative border-4 border-midnight">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Popup schließen"
        >
          <X size={24} strokeWidth={2} />
        </button>

        <div className="flex flex-col sm:flex-row items-start gap-4 pr-8">
          <div className="flex-shrink-0 bg-midnight p-3 sm:p-4 rounded-full">
            <Phone className="text-white" size={24} strokeWidth={2} />
          </div>

          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-midnight mb-2 sm:mb-3">
              Jetzt anrufen!
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Ruf uns jetzt für ein unverbindliches Angebot an
            </p>

            <a
              href="tel:+4915560850344"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-midnight text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm sm:text-base w-full sm:w-auto"
            >
              <Phone size={18} strokeWidth={2} />
              <span>0155-60850344</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
