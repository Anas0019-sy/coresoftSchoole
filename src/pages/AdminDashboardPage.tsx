import { Link } from 'react-router-dom'; // استيراد Link
import './AdminDashboardPage.css';

const AdminDashboardPage = () => {
  return (
    <div className="admin-dashboard">
      <h1>لوحة تحكم المدير</h1>
      
      <div className="summary-grid">
        {/* ... (Summary cards remain the same) ... */}
      </div>

      <div className="management-section">
        <h3>إجراءات سريعة</h3>
        <div className="actions-grid">
          {/* تحويل a إلى Link */}
          <Link to="/admin/users" className="action-card">إدارة المستخدمين</Link>
          <Link to="/admin/content" className="action-card">إدارة المحتوى</Link>
          <Link to="/admin/schedule" className="action-card">مراجعة الجداول</Link>
          <Link to="/admin/leaderboard" className="action-card">تقرير الطلاب والمعلمين</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;