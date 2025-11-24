import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const bounded = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(bounded);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-midnight mb-6">
              Haushaltsauflösungen und Wohnungsauflösungen
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Bei Haushalts- und Wohnungsauflösungen achten wir besonders darauf,
              jeden Auftrag mit Umsicht und Professionalität zu behandeln. Neben der
              fachgerechten Entsorgung achten wir darauf, Ihre Gegenstände sorgsam zu
              behandeln und sicherzustellen, dass alles Wertvolle oder Persönliche
              entsprechend Ihren Wünschen behandelt wird.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Unser erfahrenes Team arbeitet diskret und effizient, um den Prozess
              so reibungslos wie möglich zu gestalten. Wir kümmern uns um alle Aspekte
              der Auflösung - von der Sortierung über den Transport bis zur fachgerechten
              Entsorgung oder Weitergabe von wiederverwendbaren Gegenständen.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ob Wohnungsauflösung nach einem Umzug, Haushaltsauflösung im Erbfall
              oder die Entrümpelung einer Immobilie - wir stehen Ihnen mit Rat und
              Tat zur Seite und sorgen für einen stressfreien Ablauf.
            </p>
          </div>

          <div
            ref={containerRef}
            className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl select-none"
            style={{ touchAction: 'none' }}
          >
            <img
              src="/vorher.jpg"
              alt="Vorher - Leerer Raum"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/nachher.jpg"
                alt="Nachher - Eingerichteter Raum"
                className="absolute inset-0 w-full h-full object-cover"
                draggable="false"
              />
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform"
                onMouseDown={handleMouseDown}
                onTouchStart={() => setIsDragging(true)}
              >
                <ChevronLeft className="w-5 h-5 text-midnight absolute left-1" />
                <ChevronRight className="w-5 h-5 text-midnight absolute right-1" />
              </div>
            </div>

            <div className="absolute top-4 left-4 bg-midnight/80 text-white px-3 py-1.5 rounded-lg text-xs font-medium">
              Vorher
            </div>
            <div className="absolute top-4 right-4 bg-gold/90 text-midnight px-3 py-1.5 rounded-lg text-xs font-medium">
              Nachher
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
