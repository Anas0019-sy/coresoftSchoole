import { Link } from 'react-router-dom';
// التأكد من استيراد الأنماط الصحيحة
import './LoginPage.css'; 

const StudentRegisterPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>إنشاء حساب طالب جديد</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="fullName">الاسم الثلاثي</label>
            <input type="text" id="fullName" />
          </div>
          <div className="form-group">
            <label htmlFor="motherName">اسم الأم</label>
            <input type="text" id="motherName" />
          </div>
          <div className="form-group">
            <label htmlFor="age">العمر</label>
            <input type="number" id="age" />
          </div>
          <div className="form-group">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="country">البلد</label>
            <input type="text" id="country" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">رقم التواصل</label>
            <input type="tel" id="phone" />
          </div>
          <button type="submit" className="submit-btn">إنشاء الحساب</button>
        </form>
        <Link to="/login">لديك حساب بالفعل؟ تسجيل الدخول</Link>
      </div>
    </div>
  );
};

export default StudentRegisterPage;