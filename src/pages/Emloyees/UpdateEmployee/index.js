import FieldInfor from "../../EditAccount/FieldInfor";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Paper,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import SelectComponent from "../../../components/SelectComponent";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateEmployee,
  getEmployeeBySlug,
  getDepartment,
} from "../../../actions/admin.action";
import _ from "lodash";

const UpdateEmployee = () => {
  const employee = useSelector((state) => state.admin.employee);
  console.log(employee)
  const dispatch = useDispatch();
  const id = useParams();
  const {
    control,
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phone_number: employee.phone_number,
    },
  });

  const [gender, setGender] = useState();
  const [selectedDepartment, setSelectedDepartment] = useState();
  useEffect(() => {
    if (employee) {
      setValue("firstName", employee.firstName, "");
      setValue("lastName", employee.lastName, "");
      setValue("email", employee.email, "");
      setValue("phone_number", employee.phone_number, "");

      setGender(employee.sex);
      setSelectedDepartment(_.get(employee, "room._id", ""));
    }
  }, [employee]);

  const onSubmit = (values) => {
    console.log(values);
  };

  useEffect(() => {
    dispatch(getEmployeeBySlug(id.id));

    const getDepartments = async () => {
      await dispatch(getDepartment());
    };
    getDepartments();
  }, [dispatch]);
  const departments = useSelector((state) => state.admin.department);
  // console.log(departments)
  // console.log({ gender: gender, department: selectedDepartment });

  const handleUpdate = () =>{
    const employeeUpdate  = {

    }
  }

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
                  selectedFieldName="room_name"
                  selectedFieldValue="_id"
                  selectedItem={selectedDepartment}
                  setSelectedItem={(value) => setSelectedDepartment(value)}
                  defaultValue={selectedDepartment}
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
        </Paper>

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
      </form>
    </>
  );
};

export default UpdateEmployee;