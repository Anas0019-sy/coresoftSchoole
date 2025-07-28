import { Link } from 'react-router-dom';
import './TeacherDashboardPage.css'; // تأكد من وجود هذا السطر

const TeacherDashboardPage = () => {
  return (
    <div className="teacher-dashboard">
      <h1>لوحة تحكم المعلم</h1>
      
      <div className="dashboard-grid">
        <div className="dashboard-card schedule-card">
          <h3>حصصك القادمة</h3>
          <ul>
            <li>
              <span>الأحد - 4:00م</span>
              <strong>مادة العلوم</strong>
              <span>(5 طلاب)</span>
            </li>
            <li>
              <span>الاثنين - 6:00م</span>
              <strong>مادة الرياضيات</strong>
              <span>(3 طلاب)</span>
            </li>
          </ul>
          <Link to="/teacher/start-session" className="start-session-link">
            بدء الجلسة الآن
          </Link>
        </div>

        <div className="dashboard-card availability-card">
          <h3>قدّم الأوقات المتاحة لك</h3>
          <p>أخبر الإدارة بالأوقات التي تفضلها للأسبوع القادم.</p>
          <textarea placeholder="مثال: الأحد من 4م إلى 6م، الثلاثاء من 5م إلى 7م..."></textarea>
          <button>إرسال</button>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboardPage;