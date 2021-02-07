import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import homePage from "./containers/homePage/homePage";
import addProductPage from "./containers/addProductPage/addProductPage";
import productPage from "./containers/productPage/productPage";
import Navbar from "./components/navbar";
import editPage from "./containers/editPage/editPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route exact path="/product" component={productPage} />
          <Route exact path="/addproduct" component={addProductPage} />
          <Route exact path="/edit" component={editPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
