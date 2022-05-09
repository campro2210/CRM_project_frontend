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
  const { typeFeedback, created, handleDetail, handleDelete, from } = props;
  return (
    <>
      <Grid
        direction="row"
        container
        xs={12}
        border="1px solid #ccc"
        style={{
          "& :hover": { cursor: "pointer" },
          borderRadius: "12px",
          marginBottom: "8px",
          padding: "24px",
          justifyContent: "space-between",
        }}
      // className="wrapper"
      >
        <Grid item xs={5} onClick={handleDetail}>
          <Typography color="secondary" variant="h5">
            {" "}
            {from}
          </Typography>
        </Grid>
        <Grid item xs={2} onClick={handleDetail}>
          <Typography
            color="secondary"
            variant="h5"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {" "}
            {typeFeedback}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography color="secondary" variant="subtitle2">
            {created}
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="row"
          justifyContent="flex-end"
          xs={2}
        >
          <Grid item xs={2}>
            <DeleteForeverIcon
              className={classes.icon}
              onClick={handleDelete}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default FeedbackCard;
