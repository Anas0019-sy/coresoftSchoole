import { useEffect, useState } from 'react';
import './SuccessAnimation.css';

interface SuccessAnimationProps {
  isActive: boolean;
}

const SuccessAnimation = ({ isActive }: SuccessAnimationProps) => {
  // هذا المنطق يضمن بقاء العنصر لإكمال حركة التلاشي عند إخفائه
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500); // 500ms مدة التلاشي
      return () => clearTimeout(timer);
    }
  }, [isActive]);
  
  if (!shouldRender) {
    return null;
  }

  return (
    <div 
      className={`success-overlay ${isActive ? 'active' : ''}`}
      aria-live="polite"
    >
      <div className="success-content">
        {/* تم إزالة القبعة من هنا */}
        <p className="success-message">تم الاشتراك بنجاح</p>
        {/* Particle Elements */}
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--i': i + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 1.5}s`,
          } as React.CSSProperties}></div>
        ))}
      </div>
    </div>
  );
};

export default SuccessAnimation;