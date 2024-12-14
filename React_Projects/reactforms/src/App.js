import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Forms from "./Components/Forms";
import { Link } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import Home from "./Components/Home";

const App = () => {
  return (

    <div>
      <nav>
        <ul>
          <li><NavLink to="/forms">fill form</NavLink></li>
          <li><NavLink to="/">back to home page</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
        </ul>
      </nav>

      <Routes>
      <Route path="/" element={<MainHeader/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/forms" element={<Forms/>}></Route>
      <Route path="/about" element={<div>About Page</div>}></Route>
      <Route path="/labs" element={<div>Labs Page</div>}></Route>
      <Route path="*" element={<div>Page not found</div>}></Route>
      </Route>
    </Routes>
    </div>
    
  );
};

export default App;
