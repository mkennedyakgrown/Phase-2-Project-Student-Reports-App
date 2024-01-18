import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <Outlet context={users} />
    </>
  );
}

export default App;
