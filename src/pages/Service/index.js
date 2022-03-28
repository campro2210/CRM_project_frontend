import { slugs } from "../../constant/slugs";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Service = () => {
  const history = useHistory();
  return (
    <>
      <Button onClick={(e) => history.push(slugs.MailService)}>Service</Button>
      <Button onClick={(e) => history.push(slugs.Feedback)}>Feedback</Button>
    </>
  );
};
export default Service;
