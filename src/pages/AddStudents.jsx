import InputField from "../components/BoxInput"
import Button from "../components/button"
import './styles/CreateClass.css';

function AddStudents() {
  return (
    <div className='InputContainer'>
      <h1>Add Student</h1>
       <InputField label="Full Name:" placeholder="Enter the full name(e.g, Anayo Grace)" /> 
        <InputField label="Reg.No:" placeholder="(e.g, Gou/U22/CSC/792)" /> 
         <Button label="Add" />
    </div>
  )
}

export default AddStudents
