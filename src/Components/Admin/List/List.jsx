import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import "./List.css";
import { useProductContext } from "../../../Context/ProductContextProvider";
import MySkeleton from "../../Skeleton/MySkeleton";

const List = () => {
  const { products, getProducts, deleteProduct } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = (prod) => {
    deleteProduct(prod);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Врачи</h2>
      {products && products.length > 0 ? (
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="list-page"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Имя</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Фамилия</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Отчество</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Звание
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Отделение
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Фотография
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Цена
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Стаж
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Лечение
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Образование
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Статьи
                </TableCell>
                
               
                <TableCell sx={{ fontWeight: "bold" }} align="left">
Доктор о себе
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Удалить/Изменить
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.surename}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.middlename}
                  </TableCell>
                  <TableCell align="left">{item.title}</TableCell>
                  <TableCell align="left">{item.type}</TableCell>
                  <TableCell align="left">
                    <img width="40px" src={item.img} alt={item.title} />
                  </TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.experience}</TableCell>
                  <TableCell align="left">{item.treatment}</TableCell>
                  <TableCell align="left">{item.education}</TableCell>
                  <TableCell align="left">{item.article}</TableCell>
                  
                  <TableCell align="left">{item.description}</TableCell>
                  <TableCell align="left">
                    <IconButton
                      onClick={() => handleDelete(item)}
                      sx={{ bgcolor: "warning.main" }}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                    <Link to={`edit/${item.id}`}>
                      <IconButton sx={{ bgcolor: "warning.main" }}>
                        <EditIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <MySkeleton />
      )}
    </div>
  );
};

export default List;
