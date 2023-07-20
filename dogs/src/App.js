import React from "react";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import { UserStorage } from "./UserContext";
import User from "./Components/User/User";


function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="account/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
