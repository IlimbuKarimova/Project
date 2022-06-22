import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Admin from "./Pages/Admin";
import Products from "./Pages/Products";
import List from "./Components/Admin/List/List";
import Add from "./Components/Admin/Add/Add";
import Edit from "./Components/Admin/Edit/Edit";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import RequireAuth from "./Components/Auth/RequireAuth";
import ProdDetail from "./Pages/ProdDetail";
import Error from "./Pages/Error.jsx";
import Feedback from "./Pages/Feedback";
const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail/:prodId" element={<ProdDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback/:id" element={<Feedback />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        >
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
