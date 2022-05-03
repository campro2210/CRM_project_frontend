import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import * as React from "react";
import theme from "../constant/theme";
import _ from "lodash";

const useStyles = makeStyles(() => ({
  placeholder: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    // fontStyle: "italic",

    color: theme.palette.secondary.main,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectComponent = ({
  dataList = [],
  noPlaceholder = false,
  onChange,
  selectedItem,
  setSelectedItem,
  getAllFieldValue = false,
  placeholder = "Placeholder",
  multiple,
  renderValue = true,
  size = undefined,
  width = 343,
  selectedFieldValue = "name",
  selectedFieldName = "name",
  defaultValue,
  displayEmpty,
  padding,
  disabled = false,
  fullwidth = false,
  style = {},
}) => {
  const classes = useStyles();
  function getStyles(currentItem, selectedItem) {
    // if (getAllFieldValue) {
    //   return {
    //     fontWeight: _.find(
    //       selectedItem,
    //       (element) => _.get(element, selectedFieldName) === currentItem
    //     )
    //       ? "bold"
    //       : "normal",
    //   };
    // }
    // if (multiple) {
    //   return {
    //     fontWeight:
    //       [selectedItem]?.indexOf(currentItem) !== -1 ? "bold" : "normal",
    //   };
    // }
    // console.log();
    // return {
    //   fontWeight:
    //     [currentItem].findIndex(
    //       (item) => item[selectedFieldName] === selectedItem
    //     ) !== -1
    //       ? "bold"
    //       : "normal",
    // };
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    if (value === placeholder) {
      multiple ? setSelectedItem([]) : setSelectedItem();
    }
    else setSelectedItem(value);
  };

  return (
    <FormControl sx={{ margin: 0, width: fullwidth ? "100%" : width }}>
      <Select
        multiple={multiple}
        displayEmpty
        size={size}
        style={style}
        defaultValue={defaultValue}
        value={selectedItem}
        onChange={handleChange}
        input={<OutlinedInput />}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
        renderValue={(selected) => {
          if (_.isEmpty(selected) && _.isNull(selected)) {
            return <span className={classes.placeholder}>{placeholder}</span>;
          }

          if (_.isUndefined(selected)) {
            return <span className={classes.placeholder}>{placeholder}</span>;
          }

          // if (getAllFieldValue) {
          //   return _.join(
          //     _.map(selected, (element) => _.get(element, selectedFieldName)),
          //     ", "
          //   );
          // }

          if (multiple) {
            return dataList
              ?.filter((el) => {
                return selected?.some((f) => {
                  return el[selectedFieldValue] === f;
                });
              })
              ?.map((item) => item[selectedFieldName])
              ?.join(", ");
          }
          // console.log("selected", selected);
          // console.log("dataList", dataList);
          if (getAllFieldValue) {
            return dataList.findIndex(
              (item) => item[selectedFieldName] === selected[selectedFieldName]
            ) !== -1
              ? selected[selectedFieldName]
              : null;
          }

          return _.get(
            dataList.find((el) => el[selectedFieldValue] === selected),
            selectedFieldName
          );

          // return _.join(selected, ", ");
        }}
      >
        {!noPlaceholder && (
          <MenuItem
            disabled={multiple ? true : false}
            value={multiple ? [] : undefined}
          >
            <span
              className={classes.placeholder}
              style={!multiple ? { opacity: "0.38" } : {}}
            >
              {placeholder}
            </span>
          </MenuItem>
        )}
        {_.map(dataList, (item, key) => (
          <MenuItem
            key={key}
            value={getAllFieldValue ? item : _.get(item, selectedFieldValue)}
          >
            {_.get(item, selectedFieldName)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default SelectComponent;
