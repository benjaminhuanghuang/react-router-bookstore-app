
const React = require('react')
const ReactDOM = require('react-dom')
const { hashHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} = require('react-router');

import Copy from './Copy';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Copy />
                <p><Link to="/cart" className="btn btn-danger">Cart</Link></p>
                <div>
                    {PRODUCTS.map(picture => (
                        <Link key={picture.id}
                            to={{
                                pathname: `/products/${picture.id}`,
                                state: {
                                    modal: true,
                                    returnTo: this.props.location.pathname
                                }
                            }
                            }>
                            <img style={{ margin: 10 }} src={picture.src} height="100" />
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}