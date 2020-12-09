import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col } from "reactstrap";
import NavbarComponent from "./components/Navbar.js";
import routes from "./config/routes";
import "react-notifications/lib/notifications.css";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductsList from "./pages/Products/ProductsList";

function App() {
  return (
    <>
      <Provider store={store}>
        <Row sm={12}>
          <Col>
            <Router>
              <NavbarComponent />
              <Suspense fallback={<div className="loading">Loading...</div>}>
                {/* <CakeContainer /> */}
                {/* <ProductsList /> */}
                <Switch>
                  {routes.map((route, i) => (
                    <Route
                      exact
                      key={i}
                      path={route.path}
                      component={route.component}
                    />
                  ))}
                </Switch>
              </Suspense>
            </Router>
          </Col>
        </Row>
      </Provider>
    </>
  );
}

export default App;
