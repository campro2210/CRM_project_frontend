import { useEffect, useState } from "react";
import io from "socket.io-client";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { slugs } from "./constant/slugs";
import theme from "./constant/theme";
import AdminSignIn from "./pages/AdminSignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import CreateCustomer from "./pages/Customer/CreateCustomer";
import EditCustomer from "./pages/Customer/EditCustomer";
import Layout from "./Layout";
import DetailAccount from "./pages/DetailAccount";
import { ThemeProvider } from "@mui/material/styles";
import SendEmail from "./pages/Service/MailService";
import Service from "./pages/Service";
import EditAccount from "./pages/EditAccount";
import Employees from "./pages/Emloyees";
import Feedback from "./pages/Service/Feedback";
import DetailFeedBack from "./pages/Service/Feedback/DetailFeedBack";
import CreateEmployee from "./pages/Emloyees/CreateEmployee";
import DetailEmployee from "./pages/Emloyees/DetailEmployee";
import UpdateEmployee from "./pages/Emloyees/UpdateEmployee";
import Discuss from "./pages/Discuss/index";
import DetailCustomer from "./pages/Customer/DetailCustomer";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import VerifyOtp from "./pages/VerifyOtp";
import DetailUserAccount from "./pages/DetailUserAccount";
import UpdateUserAccount from "./pages/UpdateUserAccount";
import { useDispatch, useSelector } from "react-redux";
import { getUserCyclical, getEmployeeByToken } from "./actions";

const socket = io.connect("http://localhost:5000");

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let token = window.localStorage.getItem("customer_token");
  let employee_token = window.localStorage.getItem("token")
  useEffect(() => {
    if (token) {
      dispatch(getUserCyclical(token));
      // setInterval(function () {
      //   dispatch(getUserCyclical(token))
      // }, 5000);
    }
    if (employee_token) {
      dispatch(getEmployeeByToken(employee_token))
    }
  }, []);

  const [auth, setAuth] = useState(false);
  const [searchText, setSearchText] = useState("");

  const PrivateRoute = ({ component, path, exact, render = undefined }) => {
    const condition = localStorage.getItem("token");

    return condition ? (
      <Route path={path} exact component={component} render={render} />
    ) : (
      <Redirect to="/admin/signin" />
    );
  };

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setAuth(true);
    }
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path={slugs.Landing} render={() => <Landing />} />
            <Route
              exact
              path={slugs.DetailUser}
              render={() => <DetailUserAccount />}
            />
            <Route
              exact
              path={slugs.UpdateUser}
              render={() => <UpdateUserAccount />}
            />
            <Route
              exact
              path={slugs.AdminSignIn}
              render={() => <AdminSignIn />}
            />
            <Route exact path={slugs.SignIn} render={() => <SignIn />} />
            <Route
              exact
              path={slugs.SignUp}
              render={() => <SignUp setAuth={setAuth} />}
            />
            <Route exact path={slugs.VerifyOtp} render={() => <VerifyOtp />} />
            <Layout
              setSearchText={setSearchText}
              auth={auth}
              searchText={searchText}
            >
              <PrivateRoute
                exact
                path={slugs.Home}
                render={() => <Dashboard />}
              />
              <PrivateRoute
                exact
                path={slugs.Customer}
                render={() => <Customer />}
              />
              <PrivateRoute
                exact
                path={slugs.DetailCustomer}
                render={() => <DetailCustomer />}
              />
              <PrivateRoute
                exact
                path={slugs.CreateCustomer}
                render={() => <CreateCustomer />}
              />
              <PrivateRoute
                exact
                path={slugs.EditCustomer}
                render={() => <EditCustomer />}
              />
              <PrivateRoute
                exact
                path={slugs.CustomerService}
                render={() => <Service />}
              />
              <PrivateRoute
                exact
                path={slugs.MailService}
                render={() => <SendEmail />}
              />
              <PrivateRoute
                exact
                path={slugs.Feedback}
                render={() => <Feedback />}
              />
              <PrivateRoute
                exact
                path={slugs.DetailFeedBack}
                render={() => <DetailFeedBack />}
              />
              <PrivateRoute
                exact
                path={slugs.DetailAccount}
                render={() => <DetailAccount />}
              />
              <PrivateRoute
                exact
                path={slugs.EditAccount}
                render={() => <EditAccount />}
              />
              <PrivateRoute
                exact
                path={slugs.Employee}
                render={() => <Employees />}
              />
              <PrivateRoute
                exact
                path={slugs.CreateEmployee}
                render={() => <CreateEmployee />}
              />
              <PrivateRoute
                exact
                path={slugs.DetailEmployee}
                render={() => <DetailEmployee />}
              />
              <PrivateRoute
                exact
                path={slugs.UpdateEmployee}
                render={() => <UpdateEmployee />}
              />
              <PrivateRoute
                exact
                path={slugs.discuss}
                render={() => <Discuss socket={socket} />}
              />
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
