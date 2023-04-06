import React from "react";
import AdduserAccount from "./pages/AdduserAccount";
import CustomizedTables from "./pages/CustomizedTables";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUser from "./pages/EditUser";
import "./App.css";

const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AdduserAccount />} />
          <Route exact path="/table" element={<CustomizedTables />} />
          <Route exact path="/edit/:idElement" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
