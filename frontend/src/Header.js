import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {

    handleClick = (text) => {
        this.props.ChangePageTo(text)
    }

    GetSignInSection = () => {
        if (this.props.scatter != null){
            return <div>{this.props.scatter.identity}</div> 
        }
        else {
            return <button type="button" className="btn btn-success">Sign In</button>
        }
    }
  
    render() {
      return (
        <header className="App-header">
            <div className="logo" >
              <img src={logo}/>
            </div>
            <div className="header-options-section">
              <div className="header-items" onClick={(ev) => this.handleClick("Profile")}>
                My Profile
              </div>
              <div className="header-items" onClick={(ev) => this.handleClick("Beneficiaries")}>
                My Beneficiaries
              </div>
              <div className="header-items" onClick={(ev) => this.handleClick("Trustees")}>
                My Trustees
              </div>
            </div>
            <div className="header-buttons">
                {this.GetSignInSection()}
            </div>
          </header>
      )
    }
  }

  export default Header;