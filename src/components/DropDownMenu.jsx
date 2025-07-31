import "./styles/DropDownMenu.css";



const DropdownMenu = ({ label, options = [] }) => {
  return (
    <div className="dropdown-wrapper">
      <label className="dropdown-label">{label}</label><br />
      <select className="dropdown-select">
        <option value="" disabled selected>Add a  Class Venue</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;

