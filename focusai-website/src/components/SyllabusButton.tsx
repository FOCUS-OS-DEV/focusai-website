import { useState } from 'react';
import SyllabusViewer from './SyllabusViewer';

interface SyllabusButtonProps {
  courseName: string;
  images: string[];
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function SyllabusButton({
  courseName,
  images,
  variant = 'secondary',
  className = ''
}: SyllabusButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 font-mono font-bold text-lg transition-all";

  const variantStyles = {
    primary: "bg-[#a855f7] text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:brightness-110",
    secondary: "border-2 border-[#a855f7] text-[#a855f7] hover:bg-[#a855f7]/10",
    outline: "border border-[#2a2a3a] text-[#c0c0d0] hover:border-[#a855f7]/50 hover:text-[#a855f7]"
  };

  const clipPath = "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        style={{ clipPath }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        לצפייה בסילבוס
      </button>

      <SyllabusViewer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        courseName={courseName}
        images={images}
      />
    </>
  );
}
