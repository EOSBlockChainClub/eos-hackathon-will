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
                  <select className="custom-select mr-sm-2" id="ExeAccount">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <p><u>Beneficiar's Details:</u></p>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="validationCustom01">First name</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required/>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="validationCustom02">Last name</label>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label for="validationCustomUsername">Percentage</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="validationCustomUsername" placeholder="percentage" aria-describedby="inputGroupPrepend" required/>
                      <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupPrepend">%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label for="validationCustom03">Email</label>
                  <input type="text" className="form-control" id="validationCustom03" placeholder="City" required/>
                </div>
                <div className="col-md-4 mb-3">
                  <label for="validationCustom04">Phone</label>
                  <input type="text" className="form-control" id="validationCustom04" placeholder="State" required/>
                </div>
              </div>
              <p><u>Requirements for Claim:</u></p>
              <div className="form-row">
                <div className="custom-control custom-checkbox mb-4">
                  <input type="checkbox" className="custom-control-input" id="customControlValidation1"/>
                  <label className="custom-control-label" for="customControlValidation1">Death Certificate</label>
                </div>
                <div className="custom-control custom-checkbox mb-4">
                  <input type="checkbox" className="custom-control-input" id="customControlValidation2"/>
                  <label className="custom-control-label" for="customControlValidation2">Biometric</label>
                </div>
              </div>
              <div>
                <button type="button" className="btn btn-default add-will-buttons">Cancel</button>
                <button type="button" className="btn btn-primary add-will-buttons">Add Beneficiar</button>
                <button type="submit" className="btn btn-primary add-will-buttons">Add This Will</button>
              </div>
              
            </form>
        </div>
      )
    }
  }

  export default CreateWill;