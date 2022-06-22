import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import { Button, Container, Typography, Box, Grid } from "@mui/material";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Rating, Stack} from '@mui/material';

import { useProductContext } from "../Context/ProductContextProvider";
import MySkeleton from "../Components/Skeleton/MySkeleton";
import AddCom from "../Components/Comments/AddCom";
import ListCom from "../Components/Comments/ListCom";

const ProdDetail = () => {
  const { prodId } = useParams();
  const { getOneProduct, oneProd, saveEditedProd } = useProductContext();
  

  useEffect(() => {
    getOneProduct(prodId);
  }, [prodId]);

  const [thoroughness, setThoroughness] = useState(0);
  const [efficiency, setEfficiency] = useState(0);
  const [attitude, setAttitude] = useState(0);
  const [informing, setInforming] = useState(0);


  function countAverage(arr){
    let result = 0;
    if(arr){
      arr.forEach(item=>{
        result+=item
      })
      return result/arr.length
    }
  }

  const countAverageRating = () => {
    oneProd.rating.thoroughness.push(thoroughness)
    oneProd.rating.efficiency.push(efficiency)
    oneProd.rating.attitude.push(attitude)
    oneProd.rating.informing.push(informing)
    let averageRating = countAverage(oneProd.rating.thoroughness) + countAverage(oneProd.rating.efficiency) + countAverage(oneProd.rating.attitude) + countAverage(oneProd.rating.informing);
    const newObj = {
      ...oneProd,
      rating:{
        ...oneProd.rating,
        average: averageRating/4,
      }
    }
    saveEditedProd(newObj)
  }

  return (
    <>
      <Container
        sx={{
          padding: "20px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          // bgcolor: "#FFEFBA",
        }}
      >
        {oneProd ? (
          <Grid style={{display: "flex"}}>
          <Grid xs={12} md={6}>
           <img width="400" src={oneProd.img} alt="" />
           <h5>Тщательность обследования: {countAverage(oneProd.rating.thoroughness)}</h5>
        <h5>Эффективность лечения: {countAverage(oneProd.rating.efficiency)}</h5>
        <h5>Отношение к пациенту: {countAverage(oneProd.rating.attitude)}</h5>
        <h5>Информировнаие пациента: {countAverage(oneProd.rating.informing)}</h5>
        <h5>Общее: {oneProd.rating.average}</h5>
        <br></br>
         <Link to={`/feedback/${prodId}`} className="mobile-link">
           <Button variant="outlined" color="info">
                {" "}
                Оставить отзыв
              </Button>
              </Link>
          </Grid>

          <div style={{ marginLeft: 20 }}>
            <Grid  xs={12} md={6}>
            <Typography m="5px"><h3><b>{oneProd.surename} {oneProd.name} {oneProd.middlename}</b></h3></Typography>
            <Typography m="5px"> 
              {oneProd.title}
            </Typography>
            <Typography m="5px"><h4> СТОИМОСТЬ:</h4> {oneProd.price} сомов</Typography>
            <Typography m="5px"><h4> ОТДЕЛЕНИЕ:</h4> {oneProd.type} сомов</Typography>
            <Typography m="5px"> <h4> ДОКТОР О СЕБЕ:</h4>
              {oneProd.description}
            </Typography>
            <Typography m="5px"> <h4> ОБРАЗОВАНИЕ:</h4>
              {oneProd.education}
            </Typography>
            <Typography m="5px"> <h4> СТАЖ:</h4>
              {oneProd.experience} лет
            </Typography>
            <Typography m="5px"> <h4> ЛЕЧЕНИЕ:</h4>
              {oneProd.treatment} 
            </Typography>
            <Typography m="5px"> <h4> СТАТЬИ:</h4>
              {oneProd.article} 
            </Typography>
          </Grid>
          </div>
            
          </Grid>
        ) : (
          <MySkeleton />
        )}
        {/* <br></br>
              <br></br>
         <Link to={`/feedback/${prodId}`} className="mobile-link">
           <Button variant="outlined" color="info">
                {" "}
                Оставить отзыв
              </Button>
              </Link> */}
              <br></br>
              <br></br>
        <Link to="/products" className="mobile-link">
              <Button variant="outlined" color="warning">
                {" "}
                Назад
              </Button>
              {" "}
            </Link>
      </Container>
      <Box>
        <ListCom />
        <AddCom />
      </Box>
    </>
  );
};

export default ProdDetail;
