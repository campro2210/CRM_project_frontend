import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AddCircleOutlined } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import _ from "lodash";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import InforField from "../../DetailAccount/InforField";
import { useHistory, useParams } from "react-router-dom";
import { slugs } from "../../../constant/slugs";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeeBySlug,
  deleteEmployee,
} from "../../../actions/admin.action";
import swal from "sweetalert";

const DetailEmployee = () => {
  const employeeInfor = useSelector((state) => state.admin.employee);

  const [dataEmployee, setDataEmployee] = useState({});
  console.log(dataEmployee)
  const dispatch = useDispatch();
  const id = useParams();
  useEffect(() => {
    const handleDetailEmployee = async () => {
      await dispatch(getEmployeeBySlug(id.id));
    };
    handleDetailEmployee();
  }, [dispatch]);

  const history = useHistory();
  useEffect(() => {
    setDataEmployee(employeeInfor);
  }, [employeeInfor]);

  const handleDeleteEmployee = () => {
    dispatch(deleteEmployee(dataEmployee.email))
      .then(() => {
        swal({
          title: "Thông báo",
          text: " Xóa nhân viên thành công!",
          icon: "success",
        });
        history.push(slugs.Employee);
      })
      .catch(() => {
        swal({
          title: "Thông báo",
          text: " Xóa nhân viên không thành công!",
          icon: "warning",
        });
      });
  };
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
        <Typography variant="h3">Thông tin tài khoản</Typography>
      </Grid>

      <Paper
        style={{
          width: "100%",
          padding: "30px",
          marginLeft: "24px",
          marginRight: "24px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          style={{ marginBottom: " 24px" }}
        >
          <Grid item xs={5}>
            <InforField
              fieldName={"Tên nhân viên"}
              value={dataEmployee.firstName + " " + dataEmployee.lastName}
            />
          </Grid>
          <Grid item xs={5}>
            <InforField
              fieldName={"Số điện thoại"}
              value={dataEmployee.phone_number}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          style={{ marginBottom: " 24px" }}
        >
          <Grid item xs={5}>
            <InforField
              fieldName={"Giới tính"}
              value={
                (dataEmployee.sex == 1) ? "Male" : (dataEmployee.sex == 2) ? "Female" : ""
              }
            />
          </Grid>
          <Grid item xs={5}>
            <InforField
              fieldName={"Phòng ban"}
              value={
                dataEmployee.room ? dataEmployee.room.room_name : ""
              }
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          style={{ marginBottom: " 24px" }}
        >
          <Grid item xs={5}>
            <InforField fieldName={"Email"} value={dataEmployee.email} />
          </Grid>
        </Grid>
      </Paper>
      <Grid container direction="row" justifyContent="flex-end">
        <Grid item>
          <Button
            variant="contained"
            onClick={handleDeleteEmployee}
            color="grey"
            style={{ margin: "24px" }}
          >
            {" "}
            Delete
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push(`/employee/update/${id.id}`)}
            variant="contained"
            color="primary"
            style={{ margin: "24px" }}
          >
            {" "}
            Update
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default DetailEmployee;
