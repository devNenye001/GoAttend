import { HiOutlineArrowLeft } from "react-icons/hi";
import Table from "../components/table";
import './styles/fullAttendencePage.css';

export default function FullAttendancePage() {
  const course = "MATH 101";
  const level = "400 LEVEL";
  const title = `${level} ${course} COMPILED ATTENDANCE`;

  const attendanceData = [
    {
      id: 1,
      name: "Chinenye Ndubuisi",
      regNo: "GOU/U22/CSC/858",
      percentage: "70",
    },
    { id: 2, name: "Anayo Grace", regNo: "GOU/U22/CSC/858", percentage: "85" },
  ];

  return (
    <div className="FullAttendencePage">
      <div className="header">
        <span><HiOutlineArrowLeft /></span>
        <h1>Attendance</h1>
      </div>
      <h3>{title}</h3>

      <Table
  headers={['S/N', 'Name', 'Reg.No', 'Attendance']}
  data={attendanceData.map((student, index) => ({
    sn: index + 1,
    name: student.name,
    regNo: student.regNo,
    value: `${student.percentage}%`,
  }))}
  isAttendance
/>


      <button className="custom-btn">Download</button>
    </div>
  );
}
