import React from 'react';
import { Component } from 'react';
import ChatBar from '../containers/ChatBarContainer.js'
import ChatMessages from '../components/ChatMessageComponent.jsx'

export default class StoreMaster extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    //const {fields: {username, password}, handleSubmit} = this.props;
    return (
      <div>
      <br/>
        Chat Box Here
        <div>
      
        {/* make sure messages gets passed from store from container */}
        <ChatMessages messages={this.props.messages} display={this.props.display}/>
        

        </div>
        <ChatBar chatDisplay={this.props.chatDisplay}/>
      </div>
    );
  }
}