import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { slugs } from "../../constant/slugs";
import InforField from "../DetailAccount/InforField";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
const DetailUserAccount = () => {
  const user = useSelector(state => (state.user))
  const data = user.user
  const dateOfBirth = data.date_of_birth
  const history = useHistory()
  return (
    <>
      <AppBar />
      {
        (data && data !== null) ?
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            paddingTop="24px"
            gap={3}
          >
            <Grid item container direction="row" justifyContent="center">
              <Grid item>
                <Typography variant="h2">Thông tin tài khoản</Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} container direction="row" justifyContent="center">
              <Grid item sm={8}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  style={{ marginBottom: " 24px" }}
                >
                  <Grid item xs={5}>
                    <InforField
                      fieldName={"Tên đầy đủ"}
                      value={`${data.firstName}  ${data.lastName}`}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <InforField fieldName={"Số điện thoại"} value={data.phone_number} />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  style={{ marginBottom: " 24px" }}
                >
                  <Grid item xs={5}>
                    <InforField fieldName={"Giới tính"} value={(data.sex == 1) ? "Nam" : "Nữ"} />
                  </Grid>
                  <Grid item xs={5}>
                    <InforField fieldName={"Ngày sinh"} value={moment(dateOfBirth).format("YYYY-MM-DD")} />
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
                      fieldName={"Địa chỉ"}
                      value={data.address}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <InforField fieldName={"Email"} value={data.email} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
           
            <Grid container direction="row" justifyContent="center">
              <Grid item>
                <Button
                  onClick={() => history.push(slugs.UpdateUser)}
                  variant="contained"
                  color="primary"
                  style={{ margin: "24px" }}
                >
                  {" "}
                  Update
                </Button>
              </Grid>
            </Grid>
          </Grid>
          :
          <h1>Data loading</h1>

      }


      <Footer />
    </>
  );
};

export default DetailUserAccount;
