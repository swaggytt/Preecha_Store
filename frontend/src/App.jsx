import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import homePage from "./containers/homePage/homePage";
import addProductPage from "./containers/addProductPage/addProductPage";
import productPage from "./containers/productPage/productPage";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route exact path="/product" component={productPage} />
          <Route exact path="/addproduct" component={addProductPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
