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
            <button onClick={logout}>Logout</button>
        </nav>
    )
}

export default NavBar;