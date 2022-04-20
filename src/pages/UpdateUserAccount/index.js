import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import {
  Button,
  Grid,
  Paper,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SelectComponent from "../../components/SelectComponent";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { useHistory } from "react-router-dom";
import FieldInfor from "../EditAccount/FieldInfor";

const UpdateUserAccount = () => {
  const [gender, setGender] = useState();
  const {
    control,
    handleSubmit,

    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (values) => {
    console.log(values);
  };
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
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Grid item xs={12} container direction="row" justifyContent="center">
            <Grid item sm={8}>
              <Grid direction="row" container justifyContent="space-between">
                <Grid item xs={5}>
                  <FieldInfor
                    label=" FirstName"
                    fieldName="firstName"
                    // value={{...register(employee.firstName)}}
                    control={control}
                  />
                </Grid>
                <Grid item xs={5}>
                  <FieldInfor
                    label=" Last name"
                    fieldName="lastName"
                    // value={employee.lastName}
                    control={control}
                  />
                </Grid>
              </Grid>
              <Grid direction="row" container justifyContent="space-between">
                <Grid item xs={5}>
                  <FieldInfor
                    disabled={true}
                    placeholder="abcxyz"
                    label=" Email"
                    fieldName="email"
                    control={control}
                  />
                </Grid>
                <Grid item xs={5}>
                  <FieldInfor
                    placeholder="abcxyz"
                    label=" Phone number"
                    fieldName="phone_number"
                    control={control}
                  />
                </Grid>
              </Grid>
              <Grid direction="row" container justifyContent="space-between">
                <Grid
                  item
                  xs={5}
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs={4}>
                    <Typography variant="body1" color="secondary">
                      {" "}
                      Department
                    </Typography>
                  </Grid>
                  <Grid item xs={7} marginRight="34px"></Grid>
                </Grid>
                <Grid item xs={5}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={gender}
                    name="Gender"
                    onChange={(e) => setGender(e.target.value)}
                    row
                  >
                    <FormControlLabel
                      label="Female"
                      control={<Radio defaultChecked={gender} value="female" />}
                    />
                    <FormControlLabel
                      label="Male"
                      control={<Radio defaultChecked={gender} value="male" />}
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="flex-end">
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ margin: "24px" }}
                  // onClick = {() => handleUpdate()}
                >
                  {" "}
                  Update
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Footer />
    </>
  );
};
export default UpdateUserAccount;
