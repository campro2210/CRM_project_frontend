import { Paper, Grid, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

const DetailFeedBack = (props) => {
  const [textEmail, setTextEmail] = useState("");
  const handleTextEmail = (e) => {
    setTextEmail(e.target.value);
  };

  const handleReplyEmail = () => {
    console.log(textEmail);
  };
  return (
    <>
      <Grid style={{ padding: "30px", marginLeft: "24px" }}>
        <Typography variant="h4" color="secondary">
          {" "}
          Chi tiết Feedback
        </Typography>
      </Grid>
      <Grid xs={12} container justifyContent="center" style={{ width: "100%" }}>
        <Grid item xs={7}>
          <Paper
            style={{
              width: "100%",
              padding: "30px",
              marginLeft: "24px",
              marginRight: "24px",
            }}
          >
            <Grid container direction="row" marginBottom="24px">
              <Grid item>
                <Typography variant="body1" color="secondary">
                  Email:
                </Typography>
              </Grid>
              <Grid item>
                {" "}
                <Typography variant="body1" color="secondary">
                  {props.email}{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" marginBottom="24px">
              <Grid item>
                <Typography variant="body1" color="secondary">
                  {" "}
                  Loại Feedback :
                </Typography>
              </Grid>
              <Grid item>
                {" "}
                <Typography variant="body1" color="secondary">
                  {props.type}{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid direction="column" container>
              <Grid item>
                <Typography variant="body1" color="secondary">
                  Nội dung Feedback :
                </Typography>
              </Grid>
              <Grid item>
                {" "}
                <Typography variant="body1" color="secondary">
                  {props.content}{" "}
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper
            style={{
              marginTop: "24px",
              width: "100%",
              padding: "30px",
              marginLeft: "24px",
              marginRight: "24px",
            }}
          >
            <Grid direction="column" gap={2} container>
              <Grid item>
                <Typography variant="body1" color="secondary">
                  Nội dung trả lời :
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  placeholder="Nhập nội dung"
                  multiline
                  rows={7}
                  onChange={(e) => handleTextEmail(e)}
                />
              </Grid>
            </Grid>
          </Paper>
          <Grid
            item
            container
            direction="row"
            gap={2}
            justifyContent="flex-end"
            marginTop="24px"
          >
            <Grid item>
              <Button variant="contained" color="grey">
                Xóa Feedback
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={handleReplyEmail}
                color="primary"
              >
                Trả lời
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default DetailFeedBack;
