import _ from "lodash";
import React, { useState } from "react";
import Box from "@mui/material/Box";
// import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { Tabs as MuiTabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import { borderBottom, borderColor } from "@mui/system";

const TabsCustom = styled(MuiTabs)(({ theme }) => ({
  whiteSpace: "nowrap",
  margin: "32px 0",

  "& button": {
    textTransform: "initial",
    fontSize: "20px",
    lineHeight: theme.spacing(3),
    fontWeight: "normal",
    color: "#B9B9B9",
    padding: 0,

    "&.Mui-selected": {
      color: theme.palette.secondary.main,
    },
  },

  "& button:not(:first-of-type)": {
    marginLeft: "32px",
  },

  "& .MuiTabs-scrollButtons": {
    color: theme.palette.secondary.main,
    "&.Mui-disabled": {
      display: "none",
    },
  },

  "& .MuiTabs-indicator": {
    backgroundColor: "#DA6744",
    height: 3,
  },
}));

const ScrollableTabsButtonVisible = ({ tabs, setTabIndex }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, width: "calc(100% - 100px)" }}>
      <TabsCustom
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
      >
        {_.map(tabs, (item, key) => (
          <Tab
            key={key}
            value={_.get(item, "id")}
            label={_.get(item, "name")}
          />
        ))}
      </TabsCustom>
    </Box>
  );
};

export default ScrollableTabsButtonVisible;
