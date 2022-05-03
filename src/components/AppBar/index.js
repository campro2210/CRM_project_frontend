import { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppAppBar from "./AppAppBar";
import Toolbar from "../Toolbar";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { user_signOut } from "../../actions/index";
import { useEffect } from "react";
const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const customer = localStorage.getItem("customer");
  const handleLoggout = () => {
    dispatch(user_signOut());
    history.push("/");
  };
  return (
    <div>
      <AppAppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {"onepirate"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {!customer && (
              <>
                <Link
                  color="inherit"
                  variant="h4"
                  underline="none"
                  href="/signin"
                  sx={rightLink}
                >
                  {"Sign In"}
                </Link>
                <Link
                  variant="h4"
                  underline="none"
                  href="/signup"
                  sx={{ ...rightLink, color: "secondary.main" }}
                >
                  {"Sign Up"}
                </Link>
              </>
            )}
            {customer && (
              <>
                <Typography
                  variant="h5"
                  onClick={() => history.push("/user/:id")}
                  marginRight="24px"
                >
                  {`Hello, ${JSON.parse(customer).fullName}`}
                </Typography>
                <Typography
                  variant="h5"
                  color="secondary"
                  onClick={handleLoggout}
                >
                  {"Sign Out"}
                </Typography>
              </>
            )}
          </Box>
        </Toolbar>
      </AppAppBar>
      <Toolbar />
    </div>
  );
}

export default AppBar;
