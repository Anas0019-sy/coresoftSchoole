import './PricingCard.css';

interface PricingCardProps {
  planName: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard = ({ planName, price, features, isFeatured }: PricingCardProps) => {
  return (
    <div className={`pricing-card ${isFeatured ? 'featured' : ''}`}>
      <div className="pricing-header">
        <h3 className="plan-name">{planName}</h3>
        <p className="plan-price">{price}<span>/شهرياً</span></p>
      </div>
      <ul className="plan-features">
        {features.map((feature, index) => (
          <li key={index}>✔️ {feature}</li>
        ))}
      </ul>
      <button className="plan-button">اختر الباقة</button>
    </div>
  );
};

export default PricingCard;