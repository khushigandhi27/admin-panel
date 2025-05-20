import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Notifications from "./pages/Notifications";
import Upgrade from "./pages/Upgrade";
import UserProfile from "./pages/UserProfile";
import TaskManagement from "./pages/TaskManagement";
import Subscription from "./pages/Subscription";
import TestManagement from "./pages/TestManagement";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/upgrade" element={<Upgrade />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/task" element={<TaskManagement />} />
      <Route path= "/test" element={<TestManagement />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
