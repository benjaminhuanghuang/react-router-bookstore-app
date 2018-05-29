const React = require('react')
const ReactDOM = require('react-dom')
const { hashHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} = require('react-router')

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Modal = require('./modal.jsx')
const Cart = require('./cart.jsx')
const Checkout = require('./checkout.jsx')
const Product = require('./product.jsx')

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
