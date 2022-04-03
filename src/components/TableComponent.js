import { TablePagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import React, { useMemo } from "react";
import theme from "../constant/theme";
import LoadingTableBody from "./LoadingTableBody";

const tableTheme = createTheme({
  components: {
    MuiPaper: {
      backgroundColor: "#fff",
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    // MuiToolbar: {
    //   styleOverrides: {
    //     root: {
    //       display: "none"
    //     }
    //   }
    // },
    MuiTable: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif",
          color: "#0A2240",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey.main,
          "& .MuiTableRow-head": {},

          "& .MuiTableCell-head": {
            fontWeight: "600 ",
            fontSize: "16px",
            lineHeight: "20px",
            color: theme.palette.secondary,
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          "& .MuiTablePagination-select": {
            border: "1px solid #E2e1e1",
            borderRadius: "13px",
            fontFamily: "Montserrat, sans-serif",
          },
          "& .MuiTablePagination-selectLabel": {
            fontFamily: "Montserrat, sans-serif",
          },
          "& .MuiTablePagination-displayedRows": {
            fontFamily: "Montserrat, sans-serif",
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiCheckbox-root .Mui-checked > svg": {
            color: "#000 !important",
          },
        },
      },
    },
  },
});

const TableComponent = ({
  data = [],
  count = 0,
  column,
  onRowClick,
  pageIndex = 0,
  setPage,
  setSkip,
  autoPagination = true,
  rowsPerPage = 10,
  setRowsPerPage,
  loading = true,
  selectableRows = "none",
  selectableRowsHeader = false,
  selectableRowsOnClick = false,
  onRowSelectionChange,
  selectToolbarPlacement,
}) => {
  const BodyComponent = useMemo(
    () => (props) => <LoadingTableBody loading={loading} {...props} />,
    [loading]
  );

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
    setSkip(newPage * rowsPerPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    console.log(event.target.value);
    setPage(0);
  };
  return (
    <ThemeProvider theme={tableTheme}>
      <MUIDataTable
        data={data}
        columns={column}
        components={{ TableBody: BodyComponent }}
        options={{
          filter: true,
          download: true,
          search: true,
          print: false,
          viewColumns: true,
          selectableRows: selectableRows,
          selectableRowsHeader: selectableRowsHeader,
          fixedHeader: false,
          sort: false,
          onRowClick: onRowClick,
          pagination: autoPagination,
          onRowSelectionChange: onRowSelectionChange,
          selectableRowsOnClick: selectableRowsOnClick,
          selectToolbarPlacement: selectToolbarPlacement,
          customToolbarSelect: () => {},
          // setRowProps: (row, index) => {
          //   return {
          //     style: {
          //       backgroundColor: index === 1 ? "yellow" : "#e3e3e3",
          //       cursor: "pointer",
          //     },
          //   };
          // },
        }}
      />

      {/* <TablePagination
        component="div"
        count={count}
        onPageChange={handlePageChange}
        page={pageIndex}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 20]}
        onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)}
      /> */}
    </ThemeProvider>
  );
};

export default TableComponent;
