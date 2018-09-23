import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
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

        const requiredFields = { accounts:[network] };

        scatter.getIdentity(requiredFields).then(() => {
            const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
    
            const eosOptions = { expireInSeconds:60 };
    
            const eos = scatter.eos(network, Eos, eosOptions);

            const trustee = "useraaaaaaaa"; // Replace me
            const publicKey = "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"; // Trustee public key
            const privateKey = "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3";  // Sender private key
            const plainWill = "Replace me with real form value";
            const encryptedWill = encrypt(privateKey, publicKey, plainWill);

            const authOptions = { authorization:[`${account.name}@${account.authority}`] };
            const data = {"_user": account.name, "_trustee": trustee, "_will": encryptedWill};
            eos.contract("willchain", {requiredFields}).then(contract => contract.update(data, authOptions)).catch(error => {
                console.log(error);
            })

    
        }).catch(error => {
            this.props.UpdateScatter(null);
            console.error(error);
        });
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