import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/login"
                className="nav-link"
            >
                Login
            </NavLink>
            <NavLink
                to="/classes"
                className="nav-link"
            >
                Classes
            </NavLink>
            <NavLink
                to="/reports"
                className="nav-link"
            >
                Reports
            </NavLink>
        </nav>
    )
}

export default NavBar;