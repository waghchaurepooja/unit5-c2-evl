import './App.css';

import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState, useEffect } from "react";
function App() {
  const [ Show, setShow ] = useState(true);
  return (
    <div className="App">
      <button className="togglebtn" onClick={() =>{
        setShow(!Show);

      }}>{Show ? "Add a new student" : "go to students list"}</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {Show ? <ShowStudents /> : <AddStudent />}
    </div>
  );
}

export default App;

