import { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppAppBar from "./AppAppBar";
import Toolbar from "../Toolbar";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { user_signOut } from "../../actions/index";
import { domain } from "../../helpers/domain"

import { useEffect } from "react";
import './AppBar.css'
const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppBar() {
  const customer = useSelector(state => state.user).user
  const dispatch = useDispatch();
  const history = useHistory();
  const customer_token = localStorage.getItem("customer_token");
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
            {!customer_token && (
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
            {customer_token && (
              <>
                <Typography className="topRight">
                  <img
                    className='topImg'
                    src={customer.userImage ? `${domain.local}/upload/${customer.userImage}` : (customer.sex == 1) ? "../../img/avatar/avatar.png" : "../../img/female.png"}
                    alt="" />
                </Typography>
                <Typography
                  variant="h5"
                  onClick={() => history.push("/user")}
                  marginRight="24px"
                  style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                >
                  {customer_token ? (`Hello, ${customer.lastName}`) : "Hello"}
                </Typography>
                <Typography
                  variant="h5"
                  color="secondary"
                  onClick={handleLoggout}
                  style={{ display: "flex", alignItems: "center", cursor: "pointer" }}

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
