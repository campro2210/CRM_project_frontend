import _ from "lodash";
import React, { Fragment } from "react";
import {
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  Grid,
  Link as LinkMaterial,
  Typography,
} from "@mui/material";
import { Link, useHistory, useLocation, matchPath } from "react-router-dom";
import {
  Home as HomeIcon,
  MonetizationOn as MonetizationOnIcon,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  SupervisorAccount as SupervisorAccountIcon,
  Verified as VerifiedIcon,
  EventNote as EventNoteIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  ExitToApp as ExitToAppIcon,
  SendIcon as SendIcon,
} from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { styled } from "@mui/material/styles";
import { slugs } from "../constant/slugs";

const DrawerCustom = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidth }) => ({
  "& .MuiDrawer-paper": {
    background: "#00837B",
    color: "#fff",
    position: "fixed",
    whiteSpace: "nowrap",
    height: "100vh",

    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

    "& ul > li": {
      height: "80px",
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      display: "flex",

      "&.active": {
        background: "rgba(0, 0, 0, 0.1)",
        borderBottom: "2px solid #DA6744",
      },
    },

    "& a": {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      "& > div": {
        color: "#fff",
        marginRight: "24px",
        "& > span": {
          fontWeight: "bold",
        },
      },
    },

    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),

    ...(open
      ? {
          "& ul > li > a > div:first-of-type": {
            minWidth: "unset",
          },
        }
      : {
          "& ul > li > a > div:first-of-type": {
            minWidth: "unset",
          },
          "& ul > li > a > div:last-child": {
            display: "none",
          },
        }),
  },
}));

const MainMenu = ({ drawerWidth, open, toggleDrawer, setAuth }) => {
  const history = useHistory();
  const location = useLocation();

  const menuList = [
    {
      id: 1,
      name: "Trang ch???",
      icon: <HomeIcon />,
      link: `${slugs.Home}`,
      exact: true,
    },
    {
      id: 2,
      name: "Qu???n l?? nh??n vi??n",
      icon: <SupervisorAccountIcon />,
      link: `${slugs.Employee}`,
      exact: false,
    },
    {
      id: 3,
      name: "Qu???n l?? kh??ch h??ng",
      icon: <MonetizationOnIcon />,
      link: `${slugs.Customer}`,
      exact: false,
    },
    {
      id: 4,
      name: "Th??ng tin t??i kho???n",
      icon: <AccountBalanceWalletIcon />,
      link: `${slugs.DetailAccount}`,
      exact: false,
    },
    {
      id: 5,
      name: "Ch??m s??c kh??ch h??ng",
      icon: <SupportAgentIcon />,
      link: `${slugs.CustomerService}`,
      exact: false,
    },
    {
      id: 8,
      name: "Tr?? Chuy???n",
      icon: <ChatIcon />,
      link: `${slugs.discuss}`,
      exact: false,
    },

    {
      id: 6,
      name: "Qu???n l?? kh??c",
      icon: <EventNoteIcon />,
      link: `${slugs.setting}`,
      exact: false,
    },

    // {
    //   id: 7,
    //   name: "????ng xu???t",
    //   icon: <ExitToAppIcon />,
    //   exact: true,
    //   onClick: () => {
    //     swal({
    //       title: "B???n c?? ch???c mu???n ????ng xu???t?",
    //       icon: "warning",
    //       buttons: ["H???y", "????ng xu???t"],
    //       dangerMode: true,
    //     }).then((isSignOut) => {
    //       if (isSignOut) {
    //         setAuth(false);
    //         user.reset();
    //         if (localStorage.getItem("notify_token")) {
    //           deleteDevice({
    //             variables: {
    //               device_token: localStorage.getItem("notify_token"),
    //             },
    //           });
    //         }
    //         history.push("/login");
    //       }
    //     });
    //   },
    // },
  ];

  return (
    <DrawerCustom variant="permanent" drawerWidth={drawerWidth} open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: [1],
        }}
      >
        {open ? (
          <Fragment>
            <img alt="logo" style={{ paddingLeft: "16px" }} />
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon style={{ color: "#fff" }} />
            </IconButton>
          </Fragment>
        ) : (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              margin: "auto",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      <List style={{ marginTop: "80px" }}>
        {menuList.map((item, index) => {
          return (
            <ListItem
              key={index}
              className={
                _.get(
                  matchPath(location.pathname, { path: item.link }),
                  "isExact"
                ) ||
                item?.exact ===
                  _.get(
                    matchPath(location.pathname, { path: item.link }),
                    "isExact"
                  )
                  ? "active"
                  : undefined
              }
            >
              {item.id === 7 ? (
                <LinkMaterial
                  onClick={item.onClick}
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    textDecoration: "none",
                    justifyContent: "flex-start",
                    fontWeight:
                      _.get(
                        matchPath(location.pathname, { path: item.link }),
                        "isExact"
                      ) ||
                      item?.exact ===
                        _.get(
                          matchPath(location.pathname, { path: item.link }),
                          "isExact"
                        )
                        ? "bold"
                        : undefined,
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Typography fontWeight={"normal"} color="#fff">
                    {item.name}
                  </Typography>
                </LinkMaterial>
              ) : (
                <Link
                  to={item.link}
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    justifyContent: "flex-start",
                    textDecoration: "none",
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Typography
                    fontWeight={
                      _.get(
                        matchPath(location.pathname, { path: item.link }),
                        "isExact"
                      ) ||
                      item?.exact ===
                        _.get(
                          matchPath(location.pathname, { path: item.link }),
                          "isExact"
                        )
                        ? "bold"
                        : "normal"
                    }
                    color="#fff"
                  >
                    {item.name}
                  </Typography>
                </Link>
              )}
            </ListItem>
          );
        })}
      </List>
    </DrawerCustom>
  );
};

export default MainMenu;
