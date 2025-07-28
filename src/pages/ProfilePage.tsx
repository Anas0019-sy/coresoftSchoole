import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h1>إعدادات الملف الشخصي</h1>
      
      <div className="profile-form-container">
        <form>
          <section className="form-section">
            <h3>المعلومات الشخصية</h3>
            <div className="form-group">
              <label htmlFor="fullName">الاسم الكامل</label>
              <input type="text" id="fullName" defaultValue="أحمد العلي" />
            </div>
            <div className="form-group">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input type="email" id="email" defaultValue="ahmad@example.com" readOnly />
            </div>
          </section>

          <section className="form-section">
            <h3>تغيير كلمة المرور</h3>
            <div className="form-group">
              <label htmlFor="currentPassword">كلمة المرور الحالية</label>
              <input type="password" id="currentPassword" />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">كلمة المرور الجديدة</label>
              <input type="password" id="newPassword" />
            </div>
          </section>

          <button type="submit" className="submit-btn">حفظ التغييرات</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;