import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function Values() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container
        sx={{
          mt: 15,
          mb: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src="https://raw.githubusercontent.com/mui/material-ui/master/docs/public/static/themes/onepirate/appCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Typography
          variant="h2"
          marked="center"
          component="h2"
          paddingBottom="12px"
          borderBottom="5px solid pink"
          sx={{ mb: 14 }}
        >
          About system
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/img/lock.svg"
                  alt="suitcase"
                  sx={{ height: 55 }}
                />
                <Typography variant="h5" sx={{ my: 5 }}>
                  The best management service
                </Typography>
                <Typography variant="h6">
                  {
                    "Easier to management relationship of your company, we provier for you the optimal way "
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/img/cloud.svg"
                  alt="graph"
                  sx={{ height: 55 }}
                />
                <Typography variant="h5" sx={{ my: 5 }}>
                  Authentication vs Authorization
                </Typography>
                <Typography variant="h6">
                  {
                    "In my opinion, most important things about a management app are authorization and authentication. "
                  }

                  {
                    "It 's luckily, because my App have authentication with JWT and authorization with many different role "
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box component="img" src="/img/chart2.svg" alt="clock" sx={{ height: 55 }}/>
                <Typography variant="h5" sx={{ my: 5 }}>
                  statistic
                </Typography>
                <Typography variant="h6">
                  {
                    "We provider for you a general vision about your company by many type chart. "
                  }
                  {"We hope you'll love it."}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default Values;
