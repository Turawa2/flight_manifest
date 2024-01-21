import React from "react";
import DoctorDashboard from "./DoctorDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDoctorAdmin from "./AddDoctorAdmin";


function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorDashboard />} />
    
        <Route path="/addDoctor" element={<AddDoctorAdmin />} />
        <Route path="//addDoctor/:id" element={<AddDoctorAdmin />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
