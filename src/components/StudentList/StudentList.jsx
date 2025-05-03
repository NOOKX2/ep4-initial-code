import StudentItem from "../StudentItem/StudentItem";
import "./StudentList.css";
import { useState } from "react";

export function StudentList(props) {
  const studentList = props.studentList;
  const [currentBtype, setCurrentBType] = useState("All");
  const filteredStudentList = currentBtype === "All"
    ? studentList
    : studentList.filter(e => e.bType === currentBtype);

  return (
    <>
      <div className="selectdiv">
        <label>
          <select value={currentBtype} onChange={(e) => setCurrentBType(e.target.value)}>
            <option value="All">All</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="O">O</option>
            <option value="AB">AB</option>
          </select>
        </label>
      </div>
      <div>
        {filteredStudentList.length === 0 ? (
          <div>Not Found</div>
        ) : (
          filteredStudentList.map(e => (
            <StudentItem
              deleteHandler={props.deleteHandler}
              editHandler={props.editHandler}
              key={e.id}
              id = {e.id}
              name={e.name}
              surname={e.surname}
              age={e.age}
              bType={e.bType}
            />
          ))
        )}
      </div>
    </>
  );
}

export default StudentList;