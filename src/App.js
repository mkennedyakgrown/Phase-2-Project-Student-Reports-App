import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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
  }, [isLoggedIn])

  return (
    <>
      <header className="App-header">
        <NavBar {...{logout}} />
      </header>
      <Outlet context={login} />
    </>
  );
}

export default App;