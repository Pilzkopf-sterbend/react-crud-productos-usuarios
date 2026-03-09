import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2 className="navbar-title">CRUD Productos y Usuarios </h2>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Products" className={({ isActive }) => isActive ? "active-link" : ""}>
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={({ isActive }) => isActive ? "active-link" : ""}>
            Usuarios
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;