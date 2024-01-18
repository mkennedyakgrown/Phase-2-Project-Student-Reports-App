import { Outlet, useOutletContext } from "react-router-dom";

function Home() {
    const context = useOutletContext();
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