import React from 'react'
import ReactDOM from 'react-dom';
import { hashHistory,
  Router,
  Route,
  IndexRoute,
  Link,
  IndexLink
} from 'react-router';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="/products/:id" component={Product}
                addToCart={addToCart}
                products={PRODUCTS} />
            <Route path="/cart" component={Cart}
                cartItems={cartItems} products={PRODUCTS} />
        </Route>
        <Route path="/checkout" component={Checkout}
            cartItems={cartItems} products={PRODUCTS} />
    </Router>
), document.getElementById('content'))
