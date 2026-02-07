import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface SyllabusViewerProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  images: string[];
}

function SyllabusModal({ onClose, courseName, images }: Omit<SyllabusViewerProps, 'isOpen'>) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div
      id="syllabus-modal"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#000',
      }}
    >
      {/* Close button - floating */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 100,
          padding: '12px 24px',
          backgroundColor: '#ff3366',
          color: '#fff',
          border: 'none',
          borderRadius: 50,
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        ✕ סגור
      </button>

      {/* Page indicator - floating */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 100,
          padding: '12px 20px',
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderRadius: 50,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff3366' }}></span>
          <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffff00' }}></span>
          <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#a855f7' }}></span>
        </div>
        <span style={{ color: '#fff', fontFamily: 'monospace', fontSize: 14 }}>
          עמוד {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Main image - centered */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          left: 100,
          right: 100,
          bottom: 120,
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
            borderRadius: 16,
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
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 70,
            height: 70,
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#a855f7',
            color: '#fff',
            cursor: 'pointer',
            fontSize: 28,
            zIndex: 100,
            boxShadow: '0 0 40px rgba(168,85,247,0.6)',
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
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 70,
            height: 70,
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#a855f7',
            color: '#fff',
            cursor: 'pointer',
            fontSize: 28,
            zIndex: 100,
            boxShadow: '0 0 40px rgba(168,85,247,0.6)',
          }}
        >
          ❮
        </button>
      )}

      {/* Thumbnails at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
          padding: '0 20px',
        }}
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: 50,
              height: 65,
              padding: 0,
              border: idx === currentIndex ? '3px solid #a855f7' : '2px solid #555',
              borderRadius: 8,
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
