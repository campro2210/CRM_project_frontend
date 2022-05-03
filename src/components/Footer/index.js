import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Container, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "warning.main",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.dark",
  },
};

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "fr-FR",
    name: "Français",
  },
];

export default function Footer() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <FacebookIcon color="primary" style={{ fontSize: "44px" }} />
                <TwitterIcon
                  color="primary"
                  style={{
                    fontSize: "44px",
                    "& :hover": { cursor: "pointer" },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={3} container direction="column" gap={1}>
            <Typography variant="h5" marked="left" gutterBottom>
              Contact
            </Typography>
            <Grid
              item
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={1}
            >
              <Grid item xs="auto">
                <PhoneIcon color="primary" />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="subtitle" color="gray">
                  + (84) 0982841427
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={1}
            >
              <Grid item xs="auto">
                <EmailIcon color="primary" />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="subtitle" color="gray">
                  hoangcam2000@gmail.com
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="row"
              justifyContent="flex-start"
              // alignItems="center"
              gap={1}
            >
              <Grid item xs="auto">
                <LocationOnIcon color="primary" />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="subtitle" color="gray">
                  12 Nguyen Van Bao, Ward 4, Go Vap Distrisct, TPHCM City
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={8} md={4}></Grid>
          <Grid item>
            <Typography variant="caption">
              The Website was build by Van Minh Hoang & Huynh Vu Hoang Cam
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
