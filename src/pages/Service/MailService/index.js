import { useState } from "react";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import SelectComponent from "../../../components/SelectComponent";
import { useDispatch, useSelector } from "react-redux";
import { getUser, sendMail as sendMailAction } from "../../../actions/admin.action";
import { useEffect } from "react";
import swal from "sweetalert";

const SendEmail = () => {
  const dispatch = useDispatch()
  const [emailArr, setEmailArr] = useState([]);
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  let emailList = useSelector((state) => state.admin.users);
  console.log(emailList)

  emailList = emailList.map((item, index) => ({
    id: index + 1,
    name: item.firstName + " " + item.lastName,
    email: item.email,
  }));

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const sendMail = async () => {
    const emails = emailArr.toString()
    const mail = {
      email: emails,
      title: title,
      message: content
    }
    await dispatch(sendMailAction(mail))
      .then(() => {
        swal({
          title: "Thông báo",
          text: "Gửi Mail Thành Công",
          icon: "success",
        });
      })
      .catch(() => {
        swal({
          title: "Thông báo",
          text: "Gửi Mail Thất Bại",
          icon: "warning",
        });
      });
  }

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
                selectedFieldName="email"
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
              <TextField label="Title" fullWidth placeholder="Nhập tiêu đề" onChange={e => setTitle(e.target.value)} />
            </Grid>

            <Grid item xs={12} marginBottom="24px">
              <TextField
                label="Content"
                fullWidth
                placeholder="Nhập nội dung"
                multiline
                rows={7}
                onChange={e => setContent(e.target.value)}
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
              <Button variant="contained" color="primary" onClick={sendMail}>
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
