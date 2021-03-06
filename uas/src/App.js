import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
//import Admin from "./admin/Admin";
import Signup from "../src/SignUp/Signup";
import Api from "./Maps/Api";
import { AuthProvider } from "./Auth/Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          {/* <Route exact path="/admin" component={Admin} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/Api" component={Api} />


        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;