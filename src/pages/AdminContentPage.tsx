import { useState } from 'react';
import Modal from '../components/Modal'; // استيراد المكون الجديد
import './AdminPages.css';

const AdminContentPage = () => {
  const [notification, setNotification] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };
  
  const handleOpenModal = (mode: 'add' | 'edit') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleSave = () => {
    showNotification(modalMode === 'add' ? 'تمت إضافة المادة بنجاح!' : 'تم حفظ التعديلات!');
    handleCloseModal();
  };

  return (
    <div className="admin-page">
      {notification && <div className="notification show">{notification}</div>}
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title={modalMode === 'add' ? 'إضافة مادة جديدة' : 'تعديل المادة'}
      >
        <div className="form-group">
          <label>اسم المادة</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>عدد المستويات</label>
          <input type="number" />
        </div>
        <button className="add-new-btn" style={{width: '100%', marginTop: '1rem'}} onClick={handleSave}>
          {modalMode === 'add' ? 'إضافة' : 'حفظ التعديلات'}
        </button>
      </Modal>

      <h1>إدارة المحتوى (المواد والدروس)</h1>
      <div className="admin-content">
        <button className="add-new-btn" onClick={() => handleOpenModal('add')}>+ إضافة مادة جديدة</button>
        <table>
          <thead><tr><th>اسم المادة</th><th>عدد المستويات</th><th>إجراءات</th></tr></thead>
          <tbody>
            <tr>
              <td>مادة العلوم</td><td>2</td>
              <td>
                <button className="action-btn edit" onClick={() => handleOpenModal('edit')}>تعديل</button>
                <button className="action-btn delete" onClick={() => showNotification('تم حذف مادة العلوم')}>حذف</button>
              </td>
            </tr>
            <tr>
              <td>مادة الرياضيات</td><td>3</td>
              <td>
                <button className="action-btn edit" onClick={() => handleOpenModal('edit')}>تعديل</button>
                <button className="action-btn delete" onClick={() => showNotification('تم حذف مادة الرياضيات')}>حذف</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContentPage;