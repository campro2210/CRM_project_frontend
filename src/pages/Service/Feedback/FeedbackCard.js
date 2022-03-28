import { Grid, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ReplyIcon from "@mui/icons-material/Reply";
import { makeStyles } from "@mui/styles";

const FeedbackCard = (props) => {
  const useStyles = makeStyles((theme) => ({
    icon: {
      color: "secondary",

      "&:hover": {
        cursor: "pointer",
        color: "Primary",
      },
    },
    container: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  }));

  const classes = useStyles();
  const { typeFeedback, created, handleDetail } = props;
  return (
    <>
      <Grid
        direction="row"
        container
        xs={12}
        borderBottom="1px dashed #ccc"
        padding="24px"
        justifyContent="space-between"
        onClick={handleDetail}
      >
        <Grid item xs={6}>
          <Typography color="secondary" variant="body2">
            {" "}
            {typeFeedback}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography color="primary" variant="subtitle2">
            {created}
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="row"
          justifyContent="flex-end"
          xs={3}
        >
          <Grid item xs={4}>
            <ReplyIcon className={classes.icon} />
          </Grid>
          <Grid item xs={4}>
            <DeleteForeverIcon className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default FeedbackCard;
