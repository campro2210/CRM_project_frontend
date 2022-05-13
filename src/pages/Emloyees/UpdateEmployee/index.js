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
  FormControl,
} from "@mui/material";
import SelectComponent from "../../../components/SelectComponent";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateEmployee as update,
  getEmployeeBySlug,
  getDepartment,
} from "../../../actions/admin.action";
import _ from "lodash";

const UpdateEmployee = () => {
  const employee = useSelector((state) => state.admin.employee);
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

  const history = useHistory();

  const [gender, setGender] = useState();
  const [selectedDepartment, setSelectedDepartment] = useState();
  useEffect(() => {
    if (employee) {
      setValue("firstName", employee.firstName, "");
      setValue("lastName", employee.lastName, "");
      setValue("email", employee.email, "");
      setValue("phone_number", employee.phone_number, "");
      setGender(employee.sex);
      setSelectedDepartment(_.get(employee, "room._id"));
    }
  }, [employee]);

  const onSubmit = (values) => {
    const employeeToUpdate = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone_number: values.phone_number,
      sex: gender,
      room: selectedDepartment,
    };

    try {
      dispatch(update(employeeToUpdate));
      history.push(`/employee`);
    } catch (error) {}
  };

  useEffect(() => {
    dispatch(getEmployeeBySlug(id.id));

    const getDepartments = async () => {
      await dispatch(getDepartment());
    };
    getDepartments();
  }, [dispatch]);
  const departments = useSelector((state) => state.admin.department);
  const handleUpdate = () => {
    const employeeUpdate = {};
  };

  const genderList = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ];

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
                type="email"
                control={control}
              />
            </Grid>
            <Grid item xs={5}>
              <FieldInfor
                placeholder="abcxyz"
                label=" Phone number"
                fieldName="phone_number"
                control={control}
                minLength={10}
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
                  size="small"
                  width={"100%"}
                />
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={gender ? gender.toString() : ""}
                  onChange={(e) => setGender(parseInt(e.target.value))}
                  row
                >
                  {genderList.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      label={item.name}
                      value={item.id}
                      control={<Radio />}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
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
