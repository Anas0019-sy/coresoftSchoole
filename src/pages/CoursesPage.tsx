import CourseCard from '../components/CourseCard';
// سنستخدم نفس ملف الأنماط الخاص بالقسم الموجود في الصفحة الرئيسية لإعادة استخدام الأنماط
import '../components/FeaturedCourses.css'; 

// بيانات وهمية أكثر من الصفحة الرئيسية لتمثيل كل المواد
const allCourses = [
  { image: 'https://picsum.photos/400/250?random=1', title: 'مادة العلوم', description: 'استكشف عجائب الكون من الذرة إلى المجرة.' },
  { image: 'https://picsum.photos/400/250?random=2', title: 'مادة التاريخ', description: 'رحلة عبر الزمن لفهم الماضي الذي شكّل حاضرنا.' },
  { image: 'https://picsum.photos/400/250?random=3', title: 'مادة الرياضيات', description: 'طور مهاراتك في حل المشكلات مع أساسيات الرياضيات.' },
  { image: 'https://picsum.photos/400/250?random=6', title: 'اللغة العربية', description: 'أتقن قواعد اللغة وجمالياتها مع دروس تطبيقية.' },
  { image: 'https://picsum.photos/400/250?random=7', title: 'الجغرافيا', description: 'اكتشف تضاريس العالم وثقافاته المتنوعة.' },
  { image: 'https://picsum.photos/400/250?random=8', title: 'البرمجة للمبتدئين', description: 'خطوتك الأولى في عالم تطوير البرمجيات والتطبيقات.' },
];

const CoursesPage = () => {
  return (
    <div style={{ padding: '4rem 2rem' }}>
      <h1 className="section-title">جميع المواد الدراسية</h1>
      <div className="courses-grid">
        {allCourses.map((course) => (
          <CourseCard
            key={course.title}
            image={course.image}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;