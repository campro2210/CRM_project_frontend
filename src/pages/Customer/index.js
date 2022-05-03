import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography";

import TableComponent from "../../components/TableComponent";
import { useHistory } from "react-router-dom";
import { slugs } from "../../constant/slugs";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/admin.action";
import moment from "moment";

const Customer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.users);

  useEffect(() => {
    const getUsers = async () => {
      await dispatch(getUser());
    };
    getUsers();
  }, [dispatch]);

  console.log(users);

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    setDataTable(
      users.map((item, index) => ({
        _id: item._id,
        id: index + 1,
        name: item.firstName + " " + item.lastName,
        email: item.email,
        phoneNumber: item.phone_number,
        // birthday: moment(item.day_of_birth).format("YYYY-MM-DD"),
        birthday: moment(item.date_of_birth).format("YYYY-MM-DD"),

      }))
    );
  }, [users]);
  console.log(dataTable);

  const [skip, setSkip] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const history = useHistory();

  const columns = [
    {
      name: "_id",
      options: {
        display: false,
      },
    },
    { name: "id", label: "ID" },
    {
      name: "name",
      label: "Name",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "phoneNumber",
      label: "Phone number",
    },
    {
      name: "birthday",
      label: "Day of birth",
    },
  ];

  const handleEditUser = (user) => {
    history.push(`/customer/detail/${user[0]}`);
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        paddingTop="32px"
        paddingBottom="32px"
        padding="30px 24px"
        margin=" 16px"
        direction="row"
        justifyContent="space-between"
      >
        <Grid item>
          <Typography variant="h3">Quản lý khách hàng</Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => history.push(slugs.CreateCustomer)}
          >
            Tạo mới khách hàng
          </Button>
        </Grid>
      </Grid>
      <Paper style={{ width: "100%", padding: " 30px" }}>
        <TableComponent
          column={columns}
          data={dataTable}
          count={dataTable.length}
          onRowClick={handleEditUser}
          setSkip={setSkip}
          loading={false}
          setPage={setPageIndex}
          pageIndex={pageIndex}
          pagination={true}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </Paper>
    </>
  );
};
export default Customer;
