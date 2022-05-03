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
import InforField from "./InforField";
import { useHistory } from "react-router-dom";
import { slugs } from "../../constant/slugs";
import { useSelector } from "react-redux";

const DetailAccount = () => {
  const history = useHistory();

  const data = useSelector(state => state.admin).employee


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
              fieldName={"Họ và tên"}
              value={`${data.firstName} ${data.lastName}`}
            />
          </Grid>
          <Grid item xs={5}>
            <InforField fieldName={"Điện thoại"} value={data.phone_number} />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          style={{ marginBottom: " 24px" }}
        >
          <Grid item xs={5}>
            <InforField fieldName={"Giới tính"} value={(data.sex == 1) ? "Nam" : (data.sex == 2) ? "Nữ" : ""} />
          </Grid>
          <Grid item xs={5}>
            <InforField fieldName={"Email"} value={data.email} />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          style={{ marginBottom: " 24px" }}
        >
          <Grid item xs={5}>
            <InforField fieldName={"Phòng ban"} value={(data.room) ? data.room.room_name : ""} />
          </Grid>
        </Grid>
      </Paper>
      <Grid container direction="row" justifyContent="flex-end">
        <Grid item>
          <Button
            onClick={() => history.push(slugs.EditAccount)}
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
export default DetailAccount;
