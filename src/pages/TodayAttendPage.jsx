import { useState } from "react";
import { useParams } from "react-router-dom";
import Table from "../components/table";
import Button from "../components/button";
import "./styles/StudentsList.css";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function TodayAttendPage() {
  const { courseName } = useParams(); 

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Chinenye Ndubuisi",
      regNo: "GOU/U22/CSC/858",
      value: "Present",
    },
    {
      id: 2,
      name: "Anayo Grace",
      regNo: "GOU/U22/CSC/859",
      value: "Absent",
    },
  ]);

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const tableData = students.map((student, index) => ({
    id: student.id,
    sn: index + 1,
    name: student.name,
    regNo: student.regNo,
    value: student.value,
  }));

  return (
    <div className="students-page">
      <div className="header">
        <span>
          <HiOutlineArrowLeft />
        </span>
        <h1>{courseName}math 101 - Today’s Attendance</h1>
      </div>

      <p className="total-count">Total No. of Students: {students.length}</p>

      <Table
        headers={["S/N", "Name", "Reg.No", "Attendance"]}
        data={tableData}
        onDelete={handleDelete}
        isAttendance
      />

      <Button label="Download" />
    </div>
  );
}
