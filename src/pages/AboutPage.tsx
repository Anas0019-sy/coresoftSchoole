import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>عن منصة كورسوفت</h1>
        <p>نحن نؤمن بقوة التعليم في تغيير الحياة، ومهمتنا هي جعل التعلم عالي الجودة متاحًا للجميع.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>رؤيتنا</h2>
          <p>أن نكون المنصة التعليمية الرائدة في العالم العربي، والتي تجمع بين التكنولوجيا المتقدمة وأفضل الممارسات التربوية لخلق تجربة تعليمية فريدة ومحفزة.</p>
        </div>

        <div className="about-section">
          <h2>مهمتنا</h2>
          <p>توفير بيئة تعليمية آمنة وتفاعلية تمكّن الطلاب من تحقيق إمكاناتهم الكاملة، وتدعم المدرسين بأدوات مبتكرة لتسهيل عملية التعليم.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;