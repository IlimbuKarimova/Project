import React from "react";
import {Container,IconButton,Typography,} from "@mui/material";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container align="center">
        <Box className="footer-inside">
          
        </Box><Typography>
      <b>Контакты</b>   <br></br>
E-mail: nccimkr@gmail.com<br></br>
Адрес: г. Бишкек ул. Тоголок Молдо 3
        </Typography>
        <Box className="footer-inside" align="center">
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <YouTubeIcon />
          </IconButton>
          
        </Box>
        
      </Container>
    </div>
  );
};

export default Footer;
