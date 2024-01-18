import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Classes from "./pages/Classes";
import Reports from "./pages/Reports";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/classes",
                element: <Classes />
            },
            {
                path: "/reports",
                element: <Reports />
            }
        ]
    }
]

export default routes;