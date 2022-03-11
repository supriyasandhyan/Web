import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from './Sidebar';
import Users from './Users';
import Posts from './Posts';

function Admin(){
    return(
        <div className="title">
            <h1>Admin Dashboard</h1>
            
            <BrowserRouter>
            <Sidebar/>
            <Switch>
            <Route exact path="/Posts" component={ Posts } />
            <Route exact path="/Users" component={ Users } />
            </Switch>
            </BrowserRouter>
         </div>     
    )
};
export default Admin;