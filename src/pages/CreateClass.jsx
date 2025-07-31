import InputField from '../components/BoxInput'
import DropdownMenu from '../components/DropDownMenu'
import Button from '../components/button'
import "./styles/CreateClass.css";



function CreateClass() {
  return (
    <div className='InputContainer'>
      <h1>Create Class</h1>
       <InputField label="Course Name:" placeholder="Enter the class name(e.g, CSC101,MATH201)" /> 
        <InputField label="Date/Time:" placeholder="Choose the date and time for the class" /> 
         <DropdownMenu
        options={['123 jagon street', '1234 jagon street', 'No class venue added yet']}/>
         <Button label="Create Class" />
    </div>
  )
}

export default CreateClass
