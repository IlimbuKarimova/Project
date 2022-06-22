import React, { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import { Button, Typography } from "@mui/material";

const Filter = ({
  type,
  setType,
  setPage,
  slider,
  setSlider,
  maxSliderValue,
  minSliderValue,
  handleReset,
}) => {
  const [filter, setFilter] = useState(false);

  const btnFilter = () => {
    if (filter) {
      setFilter(false);
    } else {
      setFilter(true);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={btnFilter}>
        <h3 style={{ color: "black" }}>Выбрать</h3>
      </Button>
      <div style={{ display: filter ? "block" : "none" }}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Отделение</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            style={{ display: "flex", flexDirection: "row" }}
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setPage(1);
            }}
          >
            <FormControlLabel value="all" control={<Radio />} label="Все" />
            <FormControlLabel value="Клиническое отделение" control={<Radio />} label="Клиническое отделение" />
           {/* <FormControlLabel
              value="Отделение компьютерной томографии и рентгенологии"
              control={<Radio />}
              label="Отделение компьютерной томографии и рентгенологии"
            /> */}
            <FormControlLabel
              value="Отделение функциональной диагностики"
              control={<Radio />}
              label="Отделение функциональной диагностики"
            />
            <FormControlLabel
              value="Отделение компьютерной томографии и рентгенологии"
              control={<Radio />}
              label="Отделение компьютерной томографии и рентгенологии"
            />
            
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        <Typography color="text.secondary">Цена</Typography>
        {/* <Slider
          sx={{ maxWidth: "350px" }}
          value={slider}
          onChange={(e, newValue) => {
            setSlider(newValue);
            setPage(1);
          }}
          valueLabelDisplay="auto"
          max={maxSliderValue}
          min={minSliderValue}
        /> */}

        {/*  */}
        <Slider
         sx={{ maxWidth: "350px" }}
        getAriaLabel={() => 'Temperature range'}
        value={slider}
        onChange={(e, newValue) => {
          setSlider(newValue);
          setPage(1);
        }}
        valueLabelDisplay="auto"
        max={maxSliderValue}
          min={minSliderValue}
          getAriaLabel={() => 'Temperature range'}
      />
        {/*  */}
        <br />
        <Button varianr="outlined" onClick={handleReset}>
         Сброс
        </Button>
      </div>
    </div>
  );
};

export default Filter;
