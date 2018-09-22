import React, { Component } from 'react';
import './App.css';

class PageBody extends Component {

    Body = () => {
        if (this.props.currentpage === "Profile"){
        return <div> This page is for My profile! </div>;
        }
        else if (this.props.currentpage === "Beneficiaries"){
        return <div> This page is for Beneficiaries! </div>;
        }
        else{
        return <div> This page is for Trustees! </div>;
        }
    }
    render() {
      return this.Body();
    }
  }

  export default PageBody;