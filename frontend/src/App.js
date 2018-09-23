import React, { Component } from 'react';
import './App.css';
import AuthorizedHeader from './AuthorizedHeader.js';
import AuthorizedPageBody from './AuthorizedPageBody.js';
import NormalHeader from './NormalHeader.js';
import NormalPageBody from './NormalPageBody.js';

import ScatterJS from 'scatter-js/dist/scatter.esm';
import Eos from 'eosjs';
import { encrypt, decrypt } from 'eos-communication-lib';

const network = {
  blockchain:'eos',
  protocol:'http',
  host:'localhost',
  port: 8888,
  chainId:'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
}

class App extends Component {

  state = {
    currentpage: "Profile",
    scatter: null,
    host: null,
    socket: null,
    executor: '',
    firstName: '',
    lastName: '',
    percentage: '',
    email: '',
    phone: '',
    deathCertificate: false,
    biometric: false,
    powerOfAttorney: false
  };

  handleExecutorChange = (e) => {
    this.setState({executor: e.target.value});
  }
  handleFNameChange = (e) => {
    this.setState({firstName: e.target.value});
  }

  handleLNameChange = (e) => {
    this.setState({lastName: e.target.value});
  }

  handlePercentageChange = (e) => {
    this.setState({percentage: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePhoneChange = (e) => {
    this.setState({phone: e.target.value});
  }
  handledeathCertificateChange = (e) => {
    this.setState({deathCertificate: !this.state.deathCertificate});
  }
  handlebiometricChange = (e) => {
    this.setState({biometric: !this.state.biometric});
  }
  handlepowerOfAttorneyChange = (e) => {
    this.setState({powerOfAttorney: !this.state.powerOfAttorney});
  }

  UpdateScatter = (scatter) => {
    window.scatter = null;
    this.setState({scatter: scatter})
  }

  ChangePageTo = (pageType) => this.setState({currentpage: pageType})

  CreateEntry = () => {
    const requiredFields = { accounts:[network] };

        this.state.scatter.getIdentity(requiredFields).then(() => {
            const account = this.state.scatter.identity.accounts.find(x => x.blockchain === 'eos');
    
            const eosOptions = { expireInSeconds:60 };
    
            const eos = this.state.scatter.eos(network, Eos, eosOptions);

            const trustee = "useraaaaaaaa"; // Replace me
            const publicKey = "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"; // Trustee public key
            const privateKey = "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3";  // Sender private key
            const plainWill = ""+this.props.executor+this.props.firstName+this.props.lastName+this.props.percentage+this.props.email+this.props.phone;
            const encryptedWill = encrypt(privateKey, publicKey, plainWill);

            const authOptions = { authorization:[`${account.name}@${account.authority}`] };
            const data = {"_user": account.name, "_trustee": trustee, "_will": encryptedWill};
            eos.contract("willchain", {requiredFields}).then(contract => contract.update(data, authOptions)).catch(error => {
                console.log(error);
            })        }).catch(error => {
              this.UpdateScatter(null);
              console.error(error);
          });
  }
  
  render() {
    if (this.state.scatter != null){
      return (
        <div className="App">
          <AuthorizedHeader 
            ChangePageTo={this.ChangePageTo} 
            UpdateScatter={this.UpdateScatter} 
            scatter={this.state.scatter}/>
          <div className="For_bg">
            <div className="extra-space">
            </div>
            <AuthorizedPageBody 
              ChangePageTo={this.ChangePageTo} 
              currentpage={this.state.currentpage} 
              UpdateScatter={this.UpdateScatter} 
              scatter={this.state.scatter}
              handleExecutorChange={this.handleExecutorChange}
              handleFNameChange={this.handleFNameChange}
              handleLNameChange={this.handleLNameChange}
              handlePercentageChange={this.handlePercentageChange}
              handleEmailChange={this.handleEmailChange}
              handlePhoneChange={this.handlePhoneChange}
              handledeathCertificateChange={this.handledeathCertificateChange}
              handlebiometricChange={this.handlebiometricChange}
              handlepowerOfAttorneyChange={this.handlepowerOfAttorneyChange}
              CreateEntry={this.CreateEntry}
              />
          </div>
          
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <NormalHeader 
            ChangePageTo={this.ChangePageTo} 
            UpdateScatter={this.UpdateScatter} 
            scatter={this.state.scatter}
            executor={this.state.executor}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            percentage={this.state.percentage}
            email={this.state.email}
            phone={this.state.phone}
            deathCertificate={this.state.deathCertificate}
            biometric={this.state.biometric}
            powerOfAttorney={this.state.powerOfAttorney}
            />
          <div className="for-bg">
            <div className="extra-space">
            </div>
            <NormalPageBody ChangePageTo={this.ChangePageTo} currentpage={this.state.currentpage} UpdateScatter={this.UpdateScatter} scatter={this.state.scatter}/>
          </div>
        </div>
      );
    }
    
  }
}

export default App;
