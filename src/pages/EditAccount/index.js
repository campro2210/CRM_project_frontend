import FieldInfor from "./FieldInfor";
import React, { useEffect, useState } from "react";
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
import SelectComponent from "../../components/SelectComponent";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateEmployee,
  getEmployeeBySlug,
  getDepartment,
} from "../../actions/admin.action";
import _ from "lodash";

const EditAccount = () => {
  const userLogin = useSelector((state) => state.auth.user);
  console.log(userLogin);
  const dispatch = useDispatch();
  const id = useParams();
  const {
    control,
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  const [gender, setGender] = useState();
  const [selectedDepartment, setSelectedDepartment] = useState();

  useEffect(() => {
    if (userLogin) {
      setValue("firstName", _.get(userLogin, "firstName", ""));
      setValue("lastName", userLogin.lastName, "");
      setValue("email", userLogin.email, "");
      setValue("phone_number", userLogin.phone_number, "");

      setGender(userLogin.sex);
      setSelectedDepartment(userLogin.room._id);
    }
  }, [userLogin]);

  const onSubmit = () => {};

  useEffect(() => {
    const getDepartments = async () => {
      await dispatch(getDepartment());
    };
    getDepartments();
  }, [dispatch]);
  const departments = useSelector((state) => state.admin.department);

  return (
    <>
      <Grid style={{ padding: "30px", marginLeft: "24px" }}>
        <Typography variant="h4" color="secondary">
          {" "}
          Chỉnh sửa thông tin cá nhân
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
              <Grid item xs={7} marginRight="34px">
                <SelectComponent
                  dataList={departments}
                  selectedFieldName="name"
                  selectedFieldValue="_id"
                  selectedItem={selectedDepartment}
                  setSelectedItem={(value) => setSelectedDepartment(value)}
                  onChange
                  placeholder="Chọn Phòng Ban"
                  multiple={false}
                  size="small"
                  width={"100%"}
                />
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={userLogin.gender}
                value={gender}
                name="gender"
                onChange={(e) => setGender(e.target.value)}
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
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default EditAccount;
