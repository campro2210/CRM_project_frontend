import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Radio, FormLabel, RadioGroup, Field } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signup } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";
import AppBar from "../components/AppBar";
import theme from "../constant/theme";
import swal from "sweetalert";

export default function SignUp() {
  const history = useHistory();

  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);

  const handleCheckValidEmail = (e) => {
    if (e.target.value) {
      setIsValid(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      phone_number: data.get("phone-number"),
      email: data.get("email"),
      password: data.get("password"),
      address: data.get("address"),
      sex: data.get("gender"),
      date_of_birth: moment(data.get("birthday")).format("YYYY-MM-DD"),
    };
    console.log(newUser);
    dispatch(signup(newUser))
      .then(() => history.push(`signup/otp/${newUser.email}`))
      .catch(() => {
        swal({
          title: "Thông báo",
          text: " Đăng kí không thành công!",
          icon: "warning",
        });
      });
  };

  return (
    <>
      <AppBar />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              // noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    variant="outlined"
                    id="email"
                    label="Email Address"
                    type="email"
                    name="email"
                    onChange={(e) => handleCheckValidEmail(e)}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone-number"
                    label="Phone number"
                    name="phone-number"
                    autoComplete="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    inputProps={{ minLength: 6 }}
                    helperText={"Password phải ít nhất 6 kí tự"}
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="date"
                    label="Birthday"
                    type="date"
                    name="birthday"
                    fullWidth
                    defaultValue={new Date()}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={1}
                    name="gender"
                    row
                  >
                    <FormControlLabel
                      value={2}
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value={1}
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={() => history.push("/signin")}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
