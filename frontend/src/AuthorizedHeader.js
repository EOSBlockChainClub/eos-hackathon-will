import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class AuthorizedHeader extends Component {

    handleClick = (text) => {
        this.props.ChangePageTo(text)
    }

    SignOut = () => {
      this.props.UpdateScatter(null);
    }
  
    render() {
      return (
        <header className="App-header">
            <div className="logo" >
              <img src={logo}/>
            </div>
            <div className="header-options-section">
              <div className="header-items" onClick={(ev) => this.handleClick("Profile")}>
                <a href="#">Wills</a>
              </div>
              <div className="header-items" onClick={(ev) => this.handleClick("Beneficiaries")}>
                <a href="#">Beneficiaries</a>
              </div>
              <div className="header-items" onClick={(ev) => this.handleClick("Executor")}>
                <a href="#">Executors</a>
              </div>
            </div>
            <div className="header-buttons">
              <button type="button" className="btn btn-danger" onClick={(ev) => this.SignOut()}>Sign Out</button>
            </div>
          </header>
      )
    }
  }

  export default AuthorizedHeader;