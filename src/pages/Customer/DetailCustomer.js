import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography";

import InforField from "../DetailAccount/InforField";
import { useHistory, useParams } from "react-router-dom";
import { slugs } from "../../constant/slugs";
import { useDispatch, useSelector } from "react-redux";
import { getUserBySlug, deleteCustomer } from "../../actions/admin.action";
import swal from "sweetalert";
import moment from "moment";

const DetailCustomer = () => {
  const userInfor = useSelector((state) => state.admin.user);
  const [dataUser, setDataUser] = useState({});
  const dispatch = useDispatch();
  const id = useParams();
  useEffect(() => {
    const handleDetailUser = async () => {
      await dispatch(getUserBySlug(id.id));
    };
    handleDetailUser();
  }, [dispatch]);

  const history = useHistory();
  useEffect(() => {
    setDataUser(userInfor);
  }, [userInfor]);
  console.log(userInfor);

  const handleDeleteEmployee = () => {
    dispatch(deleteCustomer(dataUser.email))
      .then(() => {
        swal({
          title: "Thông báo",
          text: " Xóa khách hàng thành công!",
          icon: "success",
        });
        history.push(slugs.Customer);
      })
      .catch(() => {
        swal({
          title: "Thông báo",
          text: " Xóa khách hàng không thành công!",
          icon: "warning",
        });
      });
  };
  console.log(dataUser);
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
              fieldName={"Tên khách hàng"}
              value={dataUser.firstName + " " + dataUser.lastName}
            />
          </Grid>
          <Grid item xs={5}>
            <InforField
              fieldName={"Số điện thoại"}
              value={dataUser.phone_number}
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
              value={dataUser.sex == 1 ? "Nam" : "Nữ"}
            />
          </Grid>
          <Grid item xs={5}>
            <InforField
              fieldName={"Ngày sinh"}
              value={moment(dataUser.date_of_birth).format("l")}
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
            <InforField fieldName={"Địa chỉ"} value={dataUser.address} />
          </Grid>
          <Grid item xs={5}>
            <InforField fieldName={"Email"} value={dataUser.email} />
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
            onClick={() => history.push(`/customer/edit/${id.id}`)}
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
export default DetailCustomer;
