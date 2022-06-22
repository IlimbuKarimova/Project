import React from "react";

import { Container, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { Link, Outlet, useLocation } from "react-router-dom";

const Admin = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Container maxWidth="lg">
        <h1>Страница админа</h1>
        {pathname !== "/admin/add" ? (
          <Link to="add">
            <IconButton>
              <AddIcon />
              <Typography variant="h5">Добавить врача </Typography>
            </IconButton>
          </Link>
        ) : null}
        <Outlet />
      </Container>
    </div>
  );
};

export default Admin;
