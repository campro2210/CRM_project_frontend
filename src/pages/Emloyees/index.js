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

import { useState, useEffect } from "react";
import TableComponent from "../../components/TableComponent";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee, getEmployeeBySlug } from "../../actions/admin.action";

const Employees = () => {
  const dispatch = useDispatch();

  const employee = useSelector((state) => state.admin.employees);

  useEffect(() => {
    const getEmployees = async () => {
      await dispatch(getEmployee());
    };
    getEmployees();
  }, [dispatch]);

  const history = useHistory();
  // const [data, setData] = useState(
  //   employee.employees.map((item, index) => ({
  //     _id: item._id,
  //     id: index + 1,
  //     name: item.firstName + " " + item.lastName,
  //     email: item.email,
  //     phoneNumber: item.phone_number,
  //     department: item.room_name,
  //   }))
  // );

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    setDataTable(
      employee.map((item, index) => ({
        _id: item._id,
        id: index + 1,
        name: item.firstName + " " + item.lastName,
        email: item.email,
        phoneNumber: item.phone_number,
        department: (item.room && item.room.name) ? (item.room.name) : "",
      }))
    );
  }, [employee]);

  const [skip, setSkip] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleDetailUser = (rowData, rowMeta) => {
    history.push(`/employee/detail/${rowData[0]}`);
  };

  const columns = [
    {
      name: "_id",
      options: {
        display: false,
      },
    },
    { name: "id", label: "ID" },
    {
      name: "name",
      label: "Name",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "phoneNumber",
      label: "Phone number",
    },
    {
      name: "department",
      label: "Department",
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
          data={dataTable}
          count={dataTable.length}
          onRowClick={handleDetailUser}
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
