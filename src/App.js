import './App.css';
import {BrowserRouter as Router,Switch, Route, Link, Redirect,} from "react-router-dom";
import Home from "./pages/Home.js";
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register.js';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import Success from './pages/Success';



function App() {
  const user=true;
  return (
    <Router>
    
    <Switch>
      <Route  exact path="/">
        <Home/>
      </Route>
      <Route  exact path="/products/:category">
        <ProductList/>
      </Route>
      <Route  exact path="/product/:id">
        <Product/>
      </Route>
      <Route  exact path="/cart">
        <Cart/>
      </Route>
      <Route  exact path="/login">
      {user ? <Redirect to="/"/> : <Login/> }

      </Route>
      <Route  exact path="/register">
        <Register/>
        </Route>
        <Route  exact path="/success">
          <Success/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
