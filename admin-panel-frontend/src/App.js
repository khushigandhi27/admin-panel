import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import TaskManagement from "./pages/TaskManagement";
import TestManagement from "./pages/TestManagement";
import UserProfile from "./pages/UserProfile";
import Subscriptions from "./pages/Subscriptions";
import Navbar from "./components/Navbar"; // Ensure navbar is included
import "./assets/css/styles.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/TaskManagement" element={<TaskManagement />} />
            <Route path="/TestManagement" element={<TestManagement />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/Subscriptions" element={<Subscriptions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
