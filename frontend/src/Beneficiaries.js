import React, { Component } from 'react';
import './App.css';

class Beneficiaries extends Component {

    render() {
      return (
        <div className="container">
            <ul>
                <li><a href="#">Submit a Claim</a></li>
                <li><a href="#">Contact Executor</a></li>
                <li><a href="#">Beneficiar Search</a></li>
            </ul>
        </div>
      )
    }
  }

  export default Beneficiaries;