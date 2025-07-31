import './styles/BoxInput.css';

const InputField = ({ label, placeholder }) => {
  return (
    <div className="box-input-wrapper">
      <label className="box-input-label">{label}</label><br />
      <input
        type="text"
        placeholder={placeholder}
        className="box-input-field"
      />
    </div>
  );
};

export default InputField;

