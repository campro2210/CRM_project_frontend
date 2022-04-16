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
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import CreateCustomer from "./pages/Customer/CreateCustomer";
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
const socket = io.connect("http://localhost:5000");

function App() {
  const [auth, setAuth] = useState(true);

  const [searchText, setSearchText] = useState("");

  const PrivateRoute = ({ component, path, exact, render = undefined }) => {
    const condition = localStorage.getItem("token");

    return condition ? (
      <Route path={path} exact component={component} render={render} />
    ) : (
      <Redirect to="/signin" />
    );
  };

  useEffect(() => {
    if (window.localStorage.getItem("refresh_token")) {
      setAuth(true);
    }
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path={slugs.Landing} render={() => <Landing />} />
            <Route exact path={slugs.SignIn} render={() => <SignIn />} />
            <Route
              exact
              path={slugs.SignUp}
              render={() => <SignUp setAuth={setAuth} />}
            />
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
