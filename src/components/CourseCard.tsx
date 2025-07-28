import { useOutletContext } from 'react-router-dom';
import './CourseCard.css';

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
}

const CourseCard = ({ image, title, description }: CourseCardProps) => {
  // Update the type for the context function
  const { triggerBookAnimation } = useOutletContext<{ triggerBookAnimation: (url: string, name: string) => void }>();
  
  const courseLink = `/course/${title.toLowerCase().replace(/ /g, '-')}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (triggerBookAnimation) {
      // Pass the URL and the course title to the animation function
      triggerBookAnimation(courseLink, title);
    }
  };

  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-card-image" />
      <div className="course-card-content">
        <h3 className="course-card-title">{title}</h3>
        <p className="course-card-description">{description}</p>
        <a href={courseLink} onClick={handleClick} className="course-card-button">
          عرض التفاصيل
        </a>
      </div>
    </div>
  );
};

export default CourseCard;