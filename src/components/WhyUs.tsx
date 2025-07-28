import './WhyUs.css';

const WhyUs = () => {
  return (
    <section className="why-us-section">
      <h2 className="section-title">لماذا تختار منصة كورسوفت؟</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🧑‍🏫</div>
          <h3 className="feature-title">مدرسون خبراء</h3>
          <p className="feature-text">نخبة من أفضل المدرسين لمساعدتك على فهم المواد الدراسية بكل سهولة ومتعة.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💻</div>
          <h3 className="feature-title">فصول تفاعلية</h3>
          <p className="feature-text">فصول افتراضية مباشرة عبر Google Meet تضمن لك تجربة تعليمية تفاعلية ومباشرة.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3 className="feature-title">متابعة التقدم</h3>
          <p className="feature-text">نظام مكافآت وتقارير لمتابعة تقدمك وتحفيزك على تحقيق أفضل النتائج.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;