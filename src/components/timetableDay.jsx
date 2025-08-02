
import Button from './button';
import ClassCard from './ClassCard';
import './styles/TimetableDay.css';

export default function TimetableDay({ day, classes, onAddClick, onDeleteClick }) {
  return (
    <div className="day-section">
      <h3>{day}</h3>
      <div className="class-list">
        {classes.length === 0 ? (
          <p>No Classes For Today.</p>
        ) : (
          classes.map(cls => (
            <ClassCard
              key={cls.id}
              title={cls.title}
              location={cls.location}
              time={cls.time}
              onDelete={() => onDeleteClick(cls.id)}
            />
          ))
        )}
      </div>
      <Button label="Add" onClick={onAddClick} />
    </div>
  );
}
