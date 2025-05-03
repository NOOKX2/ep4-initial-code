import { useState } from "react";
import "./App.css";
import NewStudentItem from "./components/NewStudentItem/NewStudentItem";
import StudentList from "./components/StudentList/StudentList";

let lastId = 4;

function App() {
  const Initial_Student = [
    { id: 1, name: "Samuel", surname: "Jackson", age: 73, bType: "O" },
    { id: 2, name: "Keanu", surname: "Reeves", age: 58, bType: "A" },
    { id: 3, name: "Tom", surname: "Cruise", age: 60, bType: "AB" },
    { id: 4, name: "Johnny", surname: "Depp", age: 59, bType: "A" },
  ];
  const [status, setStatus] = useState("Available");
  const [studentList, setStudentList] = useState(Initial_Student);
  const [isShow, setIsShow] = useState(false);

  const clickEventHandler = () => {
    setStatus("Busy");
    console.log("status: ", status);
  };

  const addStudentHandler = (newStudentData) => {
    const newStudent = {
      ...newStudentData,
      id: ++lastId,
    };
    setStudentList([newStudent, ...studentList]);
  };

  const deleteStudentHandler = (id) => {
    const newStudentList = studentList.filter((student) => student.id !== id);
    setStudentList(newStudentList);
  };

  const editHandler = (id, student) => {
    //clone the studentList
    const newStudentList = [...studentList];

    //find the index of the student to be edited
    const index = newStudentList.findIndex((s) => s.id === id);
    newStudentList[index] = {...student};

    //set state
    setStudentList(newStudentList);
  }
  return (
    <div className="App">
      {isShow ? (
        <NewStudentItem setIsShow = {setIsShow} onAddStudent={addStudentHandler} />
      ):(<div className="add-button-container">
          <button onClick={() => setIsShow(true)}>Add Student</button>
        </div>
      )}
      
      <hr/>
      <StudentList editHandler={editHandler} deleteHandler = {deleteStudentHandler} studentList={studentList}/>
      <h3>Status: {status}</h3>
      <button onClick={clickEventHandler}>Click me</button>
    </div>
  );
}

export default App;
