import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Layout from "./Layout";
import Profile from "../pages/Profile";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default Router;
