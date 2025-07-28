import { Outlet, Link, useLocation } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const location = useLocation();
  const userType = location.pathname.split('/')[1]; // 'student', 'teacher', or 'admin'

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>KoreSoft</h3>
        </div>
        <nav className="sidebar-nav">
          <Link to={`/${userType}/dashboard`}>الرئيسية</Link>
          {/* إخفاء هذه الروابط إذا كان المستخدم هو المدير */}
          {userType !== 'admin' && (
            <>
              <Link to={`/${userType}/schedule`}>جدولي الدراسي</Link>
              <Link to={`/${userType}/profile`}>ملفي الشخصي</Link>
            </>
          )}
          <Link to="/">العودة للموقع</Link>
        </nav>
      </aside>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;