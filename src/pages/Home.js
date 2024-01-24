import { useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

function Home() {
    const context = useOutletContext();

    useEffect(() => {
        fetch("http://localhost:4000/classes")
          .then(r => r.json())
          .then(data => context.setClasses(data));
        fetch("http://localhost:4000/students")
          .then(r => r.json())
          .then(data => context.setStudents(data));
      }, [])

    return (
        <>
            <main>
                <h1>Home Page</h1>
                <Outlet context={context}/>
            </main>
        </>
    );
};

export default Home;