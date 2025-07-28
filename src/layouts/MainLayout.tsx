import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  triggerRocketAnimation: (pos: { top: number, left: number }) => void;
  triggerBookAnimation: (url: string, name: string) => void;
  triggerCelebrationAnimation: () => void; // التأكد من وجود هذه الدالة
}

const MainLayout = ({ triggerRocketAnimation, triggerBookAnimation, triggerCelebrationAnimation }: MainLayoutProps) => {
  return (
    <div>
      <Navbar triggerRocketAnimation={triggerRocketAnimation} />
      <main>
        {/* التأكد من تمرير كل الدوال عبر context */}
        <Outlet context={{ triggerBookAnimation, triggerCelebrationAnimation }} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;