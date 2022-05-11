import FieldInfor from "../EditAccount/FieldInfor";
import React, { useEffect, useState } from "react";
import { slugs } from "../../constant/slugs";
import {
  Grid,
  Typography,
  Paper,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, getUserBySlug } from "../../actions/admin.action";
import _ from "lodash";
import moment from "moment";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import swal from "sweetalert";

const EditCustomer = () => {
  // const [birthDay, setBirthDay] = useState();
  const userInfor = useSelector((state) => state.admin.user);
  const dispatch = useDispatch();
  const id = useParams();
  useEffect(() => {
    const handleDetailUser = async () => {
      await dispatch(getUserBySlug(id.id));
    };
    handleDetailUser();
  }, [dispatch]);

  const history = useHistory();

  const {
    control,
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: userInfor.firstName,
      lastName: userInfor.lastName,
      email: userInfor.email,
      phone_number: userInfor.phone_number,
      address: userInfor.address
    },
  });

  const [gender, setGender] = useState();
  const [birthday, setBirthday] = useState();
  useEffect(() => {
    if (userInfor) {
      setValue("firstName", userInfor.firstName, "");
      setValue("lastName", userInfor.lastName, "");
      setValue("email", userInfor.email, "");
      setValue("phone_number", userInfor.phone_number, "");
      setValue("address", userInfor.address, "");

      setGender(userInfor.sex);
      //   setBirthday(moment(userInfor.date_of_birth).format("YYYY-MM-DD"));
      setBirthday(userInfor.date_of_birth);
    }
  }, [userInfor]);
  // console.log(birthDay)
  const onSubmit = (values) => {
    const dateOfBirth = moment(birthday).format("YYYY-MM-DD")

    const userToUpdate = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone_number: values.phone_number,
      email: values.email,
      address: values.address,
      sex: gender,
      date_of_birth: dateOfBirth,
    };
    dispatch(updateUser(userToUpdate))
      .then(() => {
        history.push(slugs.Customer);
        swal({
          title: "Thông báo",
          text: "Cập nhật user thành công!",
          icon: "success",
        });
      })
      .catch(() => {
        swal({
          title: "Thông báo",
          text: "Cập nhật user thất bại!",
          icon: "warning",
        });
      });
  };

  const genderList = [
    { id: 1, name: "Nam" },
    { id: 2, name: "Nữ" },
  ];

  return (
    <>
      <Grid style={{ padding: "30px", marginLeft: "24px" }}>
        <Typography variant="h4" color="secondary">
          {" "}
          Chỉnh sửa thông tin cá nhânnn
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Paper
          style={{ padding: "30px", marginLeft: "24px", marginRight: "24px" }}
        >
          <Grid direction="row" container justifyContent="space-between">
            <Grid item xs={5}>
              <FieldInfor
                label="Họ"
                fieldName="firstName"
                // value={{...register(employee.firstName)}}
                control={control}
              />
            </Grid>
            <Grid item xs={5}>
              <FieldInfor
                label="Tên"
                fieldName="lastName"
                // value={employee.lastName}
                control={control}
              />
            </Grid>
          </Grid>
          <Grid direction="row" container justifyContent="space-between">
            <Grid item xs={5}>
              <FieldInfor
                disabled={true}
                placeholder=""
                label="Email"
                fieldName="email"
                control={control}
              />
            </Grid>
            <Grid item xs={5}>
              <FieldInfor
                placeholder=""
                label="Điện thoại"
                fieldName="phone_number"
                control={control}
              />
            </Grid>
          </Grid>
          <Grid direction="row" container justifyContent="space-between">
            <Grid item xs={5}>
              <FieldInfor
                placeholder=""
                label="Địa chỉ"
                fieldName="address"
                control={control}
              />
            </Grid>
            <Grid item xs={5}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Giới tính
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={gender ? gender.toString() : ""}
                  onChange={(e) => setGender(parseInt(e.target.value))}
                  row
                >
                  {genderList.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      label={item.name}
                      value={item.id}
                      control={<Radio />}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid direction="row" container justifyContent="space-between">
            <Grid direction="row" container justifyContent="space-between">
              <Grid
                item
                container
                direction="row"
                justifyContent="space-between"
                xs={5}
                alignItems="center"
              >
                <Grid item xs={4}>
                  <Typography variant="body1" color="secondary">
                    Birthday
                  </Typography>
                </Grid>
                <Grid item xs={7} marginRight="36px">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      openTo="year"
                      views={["year", "month", "day"]}
                      inputFormat="dd/MM/yyyy"
                      value={birthday}
                      onChange={(newValue) => {
                        setBirthday(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          helperText={null}
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Grid item xs={5}></Grid>
            </Grid>
          </Grid>
        </Paper>

        <Grid container direction="row" justifyContent="flex-end">
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ margin: "24px" }}
            >
              {" "}
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default EditCustomer;
