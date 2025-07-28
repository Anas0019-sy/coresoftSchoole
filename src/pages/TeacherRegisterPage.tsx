import { Link } from 'react-router-dom';
// إعادة استخدام نفس الأنماط
import './LoginPage.css';

const TeacherRegisterPage = () => {
  return (
    <div className="login-page">
      <div className="login-container" style={{ maxWidth: '600px' }}>
        <h2>الانضمام كمعلم</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="fullName">الاسم الثلاثي</label>
            <input type="text" id="fullName" />
          </div>
           <div className="form-group">
            <label htmlFor="education">التحصيل العلمي</label>
            <input type="text" id="education" />
          </div>
           <div className="form-group">
            <label htmlFor="experience">الخبرات المكتسبة</label>
            <textarea id="experience" rows={3}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="languages">اللغات</label>
            <input type="text" id="languages" />
          </div>
          <div className="form-group">
            <label htmlFor="residence">مكان الإقامة</label>
            <input type="text" id="residence" />
          </div>
          <div className="form-group">
            <label htmlFor="address">العنوان التفصيلي</label>
            <input type="text" id="address" />
          </div>
           <div className="form-group">
            <label htmlFor="phone">رقم هاتف وجوال</label>
            <input type="tel" id="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input type="email" id="email" />
          </div>
          <button type="submit" className="submit-btn">تقديم الطلب</button>
        </form>
         <Link to="/login">لديك حساب بالفعل؟ تسجيل الدخول</Link>
      </div>
    </div>
  );
};

export default TeacherRegisterPage;