import FieldInfor from "../../EditAccount/FieldInfor";
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
import SelectComponent from "../../../components/SelectComponent";
// import { departments } from "../../../constant/InitData";
import { useDispatch, useSelector } from "react-redux";
import { slugs } from "../../../constant/slugs";
import { getDepartment, createEmployee } from "../../../actions/admin.action";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
const CreateEmployee = () => {
  const history = useHistory();
  const departments = useSelector((state) => state.admin.department);
  const dispatch = useDispatch();
  useEffect(() => {
    const getDepartments = async () => {
      await dispatch(getDepartment());
    };
    getDepartments();
  }, [dispatch]);
  const [selectedDepartment, setSelectedDepartment] = useState({});
  const [sex, setSex] = useState("female");
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
    const newEmployee = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone_number: values.phone_number,
      room: selectedDepartment,
      password: values.password,
      sex: sex,
    };
    console.log(newEmployee);

    dispatch(createEmployee(newEmployee))
      .then(() => {
        swal({
          title: "Thông báo",
          text: "Tạo nhân viên thành công!",
          icon: "success",
        });
        history.push(slugs.Employee);
      })
      .catch(() => {
        swal({
          title: "Thông báo",
          text: " không thành công!",
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
export default CreateEmployee;
