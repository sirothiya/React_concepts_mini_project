import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Dashboard from "./Pages/Dashboard";
import NavBar from "./Components/NavBar";
import { useState } from "react";

function App() {

  const [isloggedIn,setLoggedIn]=useState(false)
  return (
    <div>
      <NavBar isLogged={isloggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setIslogged={setLoggedIn}/>} />
        <Route path="/signup" element={<SignUp setIslogged={setLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
