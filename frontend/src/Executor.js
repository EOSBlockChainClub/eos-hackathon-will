import React, { Component } from 'react';
import './App.css';

class Executor extends Component {

    render() {
      return(
        <div className="container">
            <ul>
                <li><a href="#">Manage Claims</a></li>
                <li><a href="#">Contact Testator</a></li>
                <li><a href="#">Contact Beneficiaries</a></li>
                <li><a href="#">Executors Search</a></li>
            </ul>
        </div>
      )
    }
  }

  export default Executor;