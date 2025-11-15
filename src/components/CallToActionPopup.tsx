import { useEffect, useState, useRef } from 'react';
import { Phone, X } from 'lucide-react';

export default function CallToActionPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const aboutSection = document.getElementById('about');

    if (!aboutSection) {
      console.log('About section not found');
      return;
    }

    console.log('About section found, setting up observer');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Intersection observed:', entry.isIntersecting, 'hasTriggered:', hasTriggered.current);
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true;
            console.log('Triggering popup');
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
    console.log('Closing popup');
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
      className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 ease-out ${
        isAnimating
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md relative border-4 border-blue-500">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Popup schließen"
        >
          <X size={24} strokeWidth={2} />
        </button>

        <div className="flex items-start gap-4 pr-8">
          <div className="flex-shrink-0 bg-midnight p-4 rounded-full">
            <Phone className="text-white" size={28} strokeWidth={2} />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-midnight mb-3">
              Jetzt anrufen!
            </h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Ruf uns jetzt für ein unverbindliches Angebot an
            </p>

            <a
              href="tel:+4915560850344"
              className="inline-flex items-center gap-3 bg-midnight text-white px-6 py-3.5 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-base"
            >
              <Phone size={20} strokeWidth={2} />
              <span>0155-60850344</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
