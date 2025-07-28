import './SchedulePage.css';

const SchedulePage = () => {
  return (
    <div className="schedule-page">
      <h1>جدولي الدراسي المفصل</h1>
      <p>هنا يمكنك عرض جميع حصصك الدراسية لهذا الأسبوع.</p>

      <div className="schedule-container">
        <div className="day-schedule">
          <h3>الأحد</h3>
          <div className="session-card">
            <h4>مادة العلوم</h4>
            <p><strong>الوقت:</strong> 4:00 - 5:00 مساءً</p>
            <p><strong>المعلم:</strong> أ. خالد</p>
            <a href="#" className="join-btn">سيظهر رابط الانضمام هنا</a>
          </div>
        </div>

        <div className="day-schedule">
          <h3>الاثنين</h3>
          <p className="no-sessions">لا توجد حصص في هذا اليوم.</p>
        </div>

        <div className="day-schedule">
          <h3>الثلاثاء</h3>
          <div className="session-card">
            <h4>مادة الرياضيات</h4>
            <p><strong>الوقت:</strong> 5:00 - 6:00 مساءً</p>
            <p><strong>المعلم:</strong> أ. فاطمة</p>
            <a href="#" className="join-btn">سيظهر رابط الانضمام هنا</a>
          </div>
        </div>
        
        <div className="day-schedule">
          <h3>الأربعاء</h3>
           <p className="no-sessions">لا توجد حصص في هذا اليوم.</p>
        </div>

        <div className="day-schedule">
          <h3>الخميس</h3>
          <div className="session-card">
            <h4>مادة التاريخ</h4>
            <p><strong>الوقت:</strong> 6:00 - 7:00 مساءً</p>
            <p><strong>المعلم:</strong> أ. يوسف</p>
            <a href="#" className="join-btn">سيظهر رابط الانضمام هنا</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;