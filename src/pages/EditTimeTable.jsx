import { useState } from "react";
import TimetableDay from "../components/timetableDay";
import Button from "../components/button";
import "./styles/EditTimeTable.css";
import { HiOutlineArrowLeft } from "react-icons/hi";

const initialData = {
  Monday: [
    {
      id: 1,
      title: "MATH 103",
      location: "AIRPORT ROAD",
      time: "9:30 AM – 11:00AM",
    },
    {
      id: 2,
      title: "MATH 103",
      location: "AIRPORT ROAD",
      time: "9:30 AM – 11:00AM",
    },
    {
      id: 3,
      title: "MATH 103",
      location: "AIRPORT ROAD",
      time: "9:30 AM – 11:00AM",
    },
  ],
  Tuesday: [],
  Wednesday: [
    {
      id: 4,
      title: "MATH 103",
      location: "AIRPORT ROAD",
      time: "9:30 AM – 11:00AM",
    },
    {
      id: 5,
      title: "MATH 103",
      location: "AIRPORT ROAD",
      time: "9:30 AM – 11:00AM",
    },
  ],
  Thursday: [
    {
      id: 6,
      title: "MATH 103",
      location: "AIRPORT ROAD",
      time: "9:30 AM – 11:00AM",
    },
  ],
  Friday: [],
  Saturday: [
    {
      id: 7,
      title: "MATH 103",
      location: "AIRPORT ROAD",
      time: "9:30 AM – 11:00AM",
    },
  ],
};

export default function EditTimeTable() {
  const [data, setData] = useState(initialData);

  const handleDelete = (day, id) => {
    const updated = data[day].filter((cls) => cls.id !== id);
    setData({ ...data, [day]: updated });
  };

  const handleAdd = (day) => {
    const newClass = {
      id: Date.now(),
      title: "MATH 103",
      location: "AIRPORT ROAD",
      time: "9:30 AM – 11:00AM",
    };
    setData({ ...data, [day]: [...data[day], newClass] });
  };

  return (
    <div className="edit-timetable">
      <div className="header">
        <span><HiOutlineArrowLeft /></span>
        <h2>Edit Time Table</h2>
      </div>

      {Object.keys(data).map((day) => (
        <TimetableDay
          key={day}
          day={day}
          classes={data[day]}
          onAddClick={() => handleAdd(day)}
          onDeleteClick={(id) => handleDelete(day, id)}
        />
      ))}

      <Button label="Apply Changes" />
      <Button label="Download" />
    </div>
  );
}
