import './StudentDashboardPage.css';

const StudentDashboardPage = () => {
  return (
    <div className="student-dashboard">
      <h1>أهلاً بك يا أحمد!</h1>
      
      <div className="dashboard-grid">
        <div className="dashboard-card schedule-card">
          <h3>جدولك الدراسي هذا الأسبوع</h3>
          <ul>
            <li><span>الأحد:</span> مادة العلوم - 4:00 مساءً</li>
            <li><span>الثلاثاء:</span> مادة الرياضيات - 5:00 مساءً</li>
            <li><span>الخميس:</span> مادة التاريخ - 6:00 مساءً</li>
          </ul>
        </div>

        <div className="dashboard-card subscription-card">
          <h3>حالة اشتراكك</h3>
          <p>الباقة الحالية: <strong>الباقة الذهبية</strong></p>
          <p>تاريخ الانتهاء: 25 أغسطس 2025</p>
          <button>تجديد الاشتراك</button>
        </div>

        <div className="dashboard-card rewards-card">
          <h3>نظام المكافآت 🌟</h3>
          <p>نقاطك المكتسبة: <strong>1,250 نقطة</strong></p>
          <p>واصل التقدم لفتح المزيد من الجوائز!</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPage;