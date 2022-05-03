import { useState } from "react";
import { BarData, LineData } from "./Data";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { Paper, Grid, Typography } from "@mui/material";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: BarData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: BarData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Paper style={{ width: "80%", padding: "30px", margin: "30px" }}>
          <Grid marginBottom="24px">
            <Typography variant="h4" color="secondary">
              Thống kê số lượng người dùng
            </Typography>
          </Grid>
          <BarChart chartData={userData} />
        </Paper>
        <Paper style={{ width: "80%", padding: "30px", margin: "30px" }}>
          <Grid marginBottom="24px">
            <Typography variant="h4" color="secondary">
              Thống kê số lượng người dùng
            </Typography>
          </Grid>
          <LineChart chartData={data} />
        </Paper>
        <Paper style={{ width: "80%", padding: "30px", margin: "30px" }}>
          <Grid marginBottom="24px">
            <Typography variant="h4" color="secondary">
              Thống kê số lượng người dùng
            </Typography>
          </Grid>
          <BarChart chartData={userData} />
        </Paper>
      </Grid>
    </>
  );
};
export default Dashboard;
