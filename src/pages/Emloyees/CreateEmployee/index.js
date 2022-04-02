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
import { Controller, useForm } from "react-hook-form";

const CreateEmployee = () => {
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
                placeholder="abcxyz"
                label=" FirstName"
                fieldName="firstName"
                control={control}
              />
            </Grid>
            <Grid item xs={5}>
              <FieldInfor
                placeholder="abcxyz"
                label=" Last name"
                fieldName="lastName"
                control={control}
              />
            </Grid>
          </Grid>
          <Grid direction="row" container justifyContent="space-between">
            <Grid item xs={5}>
              <FieldInfor
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
            <Grid item xs={5}>
              <FieldInfor
                placeholder="abcxyz"
                label=" Address"
                fieldName="address"
                control={control}
              />
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
