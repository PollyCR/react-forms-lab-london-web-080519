import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  calculateRemainingCharacters = () => {
    // console.log(this)
        let messageLength = this.state.message.length
    return this.props.maxChars - messageLength
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    })
  };

  render() {
    return (
     <div><input
      type="text"
      name="message"
      id="message"
      onChange={event => this.handleMessage(event)}
      value={this.state.message}
    />
    <p>Character Count: {this.calculateRemainingCharacters()}</p>
    </div>
    )}
}

export default TwitterMessage;
