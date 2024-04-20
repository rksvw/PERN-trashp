import { Fragment } from "react";
import "./App.css";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <Fragment>
      <IndexPage />
      {/* <Fragment>
        <Router>
          <Route exact path="/" render={() => <Index />} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/admin" render={() => <Admin />} />
          <Route exact path="/newuser" render={() => <NewUser />} />
        </Router>

      </Fragment> */}
    </Fragment>
  );
}

export default App;
