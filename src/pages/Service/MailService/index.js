import { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { accounts } from "../../../constant/InitData";
import SelectComponent from "../../../components/SelectComponent";

const SendEmail = () => {
  const [emailArr, setEmailArr] = useState([]);

  console.log(emailArr);
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <Paper style={{ width: "100%", padding: "50px" }}>
            <Grid xs={12} marginBottom="24px">
              <SelectComponent
                dataList={accounts}
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
        </Grid>
      </Grid>
    </>
  );
};

export default SendEmail;
