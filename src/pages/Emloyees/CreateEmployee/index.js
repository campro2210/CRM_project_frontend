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
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SelectComponent from "../../../components/SelectComponent";
import { departments } from "../../../constant/InitData";

const CreateEmployee = () => {
  const [selectedDepartment, setSelectedDepartment] = useState({});
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
    console.log(values);
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
                  selectedFieldValue="id"
                  selectedItem={selectedDepartment}
                  setSelectedItem={(value) => setSelectedDepartment(value)}
                  onChange
                  placeholder="Chọn phong ban"
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
