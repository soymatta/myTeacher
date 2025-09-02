import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import "./index.css";
import Schedule from "./pages/Schedule";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Schedule" element={<Schedule />} />
    </Routes>
  </BrowserRouter>
);
