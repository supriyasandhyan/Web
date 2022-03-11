import React from 'react';


function Navbar(){
    return(
        <nav className="navbar">
            <a href="#" className="navbar-logo">React Task</a>
            
            <ul className="navbar-links">

            <li className="navbar-dropdown">
                <a href="/UserAuthentication/Home">Home</a>
            </li>

            <li className="navbar-dropdown">
                <a href="/NestedRoute/Admin">Admin</a>
            </li>

            <li className="navbar-dropdown">
                <a href="/Tasks">My Tasks</a>
                <div className="dropdown">
                    <a href="/hooks">Hooks</a>
                    <a href="/Form">Handling Events</a>
                    <a href="/CompProps">components & props</a>
                    <a href="/SwitchToggle">Conditional Rendering</a>
                </div>
            </li>

            <li className="navbar-dropdown">
                <a href="/UserAuthentication/Dashboard">Dashboard</a>
            </li>

            </ul>
        </nav>
    );
}
export default Navbar;