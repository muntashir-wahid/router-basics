import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productName">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
