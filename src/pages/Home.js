import { Outlet, useOutletContext } from "react-router-dom";

function Home() {
    const login = useOutletContext();
    return (
        <>
            <main>
                <h1>Home Page</h1>
                <Outlet context={login}/>
            </main>
        </>
    );
};

export default Home;