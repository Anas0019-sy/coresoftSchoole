import './AdminPages.css'; // استخدام نفس ملف CSS

const AdminSchedulePage = () => {
  // Logic to generate calendar days (simplified for prototype)
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const weekdays = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

  return (
    <div className="admin-page">
      <h1>مراجعة وتعيين جدول الشهر</h1>
      <div className="admin-content">
        <div className="calendar-grid">
          {weekdays.map(day => <div key={day} className="calendar-header">{day}</div>)}
          {/* Add empty cells for month start offset */}
          {Array.from({ length: 2 }).map((_, i) => <div key={`empty-${i}`} className="calendar-day empty"></div>)}
          {days.map(day => (
            <div key={day} className="calendar-day">
              <span className="day-number">{day}</span>
              <select className="lesson-select">
                <option value="">اختر درس...</option>
                <option value="science">علوم - 4م</option>
                <option value="math">رياضيات - 5م</option>
                <option value="history">تاريخ - 6م</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSchedulePage;