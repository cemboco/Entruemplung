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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-midnight mb-4">
            Vorher & Nachher
          </h2>
          <p className="text-xl text-gray-600">
            Sehen Sie selbst, wie wir Räume verwandeln
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Ziehen Sie den Regler, um den Unterschied zu sehen
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl select-none"
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

          <div className="absolute top-4 left-4 bg-midnight/80 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Vorher
          </div>
          <div className="absolute top-4 right-4 bg-gold/90 text-midnight px-4 py-2 rounded-lg text-sm font-medium">
            Nachher
          </div>
        </div>
      </div>
    </section>
  );
}
