import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ triggerRocketAnimation }: { triggerRocketAnimation: (pos: { top: number, left: number }) => void }) => {
  const rocketRef = useRef<HTMLSpanElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (rocketRef.current) {
      const rect = rocketRef.current.getBoundingClientRect();
      triggerRocketAnimation({ top: rect.top, left: rect.left });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      
    {/* 3. الشعار (أقصى اليمين) */}
      <div className="navbar-logo" onClick={handleLogoClick}>
        <span>KoreSoft</span>
        <span className="rocket-icon" ref={rocketRef}>🚀</span>
      </div>
      {/* 2. القائمة التي ستكون في المنتصف وتتحول لقائمة منسدلة */}
      <div className={`navbar-menu-container ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/" onClick={closeMenu}>الرئيسية</Link></li>
          <li><Link to="/courses" onClick={closeMenu}>المواد الدراسية</Link></li>
          <li><Link to="/pricing" onClick={closeMenu}>الاشتراكات</Link></li>
          <li><Link to="/about" onClick={closeMenu}>من نحن</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>اتصل بنا</Link></li>
        </ul>
      </div>

      
      {/* 1. زر تسجيل الدخول (أقصى اليسار) */}
      <Link to="/login" className="navbar-login-btn" onClick={closeMenu}>
        تسجيل الدخول
      </Link>

      {/* 4. زر البرجر (يظهر فقط على الموبايل) */}
      <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;