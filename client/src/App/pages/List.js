import React, { Component } from 'react';

class List extends Component {


  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      action: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getReceivedAction();

  }


  // Retrieves the list of items from the Express app
  getReceivedAction = () => {
    fetch('/receivedAction')
    .then(res => res.json())
    .then(action => this.setState({action}))
  }

  render() {
    const { action } = this.state;

    setInterval(() => {
      this.getReceivedAction();
    }, 1000);

    return (
      <div className="App">
        <h1>RECEIVED ACTION</h1>
        <h2>{action.platform}</h2>
        <h3>{action.name}</h3>
        <p>{action.description}</p>
        <p>{action.requestFieldsNames}</p>
      </div>
    );
  }
}

export default List;