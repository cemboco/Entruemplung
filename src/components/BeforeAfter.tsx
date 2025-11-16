import { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = 'Vorher',
  afterLabel = 'Nachher',
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clampedPercentage);
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
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={() => setIsDragging(true)}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />

        <div
          className="absolute inset-0 w-full h-full"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <img
            src={afterImage}
            alt={afterLabel}
            className="absolute inset-0 w-full h-full object-cover"
            draggable="false"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize">
            <ArrowLeftRight className="text-midnight" size={24} />
          </div>
        </div>

        <div
          className="absolute inset-0 cursor-ew-resize"
          style={{ cursor: 'ew-resize' }}
        />
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="inline-flex items-center bg-gray-100 text-midnight px-4 py-2 rounded-full">
          <span className="text-sm font-medium">{beforeLabel}</span>
        </div>
        <div className="inline-flex items-center bg-midnight text-white px-4 py-2 rounded-full">
          <span className="text-sm font-medium">{afterLabel}</span>
        </div>
      </div>

      <div className="mt-4">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          aria-label="Vorher/Nachher Vergleich"
        />
      </div>
    </div>
  );
}
