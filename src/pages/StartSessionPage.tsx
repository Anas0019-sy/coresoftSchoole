import { useState } from 'react';
import './StartSessionPage.css';

const enrolledStudents = [
  { id: 1, name: 'علي حسن' },
  { id: 2, name: 'فاطمة الزهراء' },
  { id: 3, name: 'يوسف عبدالله' },
  { id: 4, name: 'نور محمد' },
  { id: 5, name: 'حسن خالد' },
];

const StartSessionPage = () => {
  const [isSent, setIsSent] = useState(false);

  const handleShare = () => {
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000); // إخفاء الرسالة بعد 3 ثوانٍ
  };

  return (
    <div className="start-session-page">
      <h1>بدء جلسة: مادة العلوم</h1>
      <p>هذه هي واجهة التحكم لبدء حصتك الدراسية الحالية.</p>

      <div className="session-container">
        <div className="students-list">
          <h3>الطلاب المسجلون ({enrolledStudents.length})</h3>
          <ul>
            {enrolledStudents.map(student => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul>
        </div>

        <div className="session-actions">
          <h3>الإجراءات</h3>
          <a 
            href="http://googleusercontent.com/5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="action-btn create-link-btn"
          >
            ➕ إنشاء رابط Google Meet
          </a>
          <button 
            className="action-btn share-btn" 
            onClick={handleShare}
            disabled={isSent}
          >
            ✉️ مشاركة الرابط مع الطلاب
          </button>
          
          {isSent && (
            <div className="success-message">
              ✅ تم إرسال الرابط بنجاح!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartSessionPage;