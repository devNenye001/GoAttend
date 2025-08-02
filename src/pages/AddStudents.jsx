import { HiOutlineArrowLeft } from "react-icons/hi";
import InputField from "../components/BoxInput"
import Button from "../components/button"
import './styles/CreateClass.css';
import './styles/AddStudent.css';

function AddStudents() {
  return (
    <div className='InputContainer'>
      <div className="header2">
        <span>
          <HiOutlineArrowLeft />
        </span>
        <h1>Add Student</h1>
      </div>
       <InputField label="Full Name:" placeholder="Enter the full name(e.g, Anayo Grace)" /> 
        <InputField label="Reg.No:" placeholder="(e.g, Gou/U22/CSC/792)" /> 
         <Button label="Add" />
    </div>
  )
}

export default AddStudents
