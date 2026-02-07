import { useState } from 'react';
import SyllabusViewer from './SyllabusViewer';

interface SyllabusGateProps {
  courseName: string;
  images: string[];
  buttonText?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function SyllabusGate({
  courseName,
  images,
  buttonText = 'צפייה בסילבוס',
  variant = 'secondary',
  className = ''
}: SyllabusGateProps) {
  const [showSyllabus, setShowSyllabus] = useState(false);

  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-base rounded-full transition-all duration-300 hover:scale-105";
  const variantStyles = {
    primary: "bg-[#a855f7] text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]",
    secondary: "border-2 border-[#a855f7] text-[#a855f7] hover:bg-[#a855f7]/10"
  };

  return (
    <>
      {/* Trigger Button - Opens syllabus directly */}
      <button
        onClick={() => setShowSyllabus(true)}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {buttonText}
      </button>

      {/* Syllabus Viewer */}
      <SyllabusViewer
        isOpen={showSyllabus}
        onClose={() => setShowSyllabus(false)}
        courseName={courseName}
        images={images}
      />
    </>
  );
}
