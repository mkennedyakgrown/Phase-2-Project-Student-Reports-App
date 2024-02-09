import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const url = "http://localhost:4000/";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({});
  const [userClasses, setUserClasses] = useState([]);
  const navigate = useNavigate();

  const login = (email) => {
    fetch(`${url}instructors?email=${email}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        if (data != []) {
          setUser(data[0]);
          const currUserClasses = classes.filter((obj) =>
            data[0].classes.includes(obj.className)
          );
          setUserClasses(currUserClasses);
          setIsLoggedIn(true);
          return true;
        } else {
          return false;
        }
      });
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // }, [isLoggedIn]);

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
        <NavBar {...{ logout }} />
      </header>
      <Outlet
        context={{
          login,
          isLoggedIn,
          setIsLoggedIn,
          classes,
          setClasses,
          students,
          setStudents,
          user,
          setUser,
          userClasses,
          setUserClasses,
          url,
        }}
      />
    </>
  );
}

export default App;
