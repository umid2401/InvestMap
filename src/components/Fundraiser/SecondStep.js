import React from 'react';

const SecondStep = () => {
    return (
        <>
            <div id="wizard_Service" className="tab-pane  row" role="tabpanel">
          
           <div className="mb-3 col-12 col-md-6">
            <label htmlFor="logo" className="form-label">
             Name Of bank
            </label>
            <input
              type="text"
              className="form-control"
              id="logo"
              placeholder="Name Of Bank"
            />
          </div>

          {/* Legal Name */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="legalName" className="form-label">
            MFO
            </label>
            <input
              type="number"
              className="form-control"
              id="legalName"
              placeholder="MFO"
            />
          </div>

          {/* TIN */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tin" className="form-label">
            Accaunt Number 1
            </label>
            <input
              type="text"
              className="form-control"
              id="tin"
              placeholder="Accaunt Number 1"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tin" className="form-label">
            Accaunt Number 2
            </label>
            <input
              type="text"
              className="form-control"
              id="tin"
              placeholder="Accaunt Number 2"
            />
          </div>
         
          {/* Logo */}
         
                
            </div>
        </>
    );
};

export default SecondStep;