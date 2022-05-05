import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalChangePass = ({
  open,
  handleClose,
  submit,
  newPass,
  oldPass,
  setNewPass,
  setOldPass,
}) => {
  const useStyles = makeStyles((theme) => ({
    title: {
      color: "#00837B",
      fontSize: 24,
      fontWeight: 600,
    },
    description: {
      fontSize: 16,
      fontWeight: "normal",
      color: "#0A2240",
    },
    back: {
      backgroundColor: "#E2E1E1 !important",
      color: "#0A2240 !important",
      width: 150,
      height: 48,
    },
    confirm: {
      backgroundColor: "#00837B",
      color: "#fff",
      width: 150,
      height: 48,
      marginLeft: 12,
    },
  }));
  const classes = useStyles();

  const [reNewPass, setReNewPass] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (newPass.length <= 8) {
      setError("Mật khẩu phải nhiều hơn 8 kí tự");
    } else if (reNewPass && reNewPass !== newPass) {
      setError("Mật khẩu mới phải trùng khớp nhau");
    }
  }, [reNewPass, newPass]);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography className={clsx(classes.title)} variant="h6" component="h2">
          Bạn muốn đổi mật khẩu?
        </Typography>
        <Grid container direction="column" gap={3}>
          <Grid item container direction="column" gap={1}>
            <Grid item>
              <Typography> Nhập mật khẩu cũ</Typography>
            </Grid>
            <Grid item>
              <TextField
                value={oldPass}
                onChange={(e) => setOldPass(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" gap={1}>
            <Grid item>
              <Typography> Nhập mật khẩu mới</Typography>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                value={newPass}
                error={newPass.length <= 8}
                helperText={error}
                onChange={(e) => setNewPass(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" gap={1}>
            <Grid item>
              <Typography>Xác nhân mật khẩu mới</Typography>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                value={reNewPass}
                error={reNewPass !== newPass}
                helperText={error}
                onChange={(e) => setReNewPass(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          marginTop="30px"
          spacing={2}
        >
          <Grid item>
            <Button
              //   disabled={loading}
              variant="contained"
              size="small"
              onClick={handleClose}
              className={clsx(classes.back)}
            >
              Quay lại
            </Button>
          </Grid>
          <Grid item>
            <Button
              //   disabled={loading}
              variant="contained"
              size="small"
              disabled={newPass !== reNewPass}
              onClick={submit}
              className={clsx(classes.confirm)}
            >
              Xác nhận
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalChangePass;
