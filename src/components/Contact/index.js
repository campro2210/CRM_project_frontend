import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Container, Typography, Grid, TextField } from "@mui/material";

function Contact() {
  return (
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
        <Grid item xs={5} container direction="column">
          <Grid item>
            <Typography variant="h4" color="secondary">
              Send your question
            </Typography>
          </Grid>
          <Grid item>
            <TextField label={"email"} fullWidth />
          </Grid>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
