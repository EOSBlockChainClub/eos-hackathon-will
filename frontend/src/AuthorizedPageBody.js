import React, { Component } from 'react';
import './App.css';
import Profile from './Profile.js';
import Beneficiaries from './Beneficiaries.js';
import Executor from './Executor.js';
import CreateWill from './CreateWill.js';

class AuthorizedPageBody extends Component {

    Body = () => {
        if (this.props.currentpage === "Profile"){
          return <Profile ChangePageTo={this.props.ChangePageTo}/>
        }
        else if (this.props.currentpage === "Beneficiaries"){
          return <Beneficiaries ChangePageTo={this.props.ChangePageTo}/>
        }
        else if (this.props.currentpage === "Executor"){
          return <Executor ChangePageTo={this.props.ChangePageTo}/>
        }
        else if (this.props.currentpage === "CreateWill"){
          return <CreateWill ChangePageTo={this.props.ChangePageTo}/>
        }
        else {
          return <div/>
        }
    }
    render() {
      return this.Body();
    }
  }

  export default AuthorizedPageBody;