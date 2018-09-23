import React, { Component } from 'react';
import './App.css';

class CreateWill extends Component {

    render() {
      return (
        <div className="container">
            <form>
              <p><u>Executor's Details:</u></p>
              <div className="form-group row">  
                <label for="ExeAccount" className="col-sm-2 col-form-label">Executor's Account</label>
                <div className="col-sm-10">
                  <select className="custom-select mr-sm-2" id="ExeAccount" onChange={this.props.handleExecutorChange}>
                    <option selected>Choose...</option>
                    <option value="useraaaaaaaa">useraaaaaaaa</option>
                    <option value="useraaaaaaab">useraaaaaaab</option>
                    <option value="useraaaaaaac">useraaaaaaac</option>
                  </select>
                </div>
              </div>
              <p><u>Beneficiar's Details:</u></p>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="validationCustom01">First name</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="First name" onChange={this.props.handleFNameChange} required/>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="validationCustom02">Last name</label>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" onChange={this.props.handleLNameChange} required/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label for="validationCustomUsername">Percentage</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="validationCustomUsername" placeholder="percentage" aria-describedby="inputGroupPrepend" onChange={this.props.handlePercentageChange} required/>
                      <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupPrepend">%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label for="validationCustom03">Email</label>
                  <input type="text" className="form-control" id="validationCustom03" placeholder="Email" onChange={this.props.handleEmailChange} required/>
                </div>
                <div className="col-md-4 mb-3">
                  <label for="validationCustom04">Phone</label>
                  <input type="text" className="form-control" id="validationCustom04" placeholder="Phone" onChange={this.props.handlePhoneChange} required/>
                </div>
              </div>
              <p><u>Requirements for Claim:</u></p>
              <div className="form-row">
                <div className="custom-control custom-checkbox mb-4 extra-padding">
                  <input type="checkbox" className="custom-control-input" id="deathCertificate" onChange={this.props.handledeathCertificateChange}/>
                  <label className="custom-control-label" for="deathCertificate">Death Certificate</label>
                </div>
                <div className="custom-control custom-checkbox mb-4 extra-padding">
                  <input type="checkbox" className="custom-control-input" id="biometric" onChange={this.props.handlebiometricChange}/>
                  <label className="custom-control-label" for="biometric">Biometric</label>
                </div>
                <div className="custom-control custom-checkbox mb-4 extra-padding">
                  <input type="checkbox" className="custom-control-input" id="powerOfAttorney" onChange={this.props.handlepowerOfAttorneyChange}/>
                  <label className="custom-control-label" for="powerOfAttorney">power of attorney</label>
                </div>
              </div>
              <div>
                <button type="button" className="btn btn-default add-will-buttons" onClick={(ev) => this.props.ChangePageTo("Profile")}>Cancel</button>
                <button type="button" className="btn btn-primary add-will-buttons">Add Beneficiar</button>
                <button type="submit" className="btn btn-primary add-will-buttons" onClick={(ev) => this.props.CreateEntry()}>Add This Will</button>
              </div>
              
            </form>
        </div>
      )
    }
  }

  export default CreateWill;