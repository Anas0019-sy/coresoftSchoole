import './ContactPage.css';
// --- 1. تم استيراد الأيقونات من المكتبة ---
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>تواصل معنا</h1>
        <p>نحن هنا للمساعدة. سواء كان لديك سؤال أو اقتراح، لا تتردد في التواصل.</p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <h3>معلومات الاتصال</h3>
          <p><strong>العنوان:</strong> شارع المعرفة، مبنى 123، أمستردام، هولندا</p>
          <p><strong>الهاتف:</strong> +31 20 123 4567</p>
          <p><strong>البريد الإلكتروني:</strong> contact@koresoft.com</p>

          {/* --- 2. هذا هو القسم الجديد الذي تمت إضافته --- */}
          <div className="social-icons-container">
            <a href="https://wa.me/31201234567" target="_blank" rel="noopener noreferrer" aria-label="تواصل معنا عبر واتساب">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="صفحتنا على فيسبوك">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="حسابنا على انستغرام">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/@YOUR_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="حسابنا على تيك توك">
              <FaTiktok />
            </a>
            <a href="mailto:contact@koresoft.com" aria-label="أرسل لنا بريدًا إلكترونيًا">
              <FaEnvelope />
            </a>
          </div>
          {/* --- نهاية القسم الجديد --- */}

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.938899723255!2d4.881515515795431!3d52.3702159797865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c1f4e5a9a9%3A0x6d9a2d3f7d8c6b9!2sDam%20Square!5e0!3m2!1sen!2snl!4v1672852590747!5m2!1sen!2snl"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form className="contact-form">
          {/* باقي الفورم كما هو */}
          <h3>أرسل لنا رسالة</h3>
          <div className="form-group">
            <label htmlFor="name">الاسم</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">الموضوع</label>
            <input type="text" id="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">الرسالة</label>
            <textarea id="message" rows={5}></textarea>
          </div>
          <button type="submit" className="submit-btn">إرسال</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;