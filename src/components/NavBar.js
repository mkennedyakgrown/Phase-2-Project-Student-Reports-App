import { NavLink } from "react-router-dom";
import { MenuItem, Menu } from "semantic-ui-react";

function NavBar() {
    return (
        <Menu>
            <MenuItem
                as={NavLink}
                to="/"
                className="nav-link"
            >
                Home
            </MenuItem>
            <MenuItem
                as={NavLink}
                to="/admin"
                className="nav-link"
            >
                Admin
            </MenuItem>
            <MenuItem
                as={NavLink}
                to="/reports"
                className="nav-link"
            >
                Reports
            </MenuItem>
        </Menu>
    )
}

export default NavBar;