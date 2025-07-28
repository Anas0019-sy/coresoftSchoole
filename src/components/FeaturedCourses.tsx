import CourseCard from './CourseCard';
import './FeaturedCourses.css';

// بيانات وهمية مع صور حقيقية مؤقتة
const courses = [
  {
    image: 'https://picsum.photos/400/250?random=1', // رابط الصورة الجديدة
    title: 'مادة العلوم',
    description: 'استكشف عجائب الكون من الذرة إلى المجرة.',
  },
  {
    image: 'https://picsum.photos/400/250?random=2', // رابط الصورة الجديدة
    title: 'مادة التاريخ',
    description: 'رحلة عبر الزمن لفهم الماضي الذي شكّل حاضرنا.',
  },
  {
    image: 'https://picsum.photos/400/250?random=3', // رابط الصورة الجديدة
    title: 'مادة الرياضيات',
    description: 'طور مهاراتك في حل المشكلات مع أساسيات الرياضيات.',
  },
];

const FeaturedCourses = () => {
  return (
    <section className="featured-courses-section">
      <h2 className="section-title">أبرز المواد الدراسية</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            image={course.image}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;