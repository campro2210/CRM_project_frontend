import { Grid, TextField, Typography, InputAdornment } from "@mui/material";
import { Controller } from "react-hook-form";

const FieldInfor = (props) => {
  const {
    label,
    fieldName,
    control,
    gap = 2,
    placeholder = `${label}`,

    inputType = "text",
  } = props;
  return (
    <>
      <Grid
        container
        direction="row"
        gap={gap}
        alignItems="center"
        style={{ marginBottom: "24px" }}
      >
        <Grid item xs={4}>
          <Typography variant="body1" color="secondary">
            {" "}
            {label}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Controller
            control={control}
            name={fieldName}
            render={({ field }) => (
              <TextField
                placeholder={placeholder}
                fullWidth
                type={inputType}
                size="small"
                {...field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <Typography
                        variant="body2"
                        color="secondary"
                      ></Typography>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FieldInfor;
