import { useState, useEffect } from 'react';
import './Hero.css';

// 1. مجموعة من الصور الوهمية عالية الجودة من خدمة picsum.photos
const mockImages = [
  'https://picsum.photos/id/2/1600/900',
  'https://picsum.photos/id/10/1600/900',
  'https://picsum.photos/id/17/1600/900',
  'https://picsum.photos/id/20/1600/900',
];

const Hero = () => {
  // 2. حالة لتتبع الصورة المعروضة حاليًا
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 3. useEffect لتغيير الصورة كل 5 ثوانٍ
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % mockImages.length
      );
    }, 5000); // 5000ms = 5 ثوانٍ

    return () => clearInterval(timer); // تنظيف المؤقت عند إغلاق المكون
  }, []);

  return (
    <section className="hero-section">
      {/* 4. حاوية لصور الخلفية المتحركة */}
      <div className="hero-background-slider">
        {mockImages.map((imageUrl, index) => (
          <div
            key={index}
            className={`background-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        ))}
      </div>

      <div className="hero-content">
        <h1 className="hero-title">بوابتك نحو مستقبل تعليمي مشرق</h1>
        <p className="hero-subtitle">
          انضم إلى آلاف الطلاب الذين يكتشفون متعة التعلم مع أفضل المدرسين في منصة كورسوفت.
        </p>
        <button className="hero-cta-button">
          اكتشف المواد الدراسية
        </button>
      </div>
    </section>
  );
};

export default Hero;