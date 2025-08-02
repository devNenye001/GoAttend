
import { HiOutlineArrowLeft } from 'react-icons/hi'
import BoxButton from "../components/BoxButtton";
import "./styles/CompliedAttendence.css";
const CompliedAttendence = () => {
  return (
    <div className="CompliedAttendence">
      <div className="header">
        <span>
          <HiOutlineArrowLeft />
        </span>
        <h1>
          Complied Attendence
        </h1>
      </div>
      <BoxButton label="MATH 101" />
      <BoxButton label="MATH 102" />
      <BoxButton label="MATH 103" />
      <BoxButton label="MATH 104" />
      <BoxButton label="MATH 105" />
    </div>
  )
}

export default CompliedAttendence