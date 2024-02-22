import React from'react';
import '../../style/navbar.css';

import {NavLink , Outlet} from'react-router-dom';

export default function Navbar() {
    return (
        <>
        <div className="navbar">
            <div className="navbar-brand">
                {/* <img src="/logo.svg" alt="Logo" width={"50%"} height={"50%"} />
                 */}
                 LOGO
            </div>
            <div className="navbar-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            </div>
        </div>
        <Outlet />
        </>
    )
}