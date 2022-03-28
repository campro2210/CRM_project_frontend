import FeedbackCard from "./FeedbackCard";
import { Paper, Grid, Typography } from "@mui/material";

const Feedback = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        paddingTop="32px"
        paddingBottom="32px"
        paddingLeft="24px"
        marginLeft="16px"
      >
        <Typography variant="h3">Hộp thư Feedback</Typography>
      </Grid>
      <Paper
        style={{
          width: "100%",
          padding: "30px",
          marginLeft: "24px",
          marginRight: "24px",
        }}
      >
        <FeedbackCard typeFeedback={"khiếu nại"} created={"22-10-2000"} />
        <FeedbackCard typeFeedback={"khiếu nại"} created={"22-10-2000"} />
        <FeedbackCard typeFeedback={"khiếu nại"} created={"22-10-2000"} />
      </Paper>
    </>
  );
};
export default Feedback;
