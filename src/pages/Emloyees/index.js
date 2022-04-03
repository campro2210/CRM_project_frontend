import {
  Grid,
  Paper,
  FormControlLabel,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";
import { slugs } from "../../constant/slugs";

import { useState } from "react";
import TableComponent from "../../components/TableComponent";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../actions/admin.action";
import _ from "underscore";

const Employees = () => {
  const employee = useSelector((state) => state.admin, _.isEqual);
  console.log(employee);
  const dispatch = useDispatch();
  const getEmployees = () => {
    dispatch(getEmployee());
  };
  getEmployees();

  const history = useHistory();
  const [data, setData] = useState([
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      _id: "ádadsasdasasd",
    },
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

  const handleEditUser = (rowData, rowMeta) => {
    console.log(rowData);
    console.log(rowMeta);
  };

  const columns = [
    { name: "id", label: "ID" },
    {
      name: "firstName",
      label: "First name",
    },
    {
      name: "lastName",
      label: "Last name",
    },
    {
      name: "age",
      label: "Age",
    },
  ];
  console.log(dataTable.length);
  return (
    <>
      <Grid
        container
        spacing={2}
        paddingTop="32px"
        paddingBottom="32px"
        paddingLeft="24px"
        marginLeft="16px"
        direction="row"
        justifyContent="space-between"
      >
        <Grid item>
          <Typography variant="h3">Quản lý nhân viên</Typography>
        </Grid>
        <Grid item style={{ marginRight: "24px", paddingTop: "24px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push(slugs.CreateEmployee)}
          >
            {" "}
            Tạo mới nhân viên
          </Button>
        </Grid>
      </Grid>
      <Paper style={{ width: "100%", margin: " 30px" }}>
        <TableComponent
          column={columns}
          data={data}
          count={dataTable.length}
          onRowClick={handleEditUser}
          setSkip={setSkip}
          loading={false}
          setPage={setPageIndex}
          pageIndex={pageIndex}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </Paper>
    </>
  );
};
export default Employees;
