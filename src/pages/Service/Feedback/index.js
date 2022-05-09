import FeedbackCard from "./FeedbackCard";
import { Paper, Grid, Typography } from "@mui/material";
import ScrollableTabsButtonVisible from "../../../components/ScrollableTabsButtonVisible";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadFeedback, deleteFeedback } from "../../../actions/admin.action";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import moment from "moment";
import swal from "sweetalert";

const Feedback = () => {
  const [feedbackReplied, setFeedbackReplied] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const history = useHistory();

  const tabs = [
    { id: 0, name: "Chưa phản hồi" },
    { id: 1, name: "Đã phản hồi" },
  ];
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.admin.feedbacks);
  useEffect(() => {
    dispatch(loadFeedback());
  }, []);

  useEffect(() => {
    if (feedbacks) {
      setFeedback(feedbacks.filter((el) => el.status == 0));
      setFeedbackReplied(feedbacks.filter((el) => el.status == 1));
    }
  }, [feedbacks]);

  const handleDelete = async (id) => {
    await dispatch(deleteFeedback(id))
      .then(() => {
        swal({
          title: "Thông báo",
          text: "Xóa thành công",
          icon: "success",
        });
        dispatch(loadFeedback());
      })
      .catch(() => {
        swal({
          title: "Thông báo",
          text: "Xóa thất bại",
          icon: "warning",
        });
      });

  }

  const [tabIndex, setTabIndex] = useState(_.get(_.head(tabs), "id"));

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
      <Grid container direction="row" marginLeft="24px">
        <ScrollableTabsButtonVisible tabs={tabs} setTabIndex={setTabIndex} />
      </Grid>

      <Grid container direction="row">
        <Paper
          style={{
            width: "100%",
            margin: "0 24px",
            minHeight: "calc(100vh - 340px)",
            padding: "32px",
            marginBottom: "45px",
            position: "relative",
          }}
        >
          {tabIndex === 0 &&
            feedback.map((item, index) => (
              <FeedbackCard
                typeFeedback={item.title}
                key={index}
                style={{ marginBottom: "8px" }}
                created={moment(item.createdAt).format("l")}
                from={item.email}
                handleDetail={() =>
                  history.push(`/service/feedback/detail/${item._id}`)
                }
                handleDelete={() => handleDelete(item._id)}
              />
            ))}
          {tabIndex === 1 &&
            feedbackReplied.map((item, index) => (
              <FeedbackCard
                key={index}
                typeFeedback={item.title}
                from={item.email}
                created={moment(item.createdAt).format("l")}
                handleDelete={() => handleDelete(item._id)}
              />
            ))}
        </Paper>
      </Grid>
    </>
  );
};
export default Feedback;
