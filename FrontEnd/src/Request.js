// import React, { Component } from 'react';
// import './App.css'

// export default class Request extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { value: "", };
//         this.passValue = this.passValue.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     passValue() {
//         console.log("passing value of: " + this.state.value);
//         this.props.submit(this.state.value)
//         //call API
        
//         this.setState({ value: "" })
//     }

//     onSubmit(ev) {
//         if (ev.key === "Enter") {
//             this.passValue();
//             ev.target.value = "";
//         }
//     }

//     handleChange(ev) {
//         this.setState({ value: ev.target.value });
//         ev.preventDefault();
//     }

//     responseHandler() {
//         switch (this.props.apiState) {
//             case ApiState.ERROR_BAD_ADDRESS:
//                 return <div className="error-text"><p>Error: Invalid address [{ this.props.response }],
//                     try again</p></div>
//             case ApiState.ERROR_NETWORK:
//                 return <div className="error-text"><p>Error: Unable to reach server</p></div>
//             case ApiState.SUCCESS:
//                 return <div className="response-text"><p>{ this.props.response }</p></div>
//             case ApiState.LOADING:
//                 return <div className="loading spinner-border text-light">
//                     <span className="sr-only">Loading</span>
//             </div>
//             default:
//                 return null;
//         }
//     }

//     render() {
//         return (
//             <div className="FormContainer">
//                 <input type="text"
//                        className="form-control InputField"
//                        placeholder="IP or Domain"
//                        aria-label="ip"
//                        onKeyDown={ this.onSubmit }
//                        onChange={ this.handleChange }
//                        value={ this.state.value }>
//                 </input>
//                 <button className="btn btn-outline-light FormButton"
//                         onClick={ this.passValue }>Submit
//                 </button>
//                 <output type="text"></output>
//             </div>
//         )
//     }
// }