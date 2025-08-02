import { HiOutlineTrash } from "react-icons/hi";
import "./styles/Table.css";

export default function Table({
  headers = [],
  data = [],
  onDelete,
  isAttendance = false,
}) {
  return (
    <table className="table-container">
      <thead>
        <tr>
          {headers.map((head, i) => (
            <th key={i}>{head}</th>
          ))}
          {!isAttendance && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.sn}</td>
            <td>{row.name}</td>
            <td>{row.regNo}</td>
            <td>{row.value}</td>
            {!isAttendance && (
              <td>
                <button
                  onClick={() => onDelete?.(row.id)}
                  className="delete-btn"
                >
                  <HiOutlineTrash />
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
