import React from "react";
// import ParentComponent from "./axios";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Schedule from "./schedule/schedule";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/meeting" element={<Schedule/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <ParentComponent/> */}
    </div>
  );
}

export default App;
