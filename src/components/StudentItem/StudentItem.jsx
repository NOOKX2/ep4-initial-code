import "./StudentItem.css";
import StudentTags from "../StudentTags/StudentTags";
import { useState } from "react";

function StudentItem(props) {
  let age = props.age;
  const [isEdit, setIsEdit] = useState(false);
  const [currentName, setCurrentName] = useState(props.name);
  const [currentLastName, setCurrentLastName] = useState(props.surname);
  const [currentAge, setCurrentAge] = useState(props.age);
  const [currentBType, setCurrentBType] = useState(props.bType);

  const onClickEdit = () => {
    setIsEdit(true)
    setCurrentAge(age)
    setCurrentName(props.name)
    setCurrentLastName(props.surname)
    setCurrentBType(props.bType)
  }
  
  const onClickDone = () => {
    const editValues = {
      name: currentName,
      surname: currentLastName,
      age: Number(currentAge),
      bType: currentBType,
    };
    props.editHandler(props.id, editValues);
    setIsEdit(false);
  } 

  if (isEdit) {
    return (
      <div className="StudentItem">
        <input className="edit-input" value={currentName} onChange={e => setCurrentName(e.target.value)} />
        <input className="edit-input" value={currentLastName} onChange={e => setCurrentLastName(e.target.value)} />
        <input className="edit-input" value={currentAge} onChange={e => setCurrentAge(e.target.value)} />
        <select className="edit-select" onChange={e => setCurrentBType(e.target.value)} value={currentBType}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="O">O</option>
          <option value="AB">AB</option>
        </select>
        <button onClick={onClickDone} className="btn btn-success">Done</button>
        <button onClick={() => setIsEdit(false)} className="btn btn-primary">Cancel</button>
      </div>
    )
  }

 
  return (
    <div className="StudentItem">
      <div>{props.name}</div>
      <div>{props.surname}</div>
      <div>{age}</div>
      <StudentTags age={age} />
      <div>{props.bType}</div>
      <button
        onClick={onClickEdit}

        className="btn btn-warning">Edit</button>
      <button onClick={() => props.deleteHandler(props.id)} className="btn btn-danger">Delete</button>
    </div >
  )
}

export default StudentItem;