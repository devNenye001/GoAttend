import { GrAddCircle } from "react-icons/gr";
import BoxButton from "../components/BoxButtton";
import "./styles/DashBoard.css";

function ClassAdminDashboard() {
  return (
    <div className="Buttons-container">
      <h1>Hi, Grace</h1>
      <BoxButton label="Create Class" icon={<GrAddCircle />} />
      <BoxButton label="Add Class Venues" icon={<GrAddCircle />} />

      <BoxButton label="Register Students" icon={<GrAddCircle />} />

      <BoxButton label="Edit Timetable" />

      <BoxButton label="View Students List" />

      <BoxButton label="View Attendance" />
    </div>
  );
}

export default ClassAdminDashboard;
