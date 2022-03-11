import React, { useState , Suspense, lazy } from 'react';
import { BrowserRouter as Router , Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Tasks from './Components/Tasks';
import Hooks from './Components/Hooks';
import PrivateRoute from './UserAuthentication/PrivateRoute';
import PublicRoute from './UserAuthentication/PublicRoute';
import Form from './Form/Form';
import CompProps from './Props/CompProps';
import SwitchToggle from './ConditionalRender/SwitchToggle';
// import IconBar from './Components/IconBar';

const Web = lazy(()=> import('./Components/Web'));
const Home = lazy(()=> import('./UserAuthentication/Home'));
const Admin = lazy(()=> import('./NestedRoute/Admin'));
const Dashboard = lazy(()=> import('./UserAuthentication/Dashboard'));
const SignIn = lazy(()=> import('./UserAuthentication/SignIn'));

function App (){
  const [state, setState] = useState('')
  const [condition, setCondition] = useState(false)
  const  toggle =()=>{
    if(condition === false){
      setCondition(true)
      setState("React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.")
    }
    else{
        setCondition(false)
        setState('')
    }
  }
  
  return(
      <Router>
        <div> 
          <Navbar />
          {/* <IconBar /> */}
         </div>
        <Switch>
          <Suspense fallback={<p>....please wait</p>}>
          <PublicRoute restricted={false} component={ Web } path="/" exact />
          <PublicRoute restricted={false} component={Home} path="/UserAuthentication/Home" exact />
          <PublicRoute restricted={false} component={Admin} path="/NestedRoute/Admin" exact />
          <PublicRoute restricted={false} component={SignIn} path="/UserAuthentication/SignIn" exact />

          <PublicRoute exact path="/Tasks" component={Tasks}/>
          <PublicRoute exact path="/hooks" component={Hooks}/>
          <PublicRoute exact path="/form" component={Form}/>
          <PublicRoute exact path="/switchToggle" component={SwitchToggle}/>
          <PublicRoute exact path='/CompProps'>
          <CompProps intro={state} toggle={toggle} />
          </PublicRoute>
          <PrivateRoute exact path="/UserAuthentication/Dashboard" component={Dashboard}/>
          </Suspense>
        </Switch>
      </Router> 
      
    );
}
export default App;