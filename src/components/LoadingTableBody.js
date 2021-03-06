import React from "react";
import { TableBody, TableBodyCell, TableBodyRow } from "mui-datatables";
import {
  CircularProgress,
  Typography,
  TableBody as MuiTableBody,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    loading: {
      textAlign: "center",
    },
  })
);

const LoadingTableBody = ({ loading, options, columns, ...others }) => {
  // @ts-ignore

  const visibleColCnt = columns.filter((c) => c.display === "true").length;
  const classes = useStyles();
  return loading ? (
    <MuiTableBody>
      <TableBodyRow options={options}>
        <TableBodyCell
          // @ts-ignore
          colSpan={
            options.selectableRows !== "none" || options.expandableRows
              ? visibleColCnt + 1
              : visibleColCnt
          }
          options={options}
          colIndex={0}
          rowIndex={0}
        >
          <Typography
            variant="body1"
            className={classes.loading}
            component={"div"}
          >
            <CircularProgress disableShrink />
          </Typography>
        </TableBodyCell>
      </TableBodyRow>
    </MuiTableBody>
  ) : (
    <TableBody options={options} columns={columns} {...others} />
  );
};

export default LoadingTableBody;
