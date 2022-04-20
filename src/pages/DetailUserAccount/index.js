import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import InforField from "../DetailAccount/InforField";

const DetailUserAccount = () => {
  const history = useHistory();
  return (
    <>
      <AppBar />
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
                  value={"Huynhf vu haong cam"}
                />
              </Grid>
              <Grid item xs={5}>
                <InforField fieldName={"Số điện thoại"} value={"09828411427"} />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              style={{ marginBottom: " 24px" }}
            >
              <Grid item xs={5}>
                <InforField fieldName={"Giới tính"} value={"nam"} />
              </Grid>
              <Grid item xs={5}>
                <InforField fieldName={"Ngày sinh"} value={"22-10-2000"} />
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
                  value={"12 nguyen van bao, TPHCM"}
                />
              </Grid>
              <Grid item xs={5}>
                <InforField fieldName={"Email"} value={"Huynh Vu Hoang Cam"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="flex-end">
            <Grid item>
              <Button
                // onClick={() => history.push(slugs.EditAccount)}
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
      </Grid>

      <Footer />
    </>
  );
};

export default DetailUserAccount;
