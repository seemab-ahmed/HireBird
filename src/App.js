import './App.css';
import Login from './components/auth/login/Login';
import Forgotpassword from './components/auth/reset/Forgotpassword';
import Resetpassword from './components/auth/reset/Resetpassword';
import Resetsuccess from './components/auth/reset/Resetsuccess';
import CreatePassword from './components/auth/signup/CreatePassword';
import Createaccount from './components/auth/signup/Createaccount';
import RoleSelect from './components/auth/signup/RoleSelect';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Sidebar from './components/dashboards/Sidebar';
import Navbar from './components/dashboards/Navbar';
import Dashboard from './components/dashboards/dashboard/Dashboard';
function App() {
  const [token , settoken] = useState(false)
  const [isCollapsed, setCollapsed] = useState(true);
  const [activeButton, setActiveButton] = useState("dashboard");
  if(!token){
  return (
    
    <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={ <Login settoken={settoken}/>} />
          <Route path="/roleselect" element={ <RoleSelect/>} />
          <Route path="/createaccount" element={ <Createaccount/>} />
          <Route path="/CreatePassword" element={ <CreatePassword/>} />
          <Route path="/Forgotpassword" element={ <Forgotpassword/>} />
          <Route path="/Resetpassword" element={ <Resetpassword/>} />
          <Route path="/Resetsuccess" element={ <Resetsuccess/>} />
         </Routes>
        </Router>
  
   
    </div>
  );
}
if(token===true){
  return(
    <Router>
    <div className="flex">
      <Sidebar setActiveButton={setActiveButton} activeButton={activeButton} />
      <div className="w-full">
        <Navbar setCollapsed={setCollapsed} isCollapsed={isCollapsed} />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
          </div>
        </div>
      </Router>
  )
}
}

export default App;
