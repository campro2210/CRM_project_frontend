import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppAppBar from "./AppAppBar";
import Toolbar from "../Toolbar";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppBar() {
  const abc = false;
  return (
    <div>
      <AppAppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24 }}
          >
            {"onepirate"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {!abc && (
              <>
                <Link
                  color="inherit"
                  variant="h4"
                  underline="none"
                  href="/premium-themes/onepirate/sign-in/"
                  sx={rightLink}
                >
                  {"Sign In"}
                </Link>
                <Link
                  variant="h4"
                  underline="none"
                  href="/premium-themes/onepirate/sign-up/"
                  sx={{ ...rightLink, color: "secondary.main" }}
                >
                  {"Sign Up"}
                </Link>
              </>
            )}
            {abc && (
              <>
                <Link
                  color="inherit"
                  variant="h4"
                  underline="none"
                  href="/premium-themes/onepirate/sign-in/"
                  sx={rightLink}
                >
                  {`Hello,...`}
                </Link>
                <Link
                  variant="h4"
                  underline="none"
                  href="/premium-themes/onepirate/sign-up/"
                  sx={{ ...rightLink, color: "secondary.main" }}
                >
                  {"Sign Out"}
                </Link>
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
