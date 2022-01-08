import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Assets from "../../components/Assets/index";
import Units from "../../components/Units/index";
import Users from "../../components/Users/index";
import Companies from "../../components/Companies/index";
import Navbar from "../../components/Navbar/index";
import Home from "../../components/Home/index";
import { DataContext } from "../../contexts/DataContext";
import api from "../api/index";

const Paths = () => {
  const [assets, setAssets] = useState([]);
  const [users, setUsers] = useState([]);
  const [units, setUnits] = useState([]);
  const [companies, setCompanies] = useState([]);

  const ApiData = () =>
    useEffect(() => {
      api.get("db").then(({ data }) => {
        setAssets(data.assets);
        setUsers(data.users);
        setCompanies(data.companies);
        setUnits(data.units);
        console.log('oi')
      });
    }, []);
  return (
    <Router>
      <DataContext.Provider
        value={{
          ApiData,
          assets,
          setAssets,
          users,
          setUsers,
          units,
          setUnits,
          companies,
          setCompanies,
        }}
      >
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Assets />} path="/assets" />
          <Route element={<Units />} path="/units" />
          <Route element={<Users />} path="/users" />
          <Route element={<Companies />} path="/companies" />
        </Routes>
      </DataContext.Provider>
    </Router>
  );
};

export default Paths;
