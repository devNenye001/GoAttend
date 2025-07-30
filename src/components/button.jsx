import './styles/button.css';

const Button = ({ label, onClick }) => {
  return (
    <button className="custom-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;