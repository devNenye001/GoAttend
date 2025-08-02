import "./styles/pop-ups.css"
import Button from '../button'
import InputField from "../BoxInput.jsx"
import DropdownMenu from "../DropDownMenu.jsx"

// the delete pop-up component
const DeletePopUp = ({onAddClick}) => {
  return (
    <div className='DeletePopUp'>
        <h1>Are you sure you want to do this?</h1>
        <Button label="Yes" onClick={onAddClick} />
        <Button label="No" onClick={onAddClick} />
    </div>
  )
}

export default DeletePopUp


// the create class pop-up component
export const CreateClassPopUp = ({onAddClick}) => {
  return (
    <div className='CreateClassPopUp'>
         <InputField label="Course Name:" placeholder="Enter the class name(e.g, CSC101,MATH201)" /> 
        <InputField label="Date/Time:" placeholder="Choose the date and time for the class" /> 
         <DropdownMenu
        options={['123 jagon street', '1234 jagon street', 'No class venue added yet']}/>
         <Button label="Create Class" onClick={onAddClick}/>
    </div>
  )
}

