import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">ماذا يقولون عنا؟</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p className="testimonial-quote">"المنصة رائعة ومنظمة، ابني أصبح يحب مادة الرياضيات بفضل الشرح المبسط والأساليب التفاعلية."</p>
          <div className="testimonial-author">
            <img src="https://picsum.photos/100/100?random=4" alt="Author" />
            <div className="author-info">
              <h4>أحمد العلي</h4>
              <span>ولي أمر</span>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-quote">"كنت أواجه صعوبة في مادة العلوم، لكن مع مدرسي كورسوفت أصبحت من أفضل الطلاب في صفي. شكرًا لكم!"</p>
          <div className="testimonial-author">
            <img src="https://picsum.photos/100/100?random=5" alt="Author" />
            <div className="author-info">
              <h4>سارة مراد</h4>
              <span>طالبة في المنصة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;