    import { useState } from 'react';
    import { useOutletContext } from 'react-router-dom';
    import PricingCard from '../components/PricingCard';
    import Modal from '../components/Modal';
    import './PricingPage.css';

    const pricingPlans = [
    { planName: 'الباقة الفضية', price: '25$', features: ['الوصول إلى مادة واحدة', 'دعم عبر البريد الإلكتروني', 'متابعة أساسية للتقدم'], details: 'مثالية للطالب الذي يركز على مادة واحدة لتحسين مستواه.' },
    { planName: 'الباقة الذهبية', price: '50$', features: ['الوصول إلى 3 مواد', 'دعم فوري عبر الدردشة', 'تقارير تقدم تفصيلية', 'حضور ورشات عمل'], isFeatured: true, details: 'الأكثر شيوعًا، توفر توازنًا مثاليًا بين الوصول للمحتوى والدعم المباشر.' },
    { planName: 'الباقة الماسية', price: '80$', features: ['الوصول لجميع المواد', 'جلسات متابعة فردية', 'دعم على مدار الساعة', 'مكافآت حصرية'], details: 'التجربة الكاملة للطالب المتفوق، مع دعم شخصي وميزات حصرية.' },
    ];

    type Plan = typeof pricingPlans[0];
    type AppContext = {
        triggerBookAnimation: (url: string, name: string) => void;
        triggerCelebrationAnimation: () => void;
    }

    const PricingPage = () => {
    const { triggerCelebrationAnimation } = useOutletContext<AppContext>();

    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'transfer'>('paypal');

    const handleChoosePlan = (plan: Plan) => {
        setSelectedPlan(plan);
        setIsDetailsModalOpen(true);
    };

    const handleProceedToPayment = () => {
        setIsDetailsModalOpen(false);
        setIsPaymentModalOpen(true);
    };

    const handleFinalSubscribe = () => {
        setIsPaymentModalOpen(false);
        if (triggerCelebrationAnimation) {
        triggerCelebrationAnimation();
        }
    };

    return (
        <div className="pricing-page">
        <Modal isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)} title={`تفاصيل ${selectedPlan?.planName}`}>
            <p>{selectedPlan?.details}</p>
            <ul className="plan-features-modal">
            {selectedPlan?.features.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
            <button className="add-new-btn" style={{width: '100%'}} onClick={handleProceedToPayment}>الاشتراك الآن</button>
        </Modal>

        <Modal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} title="إتمام عملية الدفع">
            <div className="payment-methods">
            <button onClick={() => setPaymentMethod('paypal')} className={paymentMethod === 'paypal' ? 'active' : ''}>PayPal</button>
            <button onClick={() => setPaymentMethod('transfer')} className={paymentMethod === 'transfer' ? 'active' : ''}>حوالة بنكية</button>
            </div>
            {paymentMethod === 'paypal' ? (
            <div className="paypal-form">
                <input type="email" placeholder="بريد باي بال الإلكتروني" />
                <input type="password" placeholder="كلمة المرور" />
            </div>
            ) : (
            <div className="transfer-form">
                <select>
                <option>اختر خدمة التحويل</option>
                <option>ويسترن يونيون</option>
                <option>الهرم</option>
                <option>بنك الشام</option>
                <option>بنك بيمو السعودي الفرنسي</option>
                </select>
                <input type="text" placeholder="الاسم الثلاثي" />
                <input type="text" placeholder="الرقم الوطني" />
                <input type="tel" placeholder="رقم الهاتف" />
            </div>
            )}
            <button className="add-new-btn" style={{width: '100%', marginTop: '1rem'}} onClick={handleFinalSubscribe}>اشتراك</button>
        </Modal>

        <h1 className="section-title">اختر الباقة التي تناسبك</h1>
        <div className="pricing-grid">
            {pricingPlans.map(plan => (
            <div key={plan.planName} onClick={() => handleChoosePlan(plan)}>
                <PricingCard
                planName={plan.planName}
                price={plan.price}
                features={plan.features}
                isFeatured={plan.isFeatured}
                />
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default PricingPage;