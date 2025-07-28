import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>KoreSoft 🚀</h3>
          <p>منصة تعليمية تهدف إلى جعل التعلم ممتعًا ومتاحًا للجميع بأحدث الأساليب التفاعلية.</p>
        </div>
        <div className="footer-links">
          <h4>روابط سريعة</h4>
          <ul>
            <li><a href="/about">من نحن</a></li>
            <li><a href="/courses">المواد الدراسية</a></li>
            <li><a href="/pricing">الاشتراكات</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>تواصل معنا</h4>
          {/* Add social media icons here later */}
          <p>contact@koresoft.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 KoreSoft. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;