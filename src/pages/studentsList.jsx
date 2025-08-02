import { useState } from "react";
import Table from "../components/table";
import Button from "../components/button";
import "./styles/StudentsList.css";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function StudentsList() {
  const [students, setStudents] = useState([
    { id: 1, name: "Chinenye Ndubuisi", regNo: "GOU/U22/CSC/858" },
    { id: 2, name: "Anayo Grace", regNo: "GOU/U22/CSC/858" },
  ]);

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="students-page">
      <div className="header">
        <span>
          <HiOutlineArrowLeft />
        </span>
        <h1>
          400 level <br /> Students List
        </h1>
      </div>
      <p className="total-count">Total No. of Students: {students.length}</p>

      <Table data={students} onDelete={handleDelete} />

      <Button label="Download" />
    </div>
  );
}
