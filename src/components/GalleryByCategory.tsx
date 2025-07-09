import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const categories = [
  {
    name: 'Living Room',
    folder: '/assets/images/villa/living-room/',
    photos: [
      'living-room-01.jpg',
      'living-room-02.jpg',
      'living-room-03.jpg',
      'living-room-04.jpg',
      'living-room-05.jpg',
      'living-room-06.jpg',
      'living-room-07.jpg',
    ],
  },
  {
    name: 'Bedrooms & Bathrooms',
    folder: '/assets/images/villa/bedrooms-bathrooms/',
    photos: [
      'bedrooms-bathrooms-01.jpg',
      'bedrooms-bathrooms-02.jpg',
      'bedrooms-bathrooms-03.jpg',
      'bedrooms-bathrooms-04.jpg',
      'bedrooms-bathrooms-05.jpg',
      'bedrooms-bathrooms-06.jpg',
      'bedrooms-bathrooms-07.jpg',
      'bedrooms-bathrooms-08.jpg',
      'bedrooms-bathrooms-09.jpg',
      'bedrooms-bathrooms-10.jpg',
      'bedrooms-bathrooms-11.jpg',
    ],
  },
  {
    name: 'Exterior',
    folder: '/assets/images/villa/exterior/',
    photos: [
      'exterior-01.jpg',
      'exterior-02.jpg',
      'exterior-03.jpg',
      'exterior-04.jpg',
      'exterior-05.jpg',
      'exterior-06.jpg',
      'exterior-07.jpg',
      'exterior-08.jpg',
      'exterior-09.jpg',
      'exterior-10.jpg',
      'exterior-11.jpg',
      'exterior-12.jpg',
      'exterior-13.jpg',
      'exterior-14.jpg',
      'exterior-15.jpg',
      'exterior-16.jpg',
      'exterior-17.jpg',
      'exterior-18.jpg',
      'exterior-19.jpg',
      'exterior-20.jpg',
      'exterior-21.jpg',
      'exterior-22.jpg',
      'exterior-23.jpg',
      'exterior-24.jpg',
      'exterior-25.jpg',
      'exterior-26.jpg',
      'exterior-27.jpg',
      'exterior-28.jpg',
    ],
  },
  {
    name: 'Poolside',
    folder: '/assets/images/villa/poolside/',
    photos: [
      'poolside-01.jpg',
      'poolside-02.jpg',
    ],
  },
  {
    name: 'Panoramic',
    folder: '/assets/images/villa/panoramic/',
    photos: [
      'panoramic-01.jpg',
      'panoramic-02.jpg',
    ],
  },
];

const GalleryByCategory: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleOpen = (catIdx: number) => {
    setOpenCategory(catIdx);
    setPhotoIndex(0);
    setImageLoaded(false);
  };

  const handleClose = () => {
    setOpenCategory(null);
    setPhotoIndex(0);
    setImageLoaded(false);
  };

  const handlePrev = () => {
    if (openCategory === null) return;
    setImageLoaded(false);
    setPhotoIndex((prev) =>
      prev === 0 ? categories[openCategory].photos.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (openCategory === null) return;
    setImageLoaded(false);
    setPhotoIndex((prev) =>
      prev === categories[openCategory].photos.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (openCategory === null) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          handlePrev();
          break;
        case 'ArrowRight':
          event.preventDefault();
          handleNext();
          break;
        case 'Escape':
          event.preventDefault();
          handleClose();
          break;
      }
    };

    if (openCategory !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [openCategory, photoIndex]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((cat, idx) => (
        <div
          key={cat.name}
          className="relative h-64 rounded-lg overflow-hidden group cursor-pointer bg-stone-100 hover:bg-stone-200 transition shadow-lg"
          onClick={() => handleOpen(idx)}
        >
          <img
            src={cat.folder + cat.photos[0]}
            alt={cat.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 fixed-property-image"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
          <div className="absolute bottom-4 left-0 w-full flex justify-center">
            <span className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white drop-shadow-lg text-center px-2">
              {cat.name}
            </span>
          </div>
        </div>
      ))}

      {/* Slideshow Dialog */}
      <Dialog open={openCategory !== null} onOpenChange={handleClose}>
        <DialogContent className="max-w-4xl w-full h-[85vh] p-0 bg-black rounded-2xl shadow-2xl border-4 border-gold flex flex-col justify-center items-center relative overflow-hidden">
          <DialogHeader className="absolute top-4 left-4 z-10">
            <DialogTitle className="text-white text-2xl font-light tracking-wide flex items-center gap-2">
              {openCategory !== null && categories[openCategory].name} <span className="text-gold">•</span> Photo {photoIndex + 1} of {openCategory !== null && categories[openCategory].photos.length}
            </DialogTitle>
          </DialogHeader>
          <button
            className="absolute top-4 right-4 z-10 text-white hover:bg-gold/20 p-2 rounded-full transition"
            onClick={handleClose}
            aria-label="Close"
          >
            <X className="h-7 w-7" />
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center px-4">
            {openCategory !== null && (
              <>
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gold text-lg">Loading...</div>
                  </div>
                )}
                <img
                  src={categories[openCategory].folder + categories[openCategory].photos[photoIndex]}
                  alt={categories[openCategory].name + ' photo'}
                  className={`max-w-full max-h-[70vh] object-contain rounded-xl shadow-lg border border-gold/30 transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </>
            )}
            
            <button
              className="absolute left-4 text-gold bg-black/50 hover:bg-gold/30 p-3 rounded-full shadow transition backdrop-blur-sm"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              className="absolute right-4 text-gold bg-black/50 hover:bg-gold/30 p-3 rounded-full shadow transition backdrop-blur-sm"
              onClick={handleNext}
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
          
          {/* Thumbnails */}
          {openCategory !== null && (
            <div className="flex gap-2 mt-4 overflow-x-auto px-4 pb-4 max-w-full">
              {categories[openCategory].photos.map((photo, i) => (
                <img
                  key={i}
                  src={categories[openCategory].folder + photo}
                  alt={`Thumbnail ${i + 1}`}
                  className={`w-16 h-16 object-cover rounded border-2 transition-all duration-200 cursor-pointer flex-shrink-0 ${i === photoIndex ? 'border-gold scale-105' : 'border-white/30 opacity-70 hover:opacity-100'}`}
                  onClick={() => {
                    setPhotoIndex(i);
                    setImageLoaded(false);
                  }}
                  onError={handleImageError}
                />
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryByCategory; 