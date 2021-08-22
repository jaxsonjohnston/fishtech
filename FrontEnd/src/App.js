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

  //   super();
  //   this.state = {apiState: null, resoponse: "", address: "" };
  //   this.whois = new Whois();
  //   this.whois.onChangeListener((state, response) => {
  //     this.setState({ apiState: state, response });
  //   });
  //   this.submitAddress = this.submitAddress.bind(this);
  // }

  // submitAddress(address) {
  //   this.whois.submit(address);
  // }



  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <p>Input something to find out about it!</p>
  //       </header>
  //       <Request submit={ this.submitAddress }/>
  //       <Response
  //         apiState={ this.state.apiState }
  //         response={ this.state.resoponse }
  //       />
  //     </div>
  //   )
}