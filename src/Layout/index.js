import {
  Logout,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import {
  AppBar as MuiAppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import ModalConfirm from "../components/ModalConfirm";
import _ from "lodash";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { slugs } from "../constant/slugs";

import MainMenu from "./MainMenu";
import SearchText from "./SearchText";
import theme from "../constant/theme";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions";
import ModalChangePass from "../components/ModalChangePass";
import { changePassword as changePasswordAction } from "../actions";

import swal from "sweetalert";

const drawerWidth = 314;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  background: "#fff",
  zIndex: _.get(theme, "zIndex.drawer") + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: _.get(theme, "transitions.easing.sharp"),
    duration: _.get(theme, "transitions.duration.leavingScreen"),
  }),
  ...(open
    ? {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: _.get(theme, "transitions.easing.sharp"),
          duration: _.get(theme, "transitions.duration.enteringScreen"),
        }),
      }
    : {
        width: `calc(100% - 72px)`,
      }),
  boxShadow: "none",
}));

const useStyles = makeStyles((theme) => ({
  accountMenu: {
    position: "absolute !important",
    right: "0",
    top: "120%",
    background: "white",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1);",
    borderRadius: "12px",
    color: _.get(theme, "palette.secondary.main"),
    whiteSpace: "nowrap",
    width: "360px",
    display: " flex",
  },

  rowItem: {
    transition: "300ms all ease",
    padding: "16px 32px",
    "&:hover": {
      background: "rgba(0, 131, 123, 0.1)",
    },
  },
  dialogTitle: {
    padding: "40px 40px 24px 40px",
  },
  dialogContent: {
    padding: "0 40px",

    display: "flex",
    flexDirection: "column",
    gap: "24px",

    "& > p": {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "26px",
    },
  },
  dialogActions: {
    padding: "20px 32px 32px 32px",
  },
}));

const Layout = ({ searchText, setSearchText, auth, setAuth, children }) => {
  const admin = "Admin";
  const [open, setOpen] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [changePasswordState, setChangePasswordState] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const [notiNumber, setNotiNumber] = useState(0);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.admin).employee;

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const history = useHistory();
  const classes = useStyles(theme);

  const changePassword = () => {
    const data = {
      id: userLogin._id,
      oldPassword: oldPass,
      password: newPass,
    };
    dispatch(changePasswordAction(data))
      .then(() => {
        swal({
          title: "Thông báo",
          text: "Cập nhật thành công",
          icon: "success",
        });
        dispatch(signout());
        history.push("/admin/signin");
      })
      .catch(() => {
        swal({
          title: "Thông báo",
          text: "Cập nhật thất bại thất bại",
          icon: "warning",
        });
      });
  };

  const handleLogout = () => {
    dispatch(signout());
    if (!localStorage.getItem("token")) {
      history.push("/admin/signin");
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {auth && (
          <AppBar position="absolute" open={open}>
            <Toolbar>
              <Grid
                container
                justifyContent="space-between"
                direction="row"
                alignItems="center"
              >
                <Grid item>
                  <SearchText
                    setSearchText={setSearchText}
                    searchText={searchText}
                  />
                </Grid>
                <Grid item>
                  <Grid item container gap={4} alignItems="center">
                    <Grid item>
                      <IconButton onClick={() => history.push(slugs.notify)}>
                        <Badge badgeContent={notiNumber} color="error">
                          <NotificationsIcon />
                        </Badge>
                      </IconButton>
                    </Grid>
                    <Grid item style={{ cursor: "pointer" }}>
                      <Grid item position="relative">
                        <Avatar onClick={() => setShowProfile(!showProfile)} />
                        <div
                          className={classes.accountMenu}
                          style={{ display: showProfile ? "flex" : "none" }}
                        >
                          <Grid container direction="column" paddingBottom={1}>
                            <Grid item>
                              <Grid
                                item
                                container
                                gap={3}
                                alignItems="center"
                                padding={3}
                                borderBottom="1px solid #e2e1e1"
                              >
                                <Grid item>
                                  <Avatar sx={{ bgcolor: "#00837B" }} />
                                </Grid>
                                <Grid item>
                                  <Grid item container direction="column">
                                    <Grid item fontWeight="bold">
                                      <Typography
                                        variant="h5"
                                        color={_.get(
                                          theme,
                                          "palette.secondary.main"
                                        )}
                                      >
                                        {" "}
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                      <Typography
                                        variant="caption"
                                        color={_.get(
                                          theme,
                                          "palette.secondary.main"
                                        )}
                                        fontSize={14}
                                      >
                                        {userLogin.firstName !== "" ||
                                        userLogin.lastName !== ""
                                          ? `${userLogin.firstName} ${userLogin.lastName}`
                                          : `${admin}`}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid
                                item
                                container
                                alignItems="center"
                                gap={4}
                                className={classes.rowItem}
                                onClick={() => setChangePasswordState(true)}
                              >
                                <LockIcon
                                  style={{
                                    color: _.get(
                                      theme,
                                      "palette.secondary.main"
                                    ),
                                  }}
                                />
                                <Typography
                                  variant="subtitle2"
                                  color={_.get(theme, "palette.secondary.main")}
                                >
                                  Đổi mật khẩu
                                </Typography>
                              </Grid>
                              <Grid
                                item
                                container
                                alignItems="center"
                                gap={4}
                                className={classes.rowItem}
                                onClick={() => setShowModal(true)}
                              >
                                <Logout
                                  style={{
                                    color: _.get(
                                      theme,
                                      "palette.secondary.main"
                                    ),
                                  }}
                                />
                                <Typography
                                  variant="subtitle2"
                                  color={_.get(theme, "palette.secondary.main")}
                                >
                                  Đăng xuất
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>

            <ModalConfirm
              open={showModal}
              handleClose={() => setShowModal(false)}
              title="Đăng xuất"
              description="Bạn có muốn đăng xuất!"
              submit={handleLogout}
            />
            <ModalChangePass
              open={changePasswordState}
              handleClose={() => setChangePasswordState(false)}
              newPass={newPass}
              oldPass={oldPass}
              setNewPass={setNewPass}
              setOldPass={setOldPass}
              submit={changePassword}
            />
          </AppBar>
        )}

        <MainMenu
          drawerWidth={drawerWidth}
          open={open}
          toggleDrawer={toggleDrawer}
          setAuth={setAuth}
        />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            // height: "100vh",
            minHeight: "calc(100vh - 100px)",
            // overflow: "auto",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <Grid container pl={`${open ? "314px" : "71px"}`}>
            {children}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
