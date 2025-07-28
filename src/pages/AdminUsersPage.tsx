import { useState } from 'react';
import type { FormEvent } from 'react'; // The fix is here
import Modal from '../components/Modal';
import './AdminPages.css';

// Initial Data
const initialStudents = [
  { id: 1, fullName: 'أحمد العلي', motherName: 'فاطمة', age: 12, email: 'ahmad@example.com', country: 'سوريا', phone: '12345678' },
  { id: 2, fullName: 'سارة مراد', motherName: 'عائشة', age: 14, email: 'sara@example.com', country: 'مصر', phone: '23456789' },
  { id: 3, fullName: 'يوسف عبدالله', motherName: 'خديجة', age: 11, email: 'yusuf@example.com', country: 'السعودية', phone: '34567890' },
  { id: 4, fullName: 'نور محمد', motherName: 'زينب', age: 13, email: 'nour@example.com', country: 'الأردن', phone: '45678901' },
  { id: 5, fullName: 'علي حسن', motherName: 'مريم', age: 15, email: 'ali@example.com', country: 'العراق', phone: '56789012' },
];
const initialTeachers = [
  { id: 1, fullName: 'خالد الأحمد', education: 'ماجستير فيزياء', experience: '10 سنوات', languages: 'العربية, الإنجليزية', residence: 'أمستردام', phone: '11122233', email: 'khaled@example.com' },
  { id: 2, fullName: 'فاطمة المصري', education: 'دكتوراه أدب عربي', experience: '15 سنة', languages: 'العربية, الفرنسية', residence: 'القاهرة', phone: '22233344', email: 'fatima@example.com' },
  { id: 3, fullName: 'عمر الخليلي', education: 'بكالوريوس رياضيات', experience: '7 سنوات', languages: 'العربية', residence: 'الرياض', phone: '33344455', email: 'omar@example.com' },
  { id: 4, fullName: 'هبة الشامي', education: 'ماجستير تاريخ', experience: '12 سنة', languages: 'العربية, الإنجليزية', residence: 'دمشق', phone: '44455566', email: 'heba@example.com' },
  { id: 5, fullName: 'محمد إقبال', education: 'بكالوريوس علوم حاسوب', experience: '8 سنوات', languages: 'العربية, الإنجليزية', residence: 'دبي', phone: '55566677', email: 'iqbal@example.com' },
];

type Student = typeof initialStudents[0];
type Teacher = typeof initialTeachers[0];

