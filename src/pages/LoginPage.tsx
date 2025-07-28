import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>تسجيل الدخول</h2>
        <p>اختر نوع الحساب للدخول إلى لوحة التحكم الخاصة بك.</p>
        
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input type="email" id="email" placeholder="ادخل بريدك الإلكتروني" />
          </div>
          <div className="form-group">
            <label htmlFor="password">كلمة المرور</label>
            <input type="password" id="password" placeholder="ادخل كلمة المرور" />
          </div>
          <button type="submit" className="submit-btn">تسجيل الدخول</button>
        </form>

        <div className="auth-links">
          <Link to="/register/student">إنشاء حساب طالب جديد</Link>
          <span>|</span>
          <Link to="/register/teacher">الانضمام كمعلم</Link>
        </div>

        <div className="dashboard-links">
          <p>أو قم بالدخول مباشرة (لغرض التجربة):</p>
          <Link to="/student/dashboard" className="dashboard-btn student">لوحة تحكم الطالب</Link>
          <Link to="/teacher/dashboard" className="dashboard-btn teacher">لوحة تحكم المعلم</Link>
          <Link to="/admin/dashboard" className="dashboard-btn admin">لوحة تحكم المدير</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;