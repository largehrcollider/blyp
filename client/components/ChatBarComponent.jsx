import React from 'react'
import { Component } from 'react'
// import socket.io
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';


export default class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    var message = this.state.message.trim();
    if (!message) {
      return;
    }

    this.props.sendMessage(message);

    this.setState({message: ''});
  }
  handleMessageChange(e) {
    this.setState({message: e.target.value});
  }
  render() {

    // make form equal to steven's
    return (
      <div className={bootstrap.container}>
        <div className={bootstrap.row}>
          <form className="loginSignup" onSubmit={this.handleSubmit.bind(this)}>
            <input
              onChange={this.handleMessageChange.bind(this)}
              placeholder="Message..."
              type="text"
              value={this.state.message}
            />
            <input className="submitButton" type="submit" value="Submit" />
            <button id="chatButton" onClick={this.props.chatDisplay}>Toggle chat</button>
          </form>
        </div>
      </div>
    );
  }
}
