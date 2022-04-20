import { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppAppBar from "./AppAppBar";
import Toolbar from "../Toolbar";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppBar() {
  const history = useHistory();
  const token = localStorage.getItem("customer_token")
  // const [abc, setAbc] = useState(true);

  const handleLoggout = () => {
    // setAbc(false);
    history.push("signin");
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
            {!token && (
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
            {token && (
              <>
                <Typography
                  variant="h5"
                  onClick={() => history.push("/user/:id")}
                  marginRight="24px"
                >
                  {`Hello,...`}
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
