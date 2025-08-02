import { HiOutlineTrash } from 'react-icons/hi';
import './styles/ClassCard.css';

export default function ClassCard({ title, location, time, onDelete }) {
  return (
    <div className="class-card">
      <div>
        <h4>{title}</h4>
        <p>{location}</p>
        <p>{time}</p>
      </div>
      {onDelete && (
        <button onClick={onDelete} className="delete-btn">{<HiOutlineTrash />}</button>
      )}
    </div>
  );
}
