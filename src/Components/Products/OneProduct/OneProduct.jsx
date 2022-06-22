import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


import { notify } from "../../Tostify/Toastify";
import { useLikeContext } from "../../../Context/LikeContextProvider";
import { useAuth } from "../../../Context/AuthContextProvider";



export default function OneProduct({ item }) {

  const { currentUser } = useAuth();


  const { addLike, delLike, getLike, likes, allLikes } = useLikeContext();
  const isLikedF = () =>
    likes.some((like) => {
      return like.prodId === item.id;
    });
  const [disabled, setDisabled] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(isLikedF());

  React.useEffect(() => {
    getLike();
  }, []);
  React.useEffect(() => {
    setIsLiked(isLikedF());
  }, [likes]);

  const handleSubmitLike = () => {
    let forDelId = likes.find((prod) => prod.prodId === item.id);
    // console.log(forDelId);
    let obj = {
      user: currentUser.user,
      prodId: item.id,
    };
    // console.log(obj);
    let checkProdIsLiked = likes.some((elem) => {
      return obj.prodId === elem.prodId;
    });
    if (checkProdIsLiked && forDelId) {
      delLike(forDelId.id);
    } else {
      addLike(obj);
    }
  };
  let oneProdLikes = allLikes.filter((elem) => {
    return elem.prodId === item.id;
  });


  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, height4: 500 }} className="one-card">
        <CardMedia
          component="img"
          height="240"
          image={item.img}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
          <b>{item.surename}   {item.name} {item.middlename}</b> <br></br> {item.title} 
          </Typography>
          
          <Typography variant="h6" color="green">
            {item.price} сомов
          </Typography>
          
        </CardContent>
        
    
        <CardActions>
          <IconButton
            color="inherit"
            onClick={() => {
              setDisabled(true);
              handleSubmitLike();
            }}
          >
            {isLiked ? (
              <FavoriteIcon color="warning" />
            ) : (
              <FavoriteBorderIcon />
            )}
            {oneProdLikes.length}
          </IconButton>
          <Button component={Link} to={`detail/${item.id}`} size="small">
            подробнее...
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
