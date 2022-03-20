import { Paper, Grid, Typography } from "@mui/material";

const InforField = ({ fieldName, value }) => {
  return (
    <>
      <Grid
        container
        direction="row "
        justifyContent="space-between"
        alignItems=" center"
      >
        <Grid item>
          <Typography color="secondary" variant="body1">
            {fieldName}:
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="secondary" variant="subtitle2">
            {value}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default InforField;
