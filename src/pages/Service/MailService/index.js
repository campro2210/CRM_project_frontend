import { useState } from "react";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import SelectComponent from "../../../components/SelectComponent";
import { useSelector } from "react-redux";

const SendEmail = () => {
  const [emailArr, setEmailArr] = useState([]);

  let emailList = useSelector((state) => state.admin.users);

  emailList = emailList.map((item, index) => ({
    id: index + 1,
    name: item.firstName + " " + item.lastName,
    email: item.email,
  }));

  console.log(emailList);

  console.log(emailArr);
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <Grid style={{ padding: "30px 30px 30px 0" }}>
            <Typography variant="h3" color="secondary">
              {" "}
              Dịch vụ gửi mail
            </Typography>
          </Grid>
          <Paper style={{ width: "100%", padding: "50px" }}>
            <Grid xs={12} marginBottom="24px">
              <SelectComponent
                dataList={emailList}
                selectedFieldName="name"
                selectedFieldValue="email"
                selectedItem={emailArr}
                setSelectedItem={(value) => setEmailArr(value)}
                onChange
                placeholder="Chọn người dùng"
                multiple={true}
                width={"100%"}
              />
            </Grid>
            <Grid item xs={12} marginBottom="24px">
              <TextField label="Title" fullWidth placeholder="Nhập tiêu đề" />
            </Grid>

            <Grid item xs={12} marginBottom="24px">
              <TextField
                label="Content"
                fullWidth
                placeholder="Nhập nội dung"
                multiline
                rows={7}
              />
            </Grid>
          </Paper>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            marginTop="24px"
          >
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                {" "}
                Send email
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SendEmail;
