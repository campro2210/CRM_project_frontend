import { slugs } from "../../constant/slugs";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadFeedback } from "../../actions/admin.action"
import React, { useEffect, useState } from "react";

const Service = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const feedback = useSelector(state => state.admin.feedbacks)
  console.log(feedback)
  useEffect(() => { 
    dispatch(loadFeedback())
  },[])

  return (
    <>
      <Button onClick={(e) => history.push(slugs.MailService)}>Service</Button>
      <Button onClick={(e) => history.push(slugs.Feedback)}>Feedback</Button>
    </>
  );
};
export default Service;
