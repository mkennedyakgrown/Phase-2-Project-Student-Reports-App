import { useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

function Home() {
  const context = useOutletContext();

  return (
    <>
      <main>
        <h1>Welcome to the Classroom! Use the NavBar above to navigate.</h1>
        <Outlet context={context} />
      </main>
    </>
  );
}

export default Home;
