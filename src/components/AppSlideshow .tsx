import { useState } from 'react';

const previewImages = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200',
];

const AppSlideshow = () => {
  const [idx, setIdx] = useState(0);

  const goPrev = () => setIdx((i) => (i === 0 ? previewImages.length - 1 : i - 1));
  const goNext = () => setIdx((i) => (i === previewImages.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl flex flex-col items-center gap-6">
        {/* Main Slideshow Container */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-black group">
          {/* Image with fade transition */}
          <img
            key={idx}
            src={previewImages[idx]}
            alt={`Preview ${idx + 1}`}
            className="w-full h-full object-contain animate-[fadeIn_0.5s_ease-in-out]"
            draggable={false}
          />
          
          {/* Overlay gradients for better button visibility */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/40 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Navigation Buttons - Hidden on mobile, visible on hover on desktop */}
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-3 md:p-4 shadow-xl border border-white/20 opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-110 focus:opacity-100 focus:ring-2 focus:ring-white/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goNext}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-3 md:p-4 shadow-xl border border-white/20 opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-110 focus:opacity-100 focus:ring-2 focus:ring-white/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
            {idx + 1} / {previewImages.length}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-3 justify-center">
          {previewImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === idx 
                  ? 'w-12 h-3 bg-blue-500 shadow-lg shadow-blue-500/50' 
                  : 'w-3 h-3 bg-gray-500 hover:bg-gray-400 hover:scale-125'
              }`}
            />
          ))}
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden gap-4">
          <button
            onClick={goPrev}
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full px-6 py-3 shadow-xl border border-white/20 transition-all hover:scale-105 focus:ring-2 focus:ring-white/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full px-6 py-3 shadow-xl border border-white/20 transition-all hover:scale-105 focus:ring-2 focus:ring-white/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AppSlideshow;