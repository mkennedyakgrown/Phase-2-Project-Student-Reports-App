import App from "./App";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Admin from "./pages/Admin";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/reports",
            element: <Reports />,
          },
          {
            path: "/admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
];

export default routes;
