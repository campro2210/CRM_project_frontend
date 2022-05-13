import * as React from "react";
import { Button, Typography } from "@mui/material";
import BackgroundSectionLayout from "./BackgroundSectionLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

export default function BackgroundSection() {
  return (
    <>
      <div style=
        {{
          position: "fixed",
          fontSize: "18px",
          width: "100%",
          color:"#fff",
          minHeight: "35px",
          background: "linear-gradient(90deg, rgba(1,0,9,0.7872899159663865) 39%, rgba(0,0,3,1) 100%, rgba(0,212,255,1) 100%)"
        }}>
        <marquee>Mọi thắc mắc xin liên hệ 0584282411 hoặc gửi về mail: "minhhoangv190200@gmail.com"</marquee>
      </div>

      <BackgroundSectionLayout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "#7fc7d9",
          backgroundPosition: "center",
        }}
      >
      </BackgroundSectionLayout>
      {/* <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      /> */}
      {/* <Typography color="inherit" align="center" variant="h2" marked="center">
        Start your startup step by step
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h4"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Discover the solution to help you increase your revenue by at least 20%,
        save 30% in cost and processing time!
      </Typography> */}
    </>
  );
}
