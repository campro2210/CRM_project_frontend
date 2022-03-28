import { Paper, Grid, Typography } from "@mui/material";

const DetailFeedBack = (props) => {
  return (
    <>
      <Grid xs={8} container justifyContent="center">
        <Grid item xs={12}>
          <Paper
            style={{
              width: "100%",
              padding: "30px",
              marginLeft: "24px",
              marginRight: "24px",
            }}
          >
            <Grid container direction="row">
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
            <Grid container direction="row">
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
        </Grid>
      </Grid>
    </>
  );
};
export default DetailFeedBack;
