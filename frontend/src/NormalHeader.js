import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ScatterJS from 'scatter-js/dist/scatter.esm';
import Eos from 'eosjs';

class NormalHeader extends Component {

    handleClick = (text) => {
        this.props.ChangePageTo(text)
    }

    SignIn = () => {
      ScatterJS.scatter.connect('frontend').then(connected => {
        if(!connected) {
          this.props.UpdateScatter(null);
          return;
        }
    
        const scatter = ScatterJS.scatter;
        this.props.UpdateScatter(scatter);
      }).catch(error => {
        this.props.UpdateScatter(null);
        console.error(error);
      });
    }
  
    render() {
      return (
        <header className="App-header">
            <div className="logo" >
              <img src={logo}/>
            </div>
            <div className="header-options-section">
                <div className="header-items" onClick={(ev) => this.handleClick("Home")}>
                    Home
                </div>
                <div className="header-items" onClick={(ev) => this.handleClick("JoinUs")}>
                    Join Us
                </div>
            </div>
            <div className="header-buttons">
                <button type="button" className="btn btn-success" onClick={(ev) => this.SignIn()}>Sign In</button>
            </div>
          </header>
      )
    }
  }

  export default NormalHeader;