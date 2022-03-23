import FieldInfor from "./FieldInfor";
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

const EditAccount = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = () => {};
  return (
    <>
      <Grid>
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
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default EditAccount;
