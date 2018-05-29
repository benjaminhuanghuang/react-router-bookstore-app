Heading
import React from 'react'
import ReactDOM from 'react-dom';
import { hashHistory,
  Router,
  Route,
  IndexRoute,
  Link,
  IndexLink
} from 'react-router';

import Heading from './Heading';

import Modal from './modal'
import Cart from './cart'
import Checkout from './checkout'
import Product from  './product'

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.isModal = (nextProps.location.state &&
      nextProps.location.state.modal)
    if (this.isModal &&
      nextProps.location.key !== this.props.location.key) {
      this.previousChildren = this.props.children
    }
  }
  render() {
    return (
      <div className="well">
        <Heading/>
        <div>
          {(this.isModal)?this.previousChildren:this.props.children}
          {/* {this.props.children} */}
          {(this.isModal)?
            <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>
              {this.props.children}
            </Modal> : ''
          }
        </div>
      </div>
    )
  }
}
