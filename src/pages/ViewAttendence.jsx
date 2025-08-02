
import { HiOutlineArrowLeft } from 'react-icons/hi'
import BoxButton from "../components/BoxButtton";
import "./styles/ViewAttendence.css";
const ViewAttendence = () => {
  return (
    <div className="ViewAttendence">
      <div className="header">
        <span>
          <HiOutlineArrowLeft />
        </span>
        <h1>
          View Attendence
        </h1>
      </div>
      <BoxButton label="Today Attendence" />
      <BoxButton label="Complied Attendence" />
    </div>
  )
}

export default ViewAttendence