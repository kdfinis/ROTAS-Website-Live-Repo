import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PhotoCategory {
  name: string;
  displayName: string;
  path: string;
  photos: string[];
}

const Lot1VillaGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Photo categories with 2 photos each for Lot 1 Villa
  const categories: PhotoCategory[] = [
    {
      name: 'livingRoom',
      displayName: 'Living Room',
      path: '/assets/images/villa/living-room/',
      photos: [
        'living-room-01.jpg',
        'living-room-02.jpg'
      ]
    },
    {
      name: 'bedroomsBathrooms',
      displayName: 'Bedrooms & Bathrooms',
      path: '/assets/images/villa/bedrooms-bathrooms/',
      photos: [
        'bedrooms-bathrooms-01.jpg',
        'bedrooms-bathrooms-02.jpg'
      ]
    },
    {
      name: 'exterior',
      displayName: 'Exterior',
      path: '/assets/images/villa/exterior/',
      photos: [
        'exterior-01.jpg',
        'exterior-02.jpg'
      ]
    },
    {
      name: 'poolside',
      displayName: 'Poolside',
      path: '/assets/images/villa/poolside/',
      photos: [
        'poolside-01.jpg',
        'poolside-02.jpg'
      ]
    },
    {
      name: 'panoramic',
      displayName: 'Panoramic',
      path: '/assets/images/villa/panoramic/',
      photos: [
        'panoramic-01.jpg',
        'panoramic-02.jpg'
      ]
    }
  ];

  const handleViewAll = (category: PhotoCategory) => {
    setSelectedCategory(category.name);
    setSelectedPhotoIndex(0);
    setIsModalOpen(true);
  };

  const handlePreviousPhoto = () => {
    const currentCategory = categories.find(cat => cat.name === selectedCategory);
    if (currentCategory) {
      setSelectedPhotoIndex(prev => 
        prev === 0 ? currentCategory.photos.length - 1 : prev - 1
      );
    }
  };

  const handleNextPhoto = () => {
    const currentCategory = categories.find(cat => cat.name === selectedCategory);
    if (currentCategory) {
      setSelectedPhotoIndex(prev => 
        prev === currentCategory.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const currentCategory = categories.find(cat => cat.name === selectedCategory);
  const currentPhoto = currentCategory?.photos[selectedPhotoIndex];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Photo Gallery
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore the Stone Villa through carefully curated photo collections showcasing each area of this magnificent property.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.displayName}
                </h3>
                <Button
                  onClick={() => handleViewAll(category)}
                  variant="outline"
                  size="sm"
                  className="text-sm hover:bg-gray-100"
                >
                  View All
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.photos.map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setSelectedPhotoIndex(index);
                      setIsModalOpen(true);
                    }}
                  >
                    <img
                      src={`${category.path}${photo}`}
                      alt={`${category.displayName} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback for missing images
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black">
          <DialogHeader className="absolute top-4 left-4 z-10">
            <DialogTitle className="text-white text-xl">
              {currentCategory?.displayName} - Photo {selectedPhotoIndex + 1} of {currentCategory?.photos.length}
            </DialogTitle>
          </DialogHeader>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={() => setIsModalOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="relative w-full h-full flex items-center justify-center">
            {currentPhoto && (
              <img
                src={`${currentCategory?.path}${currentPhoto}`}
                alt={`${selectedCategory} photo`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            )}
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-white hover:bg-white/20"
              onClick={handlePreviousPhoto}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-white hover:bg-white/20"
              onClick={handleNextPhoto}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto">
            {currentCategory?.photos.map((photo, index) => (
              <div
                key={index}
                className={`w-16 h-16 rounded cursor-pointer border-2 transition-all ${
                  index === selectedPhotoIndex ? 'border-white' : 'border-white/30'
                }`}
                onClick={() => setSelectedPhotoIndex(index)}
              >
                <img
                  src={`${currentCategory.path}${photo}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Lot1VillaGallery; 