import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button, Container, Typography, Grid, TextField } from "@mui/material";

import AppBar from "../components/AppBar";
import BackgroundSection from "../components/BackgroundSection";
import Values from "../components/Values";
import HowItWorks from "../components/HowItWork";
import ReactMapGL from "../components/GoogleMap/google"
import Footer from "../components/Footer";
import Slider from "../components/Slider/slider"
import { useDispatch, useSelector } from "react-redux";
import { userSendMail } from "../actions/user.actions";
import swal from "sweetalert";

const Landing = () => {
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState({
    email: "",
    title: "",
    message: "",
  });
  const handleSubmit = (e) => {
    dispatch(userSendMail(feedback))
      .then(() => {
        swal({
          title: "Thông báo",
          text: "Chúng tôi sẽ sớm phản hồi thắc mắc của bạn",
          icon: "success",
        });
      })
      .catch(() => {
        swal({
          title: "Thông báo",
          text: "Gửi Mail thất bại!",
          icon: "warning",
        });
      });
    setFeedback({
      ...feedback,
      title: "",
      message: "",
    })
  };
  return (
    <>
      <AppBar />
      <Slider />
      {/* <BackgroundSection /> */}
      <Values />
      <HowItWorks />

      <Container
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 9,
        }}
      >
        <Button
          sx={{
            border: "4px solid currentColor",
            borderRadius: 0,
            height: "auto",
            py: 2,
            px: 5,
          }}
        >
          <Typography variant="h4" component="span">
            Got any questions? Need help?
          </Typography>
        </Button>
        <Typography variant="subtitle1" sx={{ my: 3 }}>
          We are here to help. Get in touch!
        </Typography>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={5} sm={12} container direction="column" gap={3}>
            <Grid item>
              <Typography variant="h4" color="secondary">
                Send your question
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                label={"Email"}
                value={feedback.email}
                onChange={(e) =>
                  setFeedback({ ...feedback, email: e.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label={"Title"}
                value={feedback.title}
                onChange={(e) =>
                  setFeedback({ ...feedback, title: e.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label={"Message"}
                value={feedback.message}
                multiline
                rows={5}
                onChange={(e) =>
                  setFeedback({ ...feedback, message: e.target.value })
                }
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          marginTop="24px"
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
      <div style={{ width: "100%", height: "500px" }}>
        <ReactMapGL />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
