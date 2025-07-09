import React, { useState, useEffect, useCallback, useRef } from 'react';

const categories = [
  {
    name: 'Living Room',
    folder: '/assets/images/villa/living-room/',
    photos: [
      'lot1-living-room-01.jpg',
      'lot1-living-room-02.jpg',
      'lot1-living-room-03.jpg',
      'lot1-living-room-05.jpg',
      'lot1-living-room-06.jpg',
      'lot1-living-room-07.jpg',
    ],
  },
  {
    name: 'Bedrooms & Bathrooms',
    folder: '/assets/images/villa/bedrooms-bathrooms/',
    photos: [
      'lot1-bedrooms-bathrooms-01.jpg',
      'lot1-bedrooms-bathrooms-02.jpg',
      'lot1-bedrooms-bathrooms-03.jpg',
      'lot1-bedrooms-bathrooms-04.jpg',
      'lot1-bedrooms-bathrooms-05.jpg',
      'lot1-bedrooms-bathrooms-06.jpg',
      'lot1-bedrooms-bathrooms-07.jpg',
      'lot1-bedrooms-bathrooms-08.jpg',
      'lot1-bedrooms-bathrooms-09.jpg',
    ],
  },
  {
    name: 'Exterior',
    folder: '/assets/images/villa/exterior/',
    photos: [
      'lot1-exterior-01.jpg',
      'lot1-exterior-02.jpg',
      'lot1-exterior-03.jpg',
      'lot1-exterior-04.jpg',
      'lot1-exterior-05.jpg',
      'lot1-exterior-06.jpg',
      'lot1-exterior-07.jpg',
      'lot1-exterior-08.jpg',
      'lot1-exterior-09.jpg',
      'lot1-exterior-12.jpg',
      'lot1-exterior-13.jpg',
      'lot1-exterior-14.jpg',
      'lot1-exterior-15.jpg',
      'lot1-exterior-16.jpg',
      'lot1-exterior-17.jpg',
      'lot1-exterior-18.jpg',
      'lot1-exterior-19.jpg',
      'lot1-exterior-20.jpg',
      'lot1-exterior-21.jpg',
      'lot1-exterior-22.jpg',
      'lot1-exterior-23.jpg',
      'lot1-exterior-24.jpg',
      'lot1-exterior-25.jpg',
      'lot1-exterior-28.jpg',
    ],
  },
  {
    name: 'Poolside',
    folder: '/assets/images/villa/poolside/',
    photos: [
      'lot1-poolside-01.jpg',
      'lot1-poolside-03.jpg',
      'lot1-poolside-04.jpg',
      'lot1-poolside-05.jpg',
      'lot1-poolside-06.jpg',
      'lot1-poolside-07.jpg',
      'lot1-poolside-08.jpg',
    ],
  },
  {
    name: 'Panoramic',
    folder: '/assets/images/villa/panoramic/',
    photos: [
      'lot1-panoramic-01.jpg',
      'lot1-panoramic-02.jpg',
      'lot1-panoramic-03.jpg',
      'lot1-panoramic-04.jpg',
      'lot1-panoramic-05.jpg',
      'lot1-panoramic-06.jpg',
      'lot1-panoramic-07.jpg',
      'lot1-panoramic-08.jpg',
      'lot1-panoramic-09.jpg',
      'lot1-panoramic-10.jpg',
      'lot1-panoramic-11.jpg',
      'lot1-panoramic-12.jpg',
      'lot1-panoramic-13.jpg',
      'lot1-panoramic-14.jpg',
      'lot1-panoramic-15.jpg',
      'lot1-panoramic-16.jpg',
      'lot1-panoramic-17.jpg',
      'lot1-panoramic-18.jpg',
      'lot1-panoramic-19.jpg',
      'lot1-panoramic-20.jpg',
      'lot1-panoramic-21.jpg',
      'lot1-panoramic-22.jpg',
      'lot1-panoramic-23.jpg',
      'lot1-panoramic-24.jpg',
    ],
  },
];

const GalleryByCategory: React.FC = () => {
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
          />
          <div className="absolute bottom-4 left-0 w-full flex justify-center">
            <span className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white drop-shadow-lg text-center px-2">
              {cat.name}
            </span>
          </div>
        </button>
      ))}

      {/* Modal Slideshow */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-white/95 flex flex-col items-center justify-center p-4 overflow-auto animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative flex flex-col items-center w-full h-full max-w-[85vw] max-h-[85vh]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-5xl text-gold hover:text-stone-700 transition font-bold z-50 bg-white/90 rounded-full px-5 py-2 shadow-lg border-2 border-gold"
              aria-label="Close gallery"
            >
              ×
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Left Arrow */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gold hover:text-stone-700 bg-white/80 rounded-full p-2 shadow z-20"
                onClick={prev}
                aria-label="Previous"
              >
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              
              {/* Image Container - Fixed 85% of screen */}
              <div 
                className="relative w-full h-full bg-stone-100 rounded-xl shadow-lg border border-gold/30 overflow-hidden"
                style={{ 
                  width: '85vw', 
                  height: '85vh',
                  maxWidth: '1400px',
                  maxHeight: '900px',
                  boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)'
                }}
              >
                <img
                  src={categories[openIdx].folder + categories[openIdx].photos[slideIdx]}
                  alt={categories[openIdx].name + ' photo'}
                  className="w-full h-full object-cover cursor-pointer transition-all duration-150"
                  onClick={next}
                />
              </div>
              
              {/* Right Arrow */}
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gold hover:text-stone-700 bg-white/80 rounded-full p-2 shadow z-20"
                onClick={next}
                aria-label="Next"
              >
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <div className="flex gap-2 mt-4 mb-4 px-2 pb-2 max-w-full w-full justify-center overflow-x-auto">
              {categories[openIdx].photos.map((photo, i) => (
                <img
                  key={i}
                  src={categories[openIdx].folder + photo}
                  alt={`Thumbnail ${i + 1}`}
                  className={`w-12 h-12 object-cover rounded border-2 transition-all duration-200 cursor-pointer flex-shrink-0 ${i === slideIdx ? 'border-gold scale-105' : 'border-stone-200 opacity-70 hover:opacity-100'}`}
                  onClick={() => setSlideIdx(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryByCategory;
