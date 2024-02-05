import { useState, useEffect, useContext } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css';
import useQuery from './hooks/useQuery';

function App() {
  const url = "http://localhost:4000/"
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({
    "id": 0,
    "name": "Floyd Benton",
    "email": "floydbenton@unisure.com",
    "classes": [
      "Ballet 3",
      "Tap 5"
    ]
  });
  const [userClasses, setUserClasses] = useState([
    {
      "id": 0,
      "className": "Ballet 3",
      "report": "Ballet 3",
      "classRoll": [
        "Maureen Hughes",
        "Henrietta Bowen",
        "Michael Jordan",
        "Erika Mejia",
        "Tracey Burns",
        "Head Holmes",
        "Connie Barron",
        "Shirley Weber",
        "Lizzie Harmon",
        "Griffith Sherman"
      ]
    },
    {
      "id": 1,
      "className": "Tap 5",
      "classRoll": [
        "Lessie Buckner",
        "Pope Joseph",
        "French Talley",
        "Clay Medina",
        "Ana Hatfield",
        "Tania Cantrell",
        "Augusta Trevino",
        "Valerie Holman",
        "Graves David",
        "Barrera Hartman"
      ]
    }
  ]);
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

  const query = useQuery();

  useEffect(() => {
    fetch(`${url}classes`)
      .then(r => r.json())
      .then(data => setClasses(data));
    fetch(`${url}students`)
      .then(r => r.json())
      .then(data => setStudents(data));
  }, []);

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
        user,
        setUser,
        userClasses,
        setUserClasses,
        url
        }} />
    </>
  );
}

export default App;