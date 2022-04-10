import FieldInfor from "../EditAccount/FieldInfor";
import {
  Grid,
  Typography,
  TextField,
  Paper,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { slugs } from "../../constant/slugs";
import { createUser } from "../../actions/admin.action";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { useHistory } from "react-router-dom";
import swal from "sweetalert";
const CreateCustomer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [sex, setSex] = useState("female");
  const [birthDay, setBirthDay] = useState();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone_number: "",
    },
  });

  const onSubmit = (values) => {
    const newCustomer = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone_number,
      password: values.password,
      sex: sex,
    };
    console.log(newCustomer);

    dispatch(createUser(newCustomer))
      .then(() => {
        swal({
          title: "Thông báo",
          text: "Tạo khách hàng thành công!",
          icon: "success",
        });
        history.push(slugs.Customer);
      })
      .catch(() => {
        swal({
          title: "Thông báo",
          text: " Tạo khách hàng không thành công!",
          icon: "warning",
        });
      });
  };

  return (
    <>
      <Grid style={{ padding: "30px", marginLeft: "24px" }}>
        <Typography variant="h4" color="secondary">
          {" "}
          Tạo mới nhân viên
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Paper
          style={{ padding: "30px", marginLeft: "24px", marginRight: "24px" }}
        >
          <Grid direction="row" container justifyContent="space-between">
            <Grid item xs={5}>
              <FieldInfor
                label=" FirstName"
                fieldName="firstName"
                control={control}
              />
            </Grid>
            <Grid item xs={5}>
              <FieldInfor
                label=" Last name"
                fieldName="lastName"
                control={control}
              />
            </Grid>
          </Grid>
          <Grid direction="row" container justifyContent="space-between">
            <Grid item xs={5}>
              <FieldInfor label=" Email" fieldName="email" control={control} />
            </Grid>
            <Grid item xs={5}>
              <FieldInfor
                label=" Phone number"
                fieldName="phone_number"
                control={control}
              />
            </Grid>
          </Grid>
          <Grid
            direction="row"
            container
            justifyContent="space-between"
            marginBottom="12px"
          >
            <Grid
              item
              container
              direction="row"
              justifyContent="space-between"
              xs={5}
              alignItems="center"
            >
              <Grid item xs={3}>
                <Typography variant="body1" color="secondary">
                  Birthday
                </Typography>
              </Grid>
              <Grid item xs={7} marginRight="36px">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    openTo="year"
                    views={["year", "month", "day"]}
                    inputFormat="dd/MM/yyyy"
                    value={birthDay}
                    onChange={(newValue) => {
                      setBirthDay(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        helperText={null}
                        size="small"
                        fullWidth
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                onChange={(e) => setSex(e.target.value)}
                name="gender"
                row
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid direction="row" container justifyContent="space-between">
            <Grid item xs={5}>
              <FieldInfor
                label="Password"
                fieldName="password"
                control={control}
              />
            </Grid>
            <Grid item xs={5}></Grid>
          </Grid>
        </Paper>

        <Grid container direction="row" justifyContent="flex-end">
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ margin: "24px" }}
            >
              {" "}
              Tạo mới
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default CreateCustomer;
