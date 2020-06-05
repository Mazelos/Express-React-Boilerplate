// this is the react main component 

import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ""
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch('http://localhost:8000/', { method: "get" }).then(response => {
      return response.json() 
    }).then(jsonResponse => {
      console.log(jsonResponse);
      // this.setState({
      //   message: jsonResponse.message
      // })
    }) 
  }

  render() {
    console.log(this.state.message);
    return (
      // <h1>{this.state.message}</h1>
      <h1>Hello world</h1>
    )
  }
}