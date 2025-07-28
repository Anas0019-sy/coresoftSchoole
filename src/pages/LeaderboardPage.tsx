import './AdminPages.css'; // استخدام نفس ملف CSS

const LeaderboardPage = () => {
  return (
    <div className="admin-page">
      <h1>تقرير الطلاب والمعلمين المتفوقين</h1>
      <div className="leaderboard-container">
        <div className="leaderboard-card">
          <h2>🏆 الطالب الأكثر إنجازًا</h2>
          <div className="leaderboard-profile">
            <span className="leaderboard-avatar">👨‍🎓</span>
            <h3>أحمد العلي</h3>
            <p>1,250 نقطة</p>
          </div>
        </div>
        <div className="leaderboard-card">
          <h2>⭐ المعلم الأعلى تقييمًا</h2>
          <div className="leaderboard-profile">
            <span className="leaderboard-avatar">👩‍🏫</span>
            <h3>خالد الأحمد</h3>
            <p>4.9 نجوم (50 مراجعة)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;