import React, { Component } from 'react';
import NavBar from './NavBar.jsx';

class CoreLayout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProducts();
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
