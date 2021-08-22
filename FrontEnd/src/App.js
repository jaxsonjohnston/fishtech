import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {

  state = {
    whoIsData: ""
  }

  constructor() {
    super();
  }

    
  submitRequest = () => {
    var address = document.getElementById('inputValue').value;
    console.log(address);
    fetch('http://localhost:4444/search/' + address)
      .then(response => response.text())
      .catch()
      .then((data) => {
        var newState = {whoIsData: data}
        this.setState(newState);
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <h1>Enter Domain or IP!</h1>
        <input type="text"
          className="form-control InputField"
          placeholder="IP or Domain"
          aria-label="ip"
          id="inputValue">
        </input>
        <button
          onClick={ this.submitRequest }>Submit
        </button>
        <textarea value={this.state.whoIsData}></textarea>
      </div>
    )
  }
}