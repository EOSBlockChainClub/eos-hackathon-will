import React, { Component } from 'react';
import './App.css';
import AuthorizedHeader from './AuthorizedHeader.js';
import AuthorizedPageBody from './AuthorizedPageBody.js';
import NormalHeader from './NormalHeader.js';
import NormalPageBody from './NormalPageBody.js';

import ScatterJS from 'scatter-js/dist/scatter.esm';
import Eos from 'eosjs';

class App extends Component {

  state = {
    currentpage: "Profile",
    scatter: null,
    host: null,
    socket: null
  };

  UpdateScatter = (scatter) => {
    window.scatter = null;
    this.setState({scatter: scatter})
  }

  ChangePageTo = (pageType) => this.setState({currentpage: pageType})
  
  render() {
    if (this.state.scatter != null){
      return (
        <div className="App">
          <AuthorizedHeader ChangePageTo={this.ChangePageTo} UpdateScatter={this.UpdateScatter} scatter={this.state.scatter}/>
          <div className="For_bg">
            <div className="extra-space">
            </div>
            <AuthorizedPageBody ChangePageTo={this.ChangePageTo} currentpage={this.state.currentpage} UpdateScatter={this.UpdateScatter} scatter={this.state.scatter}/>
          </div>
          
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <NormalHeader ChangePageTo={this.ChangePageTo} UpdateScatter={this.UpdateScatter} scatter={this.state.scatter}/>
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
