import { useEffect, useState } from "react";
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
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Layout from "./Layout";
import DetailAccount from "./pages/DetailAccount";
import { ThemeProvider } from "@mui/material/styles";
import SendEmail from "./pages/Service/MailService";
import Service from "./pages/Service";

function App() {
  const [auth, setAuth] = useState(false);

  const [searchText, setSearchText] = useState("");

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
            <Route
              exact
              path={slugs.SignIn}
              render={() => <SignIn setAuth={setAuth} />}
            />
            <Route
              exact
              path={slugs.SignUp}
              render={() => <SignUp setAuth={setAuth} />}
            />
            <Layout setSearchText={setSearchText} searchText={searchText}>
              <Route exact path={slugs.Home} render={() => <Home />} />
              <Route exact path={slugs.Customer} render={() => <Customer />} />
              <Route exact path={slugs.Service} render={() => <Service />} />
              <Route
                exact
                path={slugs.MailService}
                render={() => <SendEmail />}
              />
              <Route
                exact
                path={slugs.DetailAccount}
                render={() => <DetailAccount />}
              />
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;