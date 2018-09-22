import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PageBody from './PageBody.js';

import ScatterJS from 'scatter-js/dist/scatter.cjs';

class App extends Component {

  state = {
    currentpage: "Profile",
    scatter: null
  };

  componentDidMount() {
    ScatterJS.scatter.connect("frontend").then(connected => {
      if(!connected) return false;
      this.setState({scatter: ScatterJS.scatter});
      window.scatter = null;
    });
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
