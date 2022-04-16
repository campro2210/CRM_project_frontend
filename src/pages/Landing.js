import { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Container, Typography, Grid, TextField } from "@mui/material";

import AppBar from "../components/AppBar";
import BackgroundSection from "../components/BackgroundSection";
import Values from "../components/Values";
import HowItWorks from "../components/HowItWork";
import Footer from "../components/Footer";
const Landing = () => {
  const [feedback, setFeedback] = useState({
    email: "",
    title: "",
    content: "",
  });
  return (
    <>
      <AppBar />
      <BackgroundSection />
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
                onChange={(e) =>
                  setFeedback({ ...feedback, email: e.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label={"Title"}
                onChange={(e) =>
                  setFeedback({ ...feedback, title: e.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label={"Content"}
                multiline
                rows={5}
                onChange={(e) =>
                  setFeedback({ ...feedback, content: e.target.value })
                }
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
