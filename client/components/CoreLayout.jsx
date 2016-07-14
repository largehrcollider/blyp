import React, { Component } from 'react';
import NavBar from '../containers/NavBar.js';

class CoreLayout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.props.getProducts();
  }
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}

export default CoreLayout;
