
import { HiOutlineArrowLeft } from 'react-icons/hi'
import BoxButton from "../components/BoxButtton";
import "./styles/ViewAttendence.css";
const TodayAttendence = () => {
  return (
    <div className="CompliedAttendence">
      <div className="header">
        <span>
          <HiOutlineArrowLeft />
        </span>
        <h1>
          Today Attendence
        </h1>
      </div>
      <BoxButton label="MATH 101" />
      <BoxButton label="MATH 102" />
    </div>
  )
}

export default TodayAttendence