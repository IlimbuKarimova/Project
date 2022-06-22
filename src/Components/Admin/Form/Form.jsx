import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

import "./Form.css";

const initValues = {
  name: "",
  surename: "",
  middlename: "",
  title:"",
  description: "",
  img: "",
  type: "",
  experience: "",
  treatment: "",
  education: "",
  article: "",
  price: "",

  rating:{
    thoroughness: 0,
    efficiency: 0,
    attitude: 0,
    informing: 0,
    average:0
  },
  recomend: null,
};

const Form = ({ saveValues, compForEdit, oneProd, getOneProduct }) => {
  const [inpValues, setInpValues] = useState(initValues);
  const { id } = useParams();

  //for edit
  useEffect(() => {
    if (compForEdit) {
      getOneProduct(id);
    }
  }, []);
  useEffect(() => {
    if (compForEdit && oneProd) {
      setInpValues(oneProd);
    }
  }, [oneProd]);

  //end of for edit

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...inpValues,
      price: +inpValues.price,
    };

    saveValues(obj);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        className="form"
      >
        <TextField
          className="text-field"
          name="name"
          value={inpValues.name}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Имя"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="surename"
          value={inpValues.surename}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Фамилия"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="middlename"
          value={inpValues.middlename}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Отчество"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="title"
          value={inpValues.tite}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Ученая степень и ученое звание"
          variant="outlined"
        />
        <FormControl className="text-field">
          <InputLabel id="demo-simple-select-label">Отделение</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="type"
            value={inpValues.type}
            label="Type"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Клиническое отделение"}>Клиническое отделение</MenuItem>
            {/* <MenuItem value={"Отделение компьютерной томографии и рентгенологии"}>Отделение компьютерной томографии и рентгенологии</MenuItem> */}
            <MenuItem value={"Отделение функциональной диагностики"}>Отделение функциональной диагностики</MenuItem>
            <MenuItem value={"Отделение компьютерной томографии и рентгенологии"}>Отделение компьютерной томографии и рентгенологии</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className="text-field"
          name="price"
          value={inpValues.price}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Цена"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="education"
          value={inpValues.education}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Образование"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="experience"
          value={inpValues.experience}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Стаж"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="treatment"
          value={inpValues.treatment}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Лечение"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="article"
          value={inpValues.article}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Статьи"
          variant="outlined"
        />
       
        <TextField
          className="text-field"
          name="img"
          value={inpValues.img}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Фото"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="description"
          value={inpValues.description}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Доктор о себе"
          variant="outlined"
          multiline
          rows={3}
        />
        <Button
          type="submit"
          variant="contained"
          className="text-button"
        >
          Сохранить
        </Button>
      </form>
    </div>
  );
};

export default Form;
