import { useState, useEffect, useContext } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css';
import useQuery from './components/useQuery';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const classesUrl = "http://localhost:4000/classes";

  const login = () => {
    setIsLoggedIn(true);
  }
  const logout = () => {
    setIsLoggedIn(false);
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <header className="App-header">
        <NavBar {...{logout}} />
      </header>
      <Outlet context={{
        login,
        isLoggedIn,
        classes,
        setClasses,
        students,
        setStudents,
        users,
        setUsers
        }} />
    </>
  );
}

export default App;