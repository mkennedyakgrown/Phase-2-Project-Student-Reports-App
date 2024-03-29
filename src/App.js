import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const url = "http://localhost:4000/";
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);

  // fetch classes and students on page load
  useEffect(() => {
    fetch(`${url}classes`)
      .then((r) => r.json())
      .then((data) => setClasses(data));
    fetch(`${url}students`)
      .then((r) => r.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <Outlet
        context={{
          classes,
          setClasses,
          students,
          setStudents,
          url,
        }}
      />
    </>
  );
}

export default App;
