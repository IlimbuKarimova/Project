import React from "react";

import { Container } from "@mui/material";
import { Box } from "@mui/material";

import ProdList from "../Components/Products/ProdList/ProdList";
import LiveSearch from "../Components/LiveSearch/LiveSearch";

const Products = () => {
  return (
    <Box> 
    
    <h1 align = "center"> Рейтинговая система оценивания работы врачей НЦКТ им. Миррахимова </h1>
      <LiveSearch />
      <Container>
        <ProdList />
      </Container>
    </Box>
  );
};

export default Products;
