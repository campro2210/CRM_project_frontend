import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import {
  Button,
  Grid,
  Paper,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  FormControl,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SelectComponent from "../../components/SelectComponent";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FieldInfor from "../EditAccount/FieldInfor";
import moment from "moment";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { userUpdate } from "../../actions/user.actions"
import { domain } from "../../helpers/domain"
import "./UpdateUserAccount.css"
const UpdateUserAccount = () => {
  const dispatch = useDispatch()
  const [avatar, setAvatar] = useState(null)
  const genderList = [
    { id: 1, name: "Nam" },
    { id: 2, name: "Nữ" },
  ];
  const [birthday, setBirthday] = useState();

  const data = useSelector((state) => state.user.user);

  const [gender, setGender] = useState();
  const history = useHistory();

  const {
    control,
    handleSubmit,

    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone_number: data.phone_number,
      address: data.address,
    },
  });

  const handleChangeImage = e => {
    setAvatar(e.target.files[0])
    console.log(e.target)
  }

  useEffect(() => {
    if (data) {
      setValue("firstName", data.firstName, "");
      setValue("lastName", data.lastName, "");
      setValue("email", data.email, "");
      setValue("phone_number", data.phone_number, "");
      setValue("address", data.address, "");

      setGender(data.sex);
      //   setBirthday(moment(userInfor.date_of_birth).format("YYYY-MM-DD"));
      setBirthday(data.date_of_birth);
    }
  }, [data]);

  const onSubmit = (values) => {
    const dateOfBirth = moment(birthday).format("YYYY-MM-DD");
    // const userToUpdate = {
    //   firstName: values.firstName,
    //   lastName: values.lastName,
    //   phone_number: values.phone_number,
    //   email: values.email,
    //   address: values.address,
    //   sex: gender,
    //   date_of_birth: dateOfBirth,
    // };
    // console.log({ userToUpdate });
    const form = new FormData()
    form.append('firstName', values.firstName)
    form.append('lastName', values.lastName)
    form.append('phone_number', values.phone_number)
    form.append('email', values.email)
    form.append('address', values.address)
    form.append('sex', gender)
    form.append('date_of_birth', dateOfBirth)

    if (avatar !== null) {
      form.append('avatar', avatar)
    }
    // console.log(avatar)
    dispatch(userUpdate(form))
  };
  return (
    <>
      <AppBar />
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        paddingTop="24px"
        gap={3}
      >
        <Grid item container direction="row" justifyContent="center">
          <Grid item>
            <Typography variant="h2">Thông tin tài khoản</Typography>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Grid item xs={12} container direction="row" justifyContent="center">
            <Grid item sm={8}>
              <Grid direction="row" container justifyContent="space-between">
                <Grid item xs={5}>
                  <FieldInfor
                    label=" FirstName"
                    fieldName="firstName"
                    // value={{...register(employee.firstName)}}
                    control={control}
                  />
                </Grid>
                <Grid item xs={5}>
                  <FieldInfor
                    label=" Last name"
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
                    placeholder="abcxyz"
                    label=" Email"
                    fieldName="email"
                    control={control}
                  />
                </Grid>
                <Grid item xs={5}>
                  <FieldInfor
                    placeholder="abcxyz"
                    label=" Phone number"
                    fieldName="phone_number"
                    control={control}
                  />
                </Grid>
              </Grid>
              <Grid direction="row" container justifyContent="space-between">
                <Grid
                  item
                  xs={5}
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs={3}>
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
            </Grid>
            <Grid item xs={6} container direction="row" justifyContent="center" style={{ paddingLeft: "0px", marginTop: "50px" }}>
              <div className="settingsPP">
                <img
                  src={avatar ? URL.createObjectURL(avatar) : `${domain.local}/upload/${data.userImage}`}
                  alt=""
                />
                <label htmlFor="fileInput">
                  <AccountCircleIcon className="settingsPPIcon"></AccountCircleIcon>
                </label>
                <input
                  id="fileInput"
                  type="file"
                  name="avatar"
                  style={{ display: "none" }}
                  className="settingsPPInput"
                  onChange={(e) => handleChangeImage(e)}
                />
              </div>
            </Grid>
            <Grid container direction="row" justifyContent="center">
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ margin: "24px" }}
                // onClick = {() => handleUpdate()}
                >
                  {" "}
                  Update
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Footer />
    </>
  );
};
export default UpdateUserAccount;