const AdminUsersPage = () => {
  const [students, setStudents] = useState(initialStudents);
  const [teachers, setTeachers] = useState(initialTeachers);

  const [activeTab, setActiveTab] = useState('students');
  const [notification, setNotification] = useState('');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: 'add' | 'edit';
    data: Student | Teacher | null;
  }>({ isOpen: false, mode: 'add', data: null });

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleOpenModal = (mode: 'add' | 'edit', data: Student | Teacher | null = null) => {
    setModalState({ isOpen: true, mode, data });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, mode: 'add', data: null });
  };
  
  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());

    if (modalState.mode === 'edit' && modalState.data) {
      if (activeTab === 'students') {
        setStudents(currentStudents =>
          currentStudents.map(s =>
            s.id === modalState.data!.id ? { ...s, ...updatedData, age: Number(updatedData.age) } : s
          )
        );
      } else {
        setTeachers(currentTeachers =>
          currentTeachers.map(t =>
            t.id === modalState.data!.id ? { ...t, ...updatedData } : t
          )
        );
      }
      showNotification('تم حفظ التعديلات بنجاح!');
    }

    handleCloseModal();
  };

  const handleDelete = (user: Student | Teacher) => {
    if (window.confirm(`هل أنت متأكد أنك تريد حذف ${user.fullName}؟`)) {
      if (activeTab === 'students') {
        setStudents(currentStudents => currentStudents.filter(s => s.id !== user.id));
      } else {
        setTeachers(currentTeachers => currentTeachers.filter(t => t.id !== user.id));
      }
      showNotification(`تم حذف ${user.fullName} بنجاح`);
    }
  };

  const studentForm = (
    <>
      <div className="form-group"><label>الاسم الثلاثي</label><input name="fullName" type="text" defaultValue={(modalState.data as Student)?.fullName || ''} /></div>
      <div className="form-group"><label>اسم الأم</label><input name="motherName" type="text" defaultValue={(modalState.data as Student)?.motherName || ''} /></div>
      <div className="form-group"><label>العمر</label><input name="age" type="number" defaultValue={(modalState.data as Student)?.age || ''} /></div>
      <div className="form-group"><label>البريد الإلكتروني</label><input name="email" type="email" defaultValue={(modalState.data as Student)?.email || ''} /></div>
      <div className="form-group"><label>البلد</label><input name="country" type="text" defaultValue={(modalState.data as Student)?.country || ''} /></div>
      <div className="form-group"><label>رقم التواصل</label><input name="phone" type="tel" defaultValue={(modalState.data as Student)?.phone || ''} /></div>
    </>
  );

  const teacherForm = (
    <>
      <div className="form-group"><label>الاسم الثلاثي</label><input name="fullName" type="text" defaultValue={(modalState.data as Teacher)?.fullName || ''} /></div>
      <div className="form-group"><label>التحصيل العلمي</label><input name="education" type="text" defaultValue={(modalState.data as Teacher)?.education || ''} /></div>
      <div className="form-group"><label>الخبرات المكتسبة</label><textarea name="experience" rows={3} defaultValue={(modalState.data as Teacher)?.experience || ''}></textarea></div>
      <div className="form-group"><label>اللغات</label><input name="languages" type="text" defaultValue={(modalState.data as Teacher)?.languages || ''} /></div>
      <div className="form-group"><label>مكان الإقامة</label><input name="residence" type="text" defaultValue={(modalState.data as Teacher)?.residence || ''} /></div>
      <div className="form-group"><label>رقم هاتف وجوال</label><input name="phone" type="tel" defaultValue={(modalState.data as Teacher)?.phone || ''} /></div>
      <div className="form-group"><label>البريد الإلكتروني</label><input name="email" type="email" defaultValue={(modalState.data as Teacher)?.email || ''} /></div>
    </>
  );

  return (
    <div className="admin-page">
      {notification && <div className="notification show">{notification}</div>}
      
      <Modal 
        isOpen={modalState.isOpen} 
        onClose={handleCloseModal}
        title={modalState.mode === 'add' ? `إضافة ${activeTab === 'students' ? 'طالب' : 'معلم'}` : `تعديل بيانات`}
      >
        <form onSubmit={handleSave}>
          {activeTab === 'students' ? studentForm : teacherForm}
          <button type="submit" className="add-new-btn" style={{width: '100%', marginTop: '1rem'}}>
            {modalState.mode === 'add' ? 'إضافة' : 'حفظ التعديلات'}
          </button>
        </form>
      </Modal>

      <h1>إدارة المستخدمين</h1>
      <div className="admin-tabs">
        <button onClick={() => setActiveTab('students')} className={activeTab === 'students' ? 'active' : ''}>الطلاب</button>
        <button onClick={() => setActiveTab('teachers')} className={activeTab === 'teachers' ? 'active' : ''}>المعلمين</button>
      </div>

      <div className="admin-content">
        <button className="add-new-btn" onClick={() => handleOpenModal('add')}>+ إضافة جديد</button>
        {activeTab === 'students' && (
          <table>
            <thead><tr><th>اسم الطالب</th><th>البريد الإلكتروني</th><th>إجراءات</th></tr></thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.fullName}</td><td>{student.email}</td>
                  <td>
                    <button className="action-btn edit" onClick={() => handleOpenModal('edit', student)}>تعديل</button>
                    <button className="action-btn delete" onClick={() => handleDelete(student)}>حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === 'teachers' && (
          <table>
            <thead><tr><th>اسم المعلم</th><th>البريد الإلكتروني</th><th>إجراءات</th></tr></thead>
            <tbody>
              {teachers.map(teacher => (
                <tr key={teacher.id}>
                  <td>{teacher.fullName}</td><td>{teacher.email}</td>
                  <td>
                    <button className="action-btn edit" onClick={() => handleOpenModal('edit', teacher)}>تعديل</button>
                    <button className="action-btn delete" onClick={() => handleDelete(teacher)}>حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminUsersPage;