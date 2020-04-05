import React, { createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./component/Header/Header";
import Banner from "./component/Banner/Banner";
import Foods from "./component/Foods/Foods";
import FoodDetails from "./component/FoodDetails/FoodDetails";
import CheckOut from "./component/Checkout/CheckOut";
import NotFound from "./component/NotFound/NotFound";
import SIgnUp from "./component/SIgnUp/SIgnUp";
import Nav from "./component/Nav/Nav";
import Login from "./component/Login/Login";
import { AuthContextProvider } from "./component/Login/userAuth";
import RoadMap from "./component/RoadMap/RoadMap";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
              <Foods></Foods>
            </Route>

            <Route path="/foodDetails/:foodKey">
              <FoodDetails></FoodDetails>
            </Route>

            <Route path="/sign-up">
              <SIgnUp></SIgnUp>
            </Route>

            <Route path="/checkout">
              <CheckOut></CheckOut>
            </Route>

            <Route path="/roadMap">
              <RoadMap></RoadMap>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*/">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
      <br/>
    </div>
  );
}

export default App;