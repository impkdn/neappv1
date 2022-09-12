import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Dashboard from './Components/LogIn/Dashboard';
import LogIn from './Components/Pages/auth/LogIn/LogIn';
import Contact from './Components/Pages/Contact';
import Layout from './Components/Pages/Layout';
// import {BrowserRouter} from "react-router-dom"
import Home from './Components/Pages/Home';
import Dashboard from './Components/Pages/auth/LogIn/Dashboard';
// import Contact from './Components/Pages/Contact';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter> 
        <Routes>
          <Route path="/" exact element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='login' element={<LogIn/>}/>
          </Route>
            <Route path='dashboard' element={<Dashboard/>}/>
         
        {/* <Route path="/dashboard"  element={<Dashboard/>}>
          </Route> */}
        </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
