import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import JoinUs from './JoinUs.js';

class NormalPageBody extends Component {

    Body = () => {
        if (this.props.currentpage === "Home"){
          return <Home/>
        }
        else{
          return <JoinUs/>
        }
    }
    render() {
      return this.Body();
    }
  }

  export default NormalPageBody;