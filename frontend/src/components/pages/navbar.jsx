import "../../style/navbar.css";

import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/logo.svg" alt="Logo" width={"50%"} height={"50%"} />
          LOGO
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
