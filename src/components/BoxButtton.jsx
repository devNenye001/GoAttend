import './styles/boxButton.css';



const BoxButton = ({ label, icon, onClick }) => {
  return (
    <button className="custom-btn1" onClick={onClick}>
      <span>{label}</span>
      {icon && <span className='icon'>{icon}</span>}
    </button>
  );
};

export default BoxButton;
