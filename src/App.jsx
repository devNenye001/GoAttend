import SuccessMsg from "./components/errors/message";
import DeletePopUp, { CreateClassPopUp } from "./components/pop-ups/pop-ups";
import Table from "./components/table";
import AddStudents from "./pages/AddStudents";
import CompliedAttendence from "./pages/CompliedAttendence";
import CreateClass from "./pages/CreateClass";
import EditTimeTable from "./pages/EditTimeTable";
import FullAttendancePage from "./pages/fullAttendencePage";
import Login from "./pages/login";
import StudentsList from "./pages/studentsList";
import TodayAttendence from "./pages/TodayAttendence";
import TodayAttendPage from "./pages/TodayAttendPage";
import ViewAttendence from "./pages/ViewAttendence";

function App() {
  return (
    <>
      <TodayAttendPage />
    </>
  );
}

export default App;
