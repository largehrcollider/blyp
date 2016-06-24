import React from 'react';
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
        {children}
      </div>
    );
  }
}

export default CoreLayout;
