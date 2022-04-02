import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AddCircleOutlined } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import _ from "lodash";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import theme from "../constant/theme";
import { ThemeProvider } from "@mui/material/styles";
import TableComponent from "../components/TableComponent";

const Customer = () => {
  const [data, setData] = useState([
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ]);

  const [dataTable, setDataTable] = useState(data);
  const [skip, setSkip] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = [
    { name: "id", label: "ID", width: 90 },
    {
      name: "firstName",
      label: "First name",
      width: 150,
      editable: true,
    },
    {
      name: "lastName",
      label: "Last name",
      width: 150,
      editable: true,
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      name: "fullName",
      label: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      name: "actions",
      label: "Actions",
      sortable: false,
      width: 140,
      disableClickEventBubbling: true,
    },
  ];
  return (
    <>
      <Grid
        container
        spacing={2}
        paddingTop="32px"
        paddingBottom="32px"
        paddingLeft="24px"
        marginLeft="16px"
      >
        <Typography variant="h3">Quản lý khách hàng</Typography>
      </Grid>
      <Paper style={{ height: 400, width: "100%", padding: " 30px" }}>
        <TableComponent
          column={columns}
          data={data}
          count={data.length}
          //  onRowClick={handleEditUser}
          setSkip={setSkip}
          loading={false}
          setPage={setPageIndex}
          pageIndex={pageIndex}
          pagination={true}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </Paper>
    </>
  );
};
export default Customer;
