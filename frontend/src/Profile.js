import React, { Component } from 'react';
import './App.css';

class Profile extends Component {

    render() {
      return (
        <div className="container">
            <ul>
                <li><a href="#" onClick={(ev) => this.props.ChangePageTo("CreateWill")}>Create New Will</a></li>
                <li><a href="#">Update Existing Will</a></li>
                <li><a href="#">Update Trustees</a></li>
                <li><a href="#">Cancel Existing Will</a></li>
            </ul>
        </div>
      )
    }
  }

  export default Profile;