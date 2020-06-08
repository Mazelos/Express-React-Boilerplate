// this is the react main component 

import React, { Component } from 'react';
import './App.css';
import { getData } from '../util/getData';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const title = await getData();
    this.setState({
      title: title
    })
  }

  render() {
    return (
      <h1>{this.state.title}</h1>
    )
  }
}