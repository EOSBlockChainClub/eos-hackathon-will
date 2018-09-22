import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PageBody from './PageBody.js';

// import ScatterJS from 'scatter-js/dist/scatter.cjs';

import ScatterJS from 'scatter-js/dist/scatter.esm';
import Eos from 'eosjs';

// Networks are used to reference certain blockchains.
// They let you get accounts and help you build signature providers.
const network = {
  blockchain:'eos',
  protocol:'https',
  host:'nodes.get-scatter.com',
  port:443,
  chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
}
class App extends Component {

  state = {
    currentpage: "Profile",
    scatter: null,
    host: null,
    socket: null
  };


  componentDidMount() {
    ScatterJS.scatter.connect('frontend').then(connected => {

      // If the user does not have Scatter or it is Locked or Closed this will return false;
      if(!connected) return false;
  
      const scatter = ScatterJS.scatter;
      this.setState({
        scatter: ScatterJS.scatter,
        host: '127.0.0.1:3000',
        socket: new WebSocket(`ws://127.0.0.1:3000/socket.io/?EIO=3&transport=websocket`)
      });
      // Now we need to get an identity from the user.
      // We're also going to require an account that is connected to the network we're using.
      const requiredFields = { accounts:[network] };
      scatter.getIdentity(requiredFields).then(() => {
  
          // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
          // the user for their account name beforehand. They could still give you a different account.
          const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
  
          // You can pass in any additional options you want into the eosjs reference.
          const eosOptions = { expireInSeconds:60 };
  
          // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
          const eos = scatter.eos(network, Eos, eosOptions);
  
          // ----------------------------
          // Now that we have an identity,
          // an EOSIO account, and a reference
          // to an eosjs object we can send a transaction.
          // ----------------------------
  
  
          // Never assume the account's permission/authority. Always take it from the returned account.
          const transactionOptions = { authorization:[`${account.name}@${account.authority}`] };
  
          eos.transfer(account.name, 'helloworld', '1.0000 EOS', 'memo', transactionOptions).then(trx => {
              // That's it!
              console.log(`Transaction ID: ${trx.transaction_id}`);
          }).catch(error => {
              console.error(error);
          });
  
      }).catch(error => {
          // The user rejected this request, or doesn't have the appropriate requirements.
          console.error(error);
      });
  });
  
    // ScatterJS.scatter.connect("frontend").then(connected => {
    //   if(!connected) return false;
    //   this.setState({
    //     scatter: ScatterJS.scatter,
    //     host: '127.0.0.1:3000',
    //     socket: new WebSocket(`ws://127.0.0.1:3000/socket.io/?EIO=3&transport=websocket`)
    //   });
    //   window.scatter = null;
    // });
  }

  ChangePageTo = (pageType) => this.setState({currentpage: pageType})
  
  render() {
    return (
      <div className="App">
        <Header ChangePageTo={this.ChangePageTo} scatter={this.state.scatter}/>
        <PageBody currentpage={this.state.currentpage} scatter={this.state.scatter}/>
      </div>
    );
  }
}

export default App;
