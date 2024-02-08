import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ logout, isAdmin }) {
    return (
        <nav>
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            {/* <NavLink
                to="/classes"
                className="nav-link"
            >
                Classes
            </NavLink> */}
            <NavLink
                to="/admin"
                className="nav-link"
            >
                Admin
            </NavLink>
            <NavLink
                to="/reports"
                className="nav-link"
            >
                Reports
            </NavLink>
            {/* <NavLink
                to="/login"
                className="nav-link"
            >
                Login
            </NavLink> */}
            <button onClick={logout}>Logout</button>
        </nav>
    )
}

export default NavBar;