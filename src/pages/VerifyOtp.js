import AppBar from "../components/AppBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../constant/theme";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { user_verify } from "../actions/index";
import {
  TextField,
  Container,
  Typography,
  Box,
  Avatar,
  Button,
} from "@mui/material/";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const VerifyOtp = () => {
  const dispatch = useDispatch()
  const [otpCode, setOtpCode] = useState("");
  const email = useParams();
  
  const handleSubmit = () => {
    const otp = {
      email: email.email,
      otp: otpCode,
    };
    dispatch(user_verify(otp))
  };
  return (
    <>
      <AppBar />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #ccc",
              padding: "30px",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" marginBottom="24px">
              Verify OTP
            </Typography>
            <Typography variant="body2" color="secondary" marginBottom="24px">
              Please type otp code in your email into field
            </Typography>
            <TextField
              fullWidth
              label={"otp code"}
              onChange={(e) => setOtpCode(e.target.value)}
              marginBottom="24px"
            />
            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={handleSubmit}
              paddingTop="10px"
            >
              Submit
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default VerifyOtp;
