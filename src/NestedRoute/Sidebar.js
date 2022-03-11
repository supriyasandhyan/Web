import React from "react";
import { Link } from 'react-router-dom';

function Sidebar(){
    return(
        <div className="Sidebar">
            <ul>
                <li>
                    <Link to="/Posts">Posts</Link>
                </li>
                <li>
                    <Link to="/Users">Users</Link>
                </li>
            </ul>
        </div>
    )
};
export default Sidebar;