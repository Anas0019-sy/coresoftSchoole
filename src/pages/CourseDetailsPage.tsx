import { useState } from 'react';
import './CourseDetailsPage.css';

// --- 1. البيانات التجريبية الاحترافية ---
const courseData = {
  title: 'مادة العلوم',
  subtitle: 'استكشف عجائب الكون من الذرة إلى المجرة.',
  overview: 'تم تصميم هذه المادة لتزويد الطلاب بفهم أساسي وشامل للمبادئ العلمية الأساسية في الفيزياء والكيمياء والأحياء. تهدف الدورة إلى إثارة فضول الطلاب وتشجيعهم على التفكير النقدي وحل المشكلات من خلال تجارب عملية وأمثلة من واقع الحياة.',
  levels: [
    {
      name: 'المستوى الأول: أساسيات العلوم',
      lessons: [
        { id: 1, title: 'الدرس 1: ما هي الخلية؟ وأنواعها' },
        { id: 2, title: 'الدرس 2: حالات المادة الثلاث والتحولات بينها' },
        { id: 3, title: 'الدرس 3: مقدمة إلى الجدول الدوري للعناصر' },
        { id: 4, title: 'الدرس 4: أساسيات الحركة والطاقة' },
        { id: 5, title: 'الدرس 5: النظام الشمسي والكواكب' },
      ],
    },
    {
      name: 'المستوى الثاني: مفاهيم متقدمة',
      lessons: [
        { id: 1, title: 'الدرس 1: الوراثة ومبادئ الحمض النووي (DNA)' },
        { id: 2, title: 'الدرس 2: التفاعلات الكيميائية وأنواعها' },
        { id: 3, title: 'الدرس 3: قوانين نيوتن للحركة وتطبيقاتها' },
        { id: 4, title: 'الدرس 4: الكهرباء والمغناطيسية' },
        { id: 5, title: 'الدرس 5: اختبار وتقييم المستوى الثاني' },
      ],
    },
  ],
  teacher: {
    name: 'الانسة سعاد الاحمد',
    // --- تم تغيير رابط الصورة هنا ---
    photo: 'https://picsum.photos/id/64/150/150',
    bio: 'حاصل على شهادة الماجستير في الكيمياء الحيوية مع خبرة تمتد لأكثر من ١٠ سنوات في تدريس العلوم للمراحل الإعدادية والثانوية. أؤمن بأن تبسيط المفاهيم المعقدة وجعل العلم ممتعًا هو مفتفاح التفوق الدراسي.',
    certificates: [
      'شهادة في طرق التدريس الحديثة - جامعة أمستردام',
      'شهادة مدرب معتمد من منظمة العلوم الدولية',
    ],
  },
};

const CourseDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // --- 2. تحديث دالة عرض المحتوى ---
  const renderContent = () => {
    switch (activeTab) {
      case 'level1':
        return (
          <div>
            <h3>{courseData.levels[0].name}</h3>
            <p>عدد الدروس: {courseData.levels[0].lessons.length}</p>
            <ul className="lessons-list">
              {courseData.levels[0].lessons.map(lesson => <li key={lesson.id}>{lesson.title}</li>)}
            </ul>
          </div>
        );
      case 'level2':
        return (
          <div>
            <h3>{courseData.levels[1].name}</h3>
            <p>عدد الدروس: {courseData.levels[1].lessons.length}</p>
            <ul className="lessons-list">
              {courseData.levels[1].lessons.map(lesson => <li key={lesson.id}>{lesson.title}</li>)}
            </ul>
          </div>
        );
      case 'teacher':
        return (
          <div className="teacher-profile">
            <img src={courseData.teacher.photo} alt={courseData.teacher.name} className="teacher-photo" />
            <div className="teacher-info">
              <h3>{courseData.teacher.name}</h3>
              <p>{courseData.teacher.bio}</p>
              <h4>الشهادات والخبرات:</h4>
              <ul>
                {courseData.teacher.certificates.map(cert => <li key={cert}>{cert}</li>)}
              </ul>
            </div>
          </div>
        );
      case 'overview':
      default:
        return (
          <div>
            <h3>نظرة عامة على المادة</h3>
            <p>{courseData.overview}</p>
          </div>
        );
    }
  };

  return (
    <div className="course-details-page">
      <div className="course-header-details">
        {/* --- 3. ربط الواجهة بالبيانات الجديدة --- */}
        <h1>{courseData.title}</h1>
        <p>{courseData.subtitle}</p>
      </div>

      <div className="course-tabs">
        <button onClick={() => setActiveTab('overview')} className={activeTab === 'overview' ? 'active' : ''}>نظرة عامة</button>
        <button onClick={() => setActiveTab('level1')} className={activeTab === 'level1' ? 'active' : ''}>المستوى الأول</button>
        <button onClick={() => setActiveTab('level2')} className={activeTab === 'level2' ? 'active' : ''}>المستوى الثاني</button>
        <button onClick={() => setActiveTab('teacher')} className={activeTab === 'teacher' ? 'active' : ''}>المعلم</button>
      </div>

      <div className="course-tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default CourseDetailsPage;