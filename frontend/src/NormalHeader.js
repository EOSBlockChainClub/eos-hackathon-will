import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ScatterJS from 'scatter-js/dist/scatter.esm';
import Eos from 'eosjs';

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

            const transactionOptions = { authorization:[`${account.name}@${account.authority}`] };
            // let actions = [{
            //     account: ["willchain"],
            //     name: ["update"],
            //     data: {
            //         "_user": account.name,
            //         "_trustee": "useraaaaaaaa",
            //         "_will": "test"
            //     }
            // }];
            eos.contract("willchain", {requiredFields}).then(contract => contract.update({"_user": account.name,
            "_trustee": "useraaaaaaaa",
            "_will": "test"}, transactionOptions)).catch(error => {
                console.log(error);
            })
            // const result = eos.contract('willchain').update({"_user": account.name,
            // "_trustee": "useraaaaaaaa",
            // "_will": "test"}, transactionOptions);
            // eos.transaction({actions:[transactionOptions]}).catch(error => {
            //     console.error(error);
            // });;
    
            // eos.transfer(account.name, 'useraaaaaaaa', '1.0000 EOS', 'memo', transactionOptions).then(trx => {
            //     console.log(`Transaction ID: ${trx.transaction_id}`);
            // }).catch(error => {
            //     console.error(error);
            // });
    
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