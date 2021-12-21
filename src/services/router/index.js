import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Assets from "../../components/Assets/index";
import Units from "../../components/Units/index";
import Users from "../../components/Users/index";
import Companies from "../../components/Companies/index";
import Navbar from "../../components/Navbar/index";

const Paths = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Assets />} path="/assets" exact />
        <Route element={<Units />} path="/units" />
        <Route element={<Users />} path="/users" />
        <Route element={<Companies />} path="/companies" />
      </Routes>
    </Router>
  );
};

export default Paths;
