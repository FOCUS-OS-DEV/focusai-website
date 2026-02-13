import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface SyllabusViewerProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  images: string[];
}

function SyllabusModal({ onClose, courseName, images }: Omit<SyllabusViewerProps, 'isOpen'>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left → next (RTL: forward)
        setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
      } else {
        // Swipe right → prev (RTL: backward)
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  return (
    <div
      id="syllabus-modal"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#000',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button - floating */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: isMobile ? 12 : 20,
          left: isMobile ? 12 : 20,
          zIndex: 100,
          padding: isMobile ? '8px 16px' : '12px 24px',
          backgroundColor: '#ff3366',
          color: '#fff',
          border: 'none',
          borderRadius: 50,
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: isMobile ? 13 : 16,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        ✕ סגור
      </button>

      {/* Page indicator - floating */}
      <div
        style={{
          position: 'absolute',
          top: isMobile ? 12 : 20,
          right: isMobile ? 12 : 20,
          zIndex: 100,
          padding: isMobile ? '8px 14px' : '12px 20px',
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderRadius: 50,
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? 8 : 12,
        }}
      >
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#a855f7' }}></span>
        </div>
        <span style={{ color: '#fff', fontFamily: 'monospace', fontSize: isMobile ? 12 : 14 }}>
          עמוד {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Main image - centered, much larger on mobile */}
      <div
        style={{
          position: 'absolute',
          top: isMobile ? 52 : 80,
          left: isMobile ? 4 : 100,
          right: isMobile ? 4 : 100,
          bottom: isMobile ? 70 : 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`סילבוס עמוד ${currentIndex + 1}`}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: isMobile ? 8 : 16,
            boxShadow: '0 0 80px rgba(168,85,247,0.4)',
          }}
        />
      </div>

      {/* Previous button */}
      {currentIndex > 0 && (
        <button
          onClick={() => setCurrentIndex(currentIndex - 1)}
          style={{
            position: 'absolute',
            right: isMobile ? 6 : 20,
            top: '50%',
            transform: 'translateY(-50%)',
            width: isMobile ? 36 : 70,
            height: isMobile ? 36 : 70,
            borderRadius: '50%',
            border: 'none',
            backgroundColor: isMobile ? 'rgba(168,85,247,0.7)' : '#a855f7',
            color: '#fff',
            cursor: 'pointer',
            fontSize: isMobile ? 16 : 28,
            zIndex: 100,
            boxShadow: isMobile ? 'none' : '0 0 40px rgba(168,85,247,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ❯
        </button>
      )}

      {/* Next button */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={() => setCurrentIndex(currentIndex + 1)}
          style={{
            position: 'absolute',
            left: isMobile ? 6 : 20,
            top: '50%',
            transform: 'translateY(-50%)',
            width: isMobile ? 36 : 70,
            height: isMobile ? 36 : 70,
            borderRadius: '50%',
            border: 'none',
            backgroundColor: isMobile ? 'rgba(168,85,247,0.7)' : '#a855f7',
            color: '#fff',
            cursor: 'pointer',
            fontSize: isMobile ? 16 : 28,
            zIndex: 100,
            boxShadow: isMobile ? 'none' : '0 0 40px rgba(168,85,247,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ❮
        </button>
      )}

      {/* Thumbnails at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: isMobile ? 8 : 20,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? 4 : 10,
          padding: isMobile ? '0 8px' : '0 20px',
        }}
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: isMobile ? 32 : 50,
              height: isMobile ? 42 : 65,
              padding: 0,
              border: idx === currentIndex
                ? (isMobile ? '2px solid #a855f7' : '3px solid #a855f7')
                : (isMobile ? '1px solid #555' : '2px solid #555'),
              borderRadius: isMobile ? 4 : 8,
              overflow: 'hidden',
              cursor: 'pointer',
              opacity: idx === currentIndex ? 1 : 0.6,
              transform: idx === currentIndex ? 'scale(1.15)' : 'scale(1)',
              transition: 'all 0.2s',
              boxShadow: idx === currentIndex ? '0 0 25px rgba(168,85,247,0.6)' : 'none',
              background: 'transparent',
            }}
          >
            <img
              src={img}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SyllabusViewer({ isOpen, onClose, courseName, images }: SyllabusViewerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  // Use portal to render outside of any container that might have overflow:hidden
  return createPortal(
    <SyllabusModal onClose={onClose} courseName={courseName} images={images} />,
    document.body
  );
}
