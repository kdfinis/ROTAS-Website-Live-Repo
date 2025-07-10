import React, { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';

interface PhotoCategory {
  name: string;
  folder: string;
  photos: string[];
}

interface UniversalGalleryProps {
  propertyId: string;
  categories: PhotoCategory[];
}

const UniversalGallery: React.FC<UniversalGalleryProps> = ({ propertyId, categories }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [slideIdx, setSlideIdx] = useState(0);

  // Open modal at first image of category
  const openModal = (catIdx: number) => {
    window.history.pushState({ modal: true }, '');
    setOpenIdx(catIdx);
    setSlideIdx(0);
  };
  
  const closeModal = useCallback(() => {
    setOpenIdx(null);
    if (window.history.state && window.history.state.modal) window.history.back();
  }, []);

  // Next/Prev navigation
  const prev = () => {
    if (openIdx === null) return;
    setSlideIdx((i) => (i === 0 ? categories[openIdx].photos.length - 1 : i - 1));
  };
  
  const next = () => {
    if (openIdx === null) return;
    setSlideIdx((i) => (i === categories[openIdx].photos.length - 1 ? 0 : i + 1));
  };

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    trackMouse: false
  });

  // Escape and Back closes modal
  useEffect(() => {
    if (openIdx === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    const onPopState = () => setOpenIdx(null);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('popstate', onPopState);
    };
  }, [openIdx, closeModal]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((cat, idx) => (
        <button
          key={cat.name}
          className="relative w-full rounded-2xl overflow-hidden group cursor-pointer bg-stone-100 hover:bg-stone-200 transition shadow-lg focus:outline-none"
          style={{ aspectRatio: '3800/2412' }}
          onClick={() => openModal(idx)}
          aria-label={`Open ${cat.name} gallery`}
        >
          <img
            src={cat.folder + cat.photos[0]}
            alt={cat.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 rounded-2xl"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
          <div className="absolute bottom-4 left-0 w-full flex justify-center">
            <span className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white drop-shadow-lg text-center px-2">
              {cat.name}
            </span>
          </div>
        </button>
      ))}

      {/* Enhanced Modal Slideshow */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeModal}
        >
          <div
            className="relative w-screen h-screen flex items-center justify-center"
            onClick={e => e.stopPropagation()}
            {...swipeHandlers}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-50 bg-black/50 rounded-full p-3 backdrop-blur-sm"
              aria-label="Close gallery"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Left Navigation Zone */}
            <div
              className="absolute top-0 left-0 h-full w-1/5 cursor-pointer z-30 group"
              onClick={prev}
              aria-label="Previous"
            >
              <div className="hidden md:flex items-center h-full justify-start pl-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="text-white drop-shadow-lg">
                  <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Right Navigation Zone */}
            <div
              className="absolute top-0 right-0 h-full w-1/5 cursor-pointer z-30 group"
              onClick={next}
              aria-label="Next"
            >
              <div className="hidden md:flex items-center h-full justify-end pr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="text-white drop-shadow-lg">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Main Image - Edge to Edge */}
            <img
              src={categories[openIdx].folder + categories[openIdx].photos[slideIdx]}
              alt={categories[openIdx].name + ' photo'}
              className="object-contain w-screen h-screen select-none"
              loading="lazy"
              draggable={false}
              onClick={next}
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversalGallery; 