import { useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import LoginPage from './pages/LoginPage';
import StudentRegisterPage from './pages/StudentRegisterPage';
import TeacherRegisterPage from './pages/TeacherRegisterPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import TeacherDashboardPage from './pages/TeacherDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ProfilePage from './pages/ProfilePage';
import SchedulePage from './pages/SchedulePage';
import StartSessionPage from './pages/StartSessionPage';
import AdminUsersPage from './pages/AdminUsersPage';
import AdminContentPage from './pages/AdminContentPage';
import AdminSchedulePage from './pages/AdminSchedulePage';
import LeaderboardPage from './pages/LeaderboardPage';

// Assets & Components
import bookClosedImg from './assets/images/book-closed-local.png';
// import bookOpenImg from './assets/images/book-open-local.png'; // يبدو أنه غير مستخدم حاليًا
import SuccessAnimation from './components/SuccessAnimation'; // <-- تم استيراد المكون الجديد

function App() {
  const navigate = useNavigate();


  // State for existing animations
  const [bookState, setBookState] = useState({ active: false, phase: '', courseName: '' });
  const [rocketState, setRocketState] = useState({ top: 0, left: 0, visible: false, phase: '' });
  
  // --- تم استبدال الحالة القديمة بالحالة الجديدة للأنيميشن ---
  const [isCelebrating, setIsCelebrating] = useState(false);

  // --- دوال التحكم بالأنيميشن ---
  const triggerBookAnimation = (url: string, name: string) => {
    setBookState({ active: true, phase: 'falling', courseName: name });
  
    setTimeout(() => navigate(url), 2000);
    setTimeout(() => setBookState({ active: false, phase: '', courseName: '' }), 2500);
  };

  const triggerRocketAnimation = (startPosition: { top: number; left: number }) => {
 
    setRocketState({ top: startPosition.top, left: startPosition.left, visible: true, phase: 'phase-one' });
    setTimeout(() => setRocketState(prev => ({ ...prev, phase: 'phase-two' })), 800);
    setTimeout(() => navigate('/about'), 900);
    setTimeout(() => setRocketState({ top: 0, left: 0, visible: false, phase: '' }), 1500);
  };

  // --- تم تحديث دالة التحكم لاستخدام المكون الجديد ---
  const triggerCelebrationAnimation = () => {
  setIsCelebrating(true);
  // إضافة مؤقت لإخفاء الأنيميشن بعد 3 ثوانٍ
  setTimeout(() => {
    setIsCelebrating(false);
  }, 3000); // 3000ms = 3 seconds
};

// لم نعد بحاجة لهذه الدالة، يمكنك حذفها
// const handleCelebrationEnd = () => { ... };

  return (
    <>
      {/* --- عناصر الأنيميشن --- */}
 

      {/* الأنيميشن الجديد للاحتفال */}
      <SuccessAnimation 
  isActive={isCelebrating}
/>

      {/* الأنيميشن القديم للكتاب والصاروخ */}
      <div className={`animation-overlay ${bookState.active ? 'active' : ''}`} />
      <div className={`flying-rocket ${rocketState.visible ? 'visible' : ''} ${rocketState.phase}`} style={{ top: `${rocketState.top}px`, left: `${rocketState.left}px` }}>🚀</div>
      <div className={`book-animation-container ${bookState.active ? 'active' : ''} ${bookState.phase}`}>
        <img src={bookClosedImg} alt="Closed Book" className="book-image" />
        <h2 className="book-animation-title">{bookState.courseName}</h2>
        <div className="particles-container">
          {Array.from({ length: 15 }).map((_, i) => (<span key={i} className="particle-star" />))}
        </div>
      </div>
      
      {/* --- هيكل المسارات الكامل --- */}
      <Routes>
        <Route element={<MainLayout triggerRocketAnimation={triggerRocketAnimation} triggerBookAnimation={triggerBookAnimation} triggerCelebrationAnimation={triggerCelebrationAnimation} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/course/:courseId" element={<CourseDetailsPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register/student" element={<StudentRegisterPage />} />
        <Route path="/register/teacher" element={<TeacherRegisterPage />} />
        
        <Route path="/student" element={<DashboardLayout />}>
            <Route index element={<StudentDashboardPage />} />
            <Route path="dashboard" element={<StudentDashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="schedule" element={<SchedulePage />} />
        </Route>

        <Route path="/teacher" element={<DashboardLayout />}>
            <Route index element={<TeacherDashboardPage />} />
            <Route path="dashboard" element={<TeacherDashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="start-session" element={<StartSessionPage />} />
        </Route>

        <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="users" element={<AdminUsersPage />} />
            <Route path="content" element={<AdminContentPage />} />
            <Route path="schedule" element={<AdminSchedulePage />} />
            <Route path="leaderboard" element={<LeaderboardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;