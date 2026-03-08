import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoGalleryModalProps {
  concertTitle: string;
  photos: string[];
  isOpen: boolean;
  onClose: () => void;
}

export function PhotoGalleryModal({ concertTitle, photos, isOpen, onClose }: PhotoGalleryModalProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage !== null) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, selectedImage, onClose]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? photos.length - 1 : selectedImage - 1
      );
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-50 overflow-y-auto"
        onClick={onClose}
      >
        {/* Modal Content */}
        <div
          className="min-h-screen px-4 py-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-3xl text-[var(--color-opera-burgundy)] mb-1">
                  {concertTitle}
                </h2>
                <p className="text-gray-600">전체 사진 ({photos.length})</p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[var(--color-opera-burgundy)] hover:bg-gray-100 rounded transition-colors"
              >
                <X className="w-5 h-5" />
                <span>닫기</span>
              </button>
            </div>

            {/* Photo Grid */}
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="aspect-square overflow-hidden rounded-lg hover:opacity-80 hover:shadow-lg transition-all duration-300 bg-gray-100"
                  >
                    <img
                      src={photo}
                      alt={`${concertTitle} - Photo ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <img
            src={photos[selectedImage]}
            alt={`${concertTitle} - Photo ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
