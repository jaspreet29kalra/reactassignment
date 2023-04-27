import React from "react"
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {Route,Routes} from "react-router-dom";
import StudentLogin from "./Components/StudentLogin";
import StaffLogin from "./Components/StaffLogin";
import Staff from "./Components/Staff";
import Student from "./Components/Student";
import "./App.css";


function App() {
  return (
<>
<Navbar/>
<Routes>
<Route exact path="/" element={<Home/>}></Route>
<Route  path="/about" element={<Home/>}></Route>
<Route  path="/contact" element={<Home/>}></Route>
<Route path="/studentlogin" element={<StudentLogin/>}></Route>
<Route path="/stafflogin" element={<StaffLogin/>}></Route>
<Route path="/Staff" element={<Staff/>}></Route>
<Route path="/Student" element={<Student/>}></Route>


</Routes>



</>
  );
}

export default App;
